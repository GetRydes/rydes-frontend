import { StateProps } from "../../models/types";
import { PassengerActionProps } from "./types";

export const passengerReducer = (state: StateProps, action: PassengerActionProps) => {
   switch (action.type) {
      case "SET_CURRENT_PASSENGER":
         return {
            ...state,
            me: action.payload,
         };
      default:
         return state;
   }
};
