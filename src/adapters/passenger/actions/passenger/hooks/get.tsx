import { AxiosError } from "axios";
import { Dispatch, useContext } from "react";
import { Notify } from "../../../../../common/components";
import { AppStateContext } from "../../../../../store";
import { actionSetCurrentPassenger } from "../../../../../store/actions/passenger.action";
import { actionSetLoading } from "../../../../../store/actions/root.action";
import { ActionProps } from "../../../../../store/actions/types";
import { StateProps } from "../../../../../store/models/types";
import { useLogout } from "../../auth";
import { getAuthenticatedPassenger } from "../api";

export const useSetCurrentUser = () => {
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);
   const logout = useLogout();

   return async () => {
      try {
         dispatch(actionSetLoading(true));
         const passenger = await getAuthenticatedPassenger();
         // the data in the response should be typed;
         // you might have to do this manually
         // the type will match what will be in the me object
         dispatch(actionSetCurrentPassenger(passenger.data));

         dispatch(actionSetLoading(false));
      } catch (err) {
         if (err instanceof AxiosError && err.response) {
            Notify.error(err.response.data.message);
         }
         logout();
      }
   };
};
