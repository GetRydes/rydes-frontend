import { ActionProps } from "../actions/action.types";
import { StateProps } from "../types";
import { rootReducer } from "./root";
import { passengerReducer } from "./passenger";
import { formReducer } from "./form";

export const combineReducers = (slices: any) => (state: StateProps, action: ActionProps) => {
   return Object.keys(slices).reduce((currentState, sliceKey) => {
      const newState = slices[sliceKey](currentState, action);
      if (newState) return { ...currentState, ...newState };
      return currentState;
   }, state);
};

export default combineReducers({
   rootReducer,
   passengerReducer,
   formReducer,
});
