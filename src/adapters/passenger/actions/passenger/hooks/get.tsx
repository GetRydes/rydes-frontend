import { Dispatch, useContext } from "react";
import { AppStateContext } from "../../../../../store";
import { actionSetLoading } from "../../../../../store/actions/root.action";
import { ActionProps } from "../../../../../store/actions/types";
import { StateProps } from "../../../../../store/models/types";

export const useSetCurrentUser = () => {
   const [, dispatch] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

   return async () => {
      dispatch(actionSetLoading(true));
      dispatch(actionSetLoading(false));
   };
};
