import { StateProps } from "../models/types";

export const rootReducer = (state: StateProps, action: RootActionProps): StateProps => {
   switch (action.type) {
      case "SET_LOADING":
         return {
            ...state,
            loading: action.payload,
         };
      default:
         return state;
   }
};

export type RootActionProps = SetLoadingActionProps;

export type SetLoadingActionProps = {
   type: "SET_LOADING";
   payload: boolean;
};
