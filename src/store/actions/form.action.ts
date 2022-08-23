import { FormActionProps } from "../reducers/form/types";

export const actionSetFormItem = (payload: { [key: string]: any }): FormActionProps => ({
   type: "SET_FORM_ITEM",
   payload,
});

export const actionSetFormData = (payload: { [key: string]: any }): FormActionProps => ({
   type: "SET_FORM_DATA",
   payload,
});
