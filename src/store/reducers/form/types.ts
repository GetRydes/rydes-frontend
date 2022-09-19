export type FormActionProps = SetFormItemActionProps | SetFormDataActionProps;

export interface SetFormItemActionProps {
   type: "SET_FORM_ITEM";
   payload: { name: string; value: any };
}

export interface SetFormDataActionProps {
   type: "SET_FORM_DATA";
   payload: { [key: string]: any };
}
