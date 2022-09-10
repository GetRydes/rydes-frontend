import { SetFormDataActionProps, SetFormItemActionProps } from "../reducers/form/types";

export const actionSetFormItem = (
   payload: SetFormItemActionProps["payload"],
): SetFormItemActionProps => ({
   type: "SET_FORM_ITEM",
   payload,
});

export const actionSetFormData = (
   payload: SetFormDataActionProps["payload"],
): SetFormDataActionProps => ({
   type: "SET_FORM_DATA",
   payload,
});
