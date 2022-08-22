import { StateProps } from "../../models/types";
import { RootActionProps } from "./types";

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
