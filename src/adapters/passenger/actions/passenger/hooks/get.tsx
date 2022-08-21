import { AxiosError } from "axios";
import { Dispatch, useContext } from "react";
import { Notify } from "../../../../../common/components";
import { AppStateContext } from "../../../../../store";
import { actionSetLoading } from "../../../../../store/actions/root.action";
import { ActionProps } from "../../../../../store/actions/types";
import { StateProps } from "../../../../../store/models/types";
import { getAuthenticatedPassenger } from "../api";

export const useSetCurrentUser = () => {
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

   return async () => {
      try {
         dispatch(actionSetLoading(true));
         const passenger = await getAuthenticatedPassenger();

         dispatch(actionSetLoading(false));
      } catch (err) {
         if (err instanceof AxiosError && err.response) {
            Notify.error(err.response.data.message);
         }
         dispatch(actionSetLoading(false));
      }
   };
};
