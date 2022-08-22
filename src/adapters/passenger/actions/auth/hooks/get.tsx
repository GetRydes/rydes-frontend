import { Dispatch, useContext } from "react";
import { useNavigate } from "react-router";
import { AppStateContext } from "../../../../../store";
import { actionSetCurrentPassenger } from "../../../../../store/actions/passenger.action";
import { actionSetLoading } from "../../../../../store/actions/root.action";
import { ActionProps } from "../../../../../store/actions/types";
import { StateProps } from "../../../../../store/models/types";
import { PASSENGER_ACCESS_TOKEN, PASSENGER_REFRESH_TOKEN } from "../../../../../utils/constants";
import TokenService from "../../../../../utils/token";

export const useStateInitializer = () => {
   const navigate = useNavigate();
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

   return (props: { type: string; data: any }) => {
      switch (props.type) {
         case "login":
            // dispatch({ type: "SET_TOKENS", payload: props.data.login });
            const expiry_date = new Date();
            expiry_date.setSeconds(expiry_date.getSeconds() + 300);
            TokenService.updateLocalToken(PASSENGER_ACCESS_TOKEN, props.data.data.accessToken, {
               expires: expiry_date,
               path: "/",
            });
            TokenService.updateLocalToken(PASSENGER_REFRESH_TOKEN, props.data.data.refreshToken, {
               expires: expiry_date,
               path: "/",
            });
            navigate("/passenger/ride");
            break;
         case "logout":
            dispatch(actionSetCurrentPassenger(null));
            TokenService.removeLocalToken(PASSENGER_ACCESS_TOKEN, { path: "/" });
            dispatch(actionSetLoading(false));
            break;
      }
   };
};

export const useLogout = () => {
   const navigate = useNavigate();
   const stateInitializer = useStateInitializer();

   return async () => {
      // you want to invalidate the token, by hitting the logout route on the backend
      stateInitializer({ type: "logout", data: null });
      navigate("/signin");
   };
};

export const useVerifyEmail = () => {};

export const useResetPassword = () => {};

export const useSocialLogin = () => {};

export const useVerifySocialLogin = () => {};
