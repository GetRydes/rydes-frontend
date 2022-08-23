import { StateProps } from "../../models/types";
import { FormActionProps } from "./types";

export const formReducer = (state: StateProps, action: FormActionProps) => {
   switch (action.type) {
      case "SET_FORM_ITEM":
         return {
            ...state,
            form: {
               ...state.form,
               [action.payload.name]: action.payload.value,
            },
         };
      case "SET_FORM_DATA":
         return {
            ...state,
            form: action.payload,
         };
      default:
         return state;
   }
};
