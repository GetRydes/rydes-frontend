import { PassengerActionProps } from "../reducers/passenger/types";

export const actionSetCurrentPassenger = (payload: any): PassengerActionProps => ({
   type: "SET_CURRENT_PASSENGER",
   payload,
});
