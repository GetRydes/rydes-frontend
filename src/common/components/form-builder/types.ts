import { FormElementProps } from "../form-element/types";

export interface FormBuilderProps {
   controls: FormControl[];
   classNames?: { [key: string]: string };
   onSubmit?: (...args: any[]) => any;
   submitButtonLabel?: string;
}

export type FormControl = FormElementProps;
