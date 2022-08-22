import { Dispatch, useContext } from "react";
import { AppStateContext } from "../../../../../store";
import { actionSetLoading } from "../../../../../store/actions/root.action";
import { ActionProps } from "../../../../../store/actions/types";
import { StateProps } from "../../../../../store/models/types";
import passengerClient from "../../../../clients/rest/passenger";
import { useStateInitializer } from "./get";

export const useLogin = () => {
   const stateInitializer = useStateInitializer();
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

   return async () => {
      try {
         dispatch(actionSetLoading(true));
         const { data } = await passengerClient.post("/auth/login/password", {
            email: "corner@gmail.com",
            password: "aoo23@Wazobia",
         });
         stateInitializer({ type: "login", data });
      } catch (err) {
         console.log("error", err);
      }
   };
};

export const useRegister = () => {};
