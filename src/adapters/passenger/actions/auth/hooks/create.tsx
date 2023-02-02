import { AxiosError } from "axios";
import { Dispatch, useContext } from "react";
import { Notify } from "../../../../../common/components";
import { AppStateContext, ActionProps, StateProps, actionSetLoading } from "../../../../../store";
import passengerClient from "../../../../clients/rest/passenger";
import { useStateInitializer } from "./get";

export const useLogin = () => {
   const stateInitializer = useStateInitializer();
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

   return async (formData: { email: string; password: string }) => {
      try {
         dispatch(actionSetLoading(true));
         const { data } = await passengerClient.post("/auth/login/password", formData);
         stateInitializer({ type: "login", data });
      } catch (err) {
         if (err instanceof AxiosError && err.response) {
            if (err.response.status === 401) Notify.error("Incorrect email or password");
            else if (err.response.data) Notify.error(err.response.data.message);
            else Notify.error("Something went wrong, Please try again later");
         }
         dispatch(actionSetLoading(false));
      }
   };
};

export const useRegister = () => {};
