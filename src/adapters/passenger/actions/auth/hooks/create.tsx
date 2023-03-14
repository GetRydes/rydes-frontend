import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { Notify } from "../../../../../common/components";
import { actionSetLoading, useAppContext } from "../../../../../store";
import passengerClient from "../../../../clients/rest/passenger";
import { useStateInitializer } from "./get";

export const useLogin = () => {
   const stateInitializer = useStateInitializer();
   const [, dispatch] = useAppContext();
   const navigate = useNavigate();

   return async (formData: { email: string; password: string }) => {
      try {
         dispatch(actionSetLoading(true));
         const { data } = await passengerClient.post("/auth/login/password", formData);
         stateInitializer({ type: "login", data });
         navigate("/passenger/ride");
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

export const useRegister = () => {
   const stateInitializer = useStateInitializer();
   const [, dispatch] = useAppContext();

   return async (formData: { email: string; password: string; firstName: string; lastName:string; phoneNumber: string }) => {
      try {
         dispatch(actionSetLoading(true));
         const {data} = await passengerClient.post("/auth/register/password", formData);
         stateInitializer({ type: "login", data });
      } catch (err) {
         if (err instanceof AxiosError && err.response) {
            if (err.response.data) Notify.error(err.response.data.message);
            else Notify.error("Something went wrong, Please try again later");
         }
         dispatch(actionSetLoading(false));
      }
   }
};
