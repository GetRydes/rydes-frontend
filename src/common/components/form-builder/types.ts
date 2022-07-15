import { FormElementProps } from "../form-element/types";

export interface FormBuilderProps {
   controls: FormControl[];
   form: { [key: string]: any };
   setForm: React.Dispatch<
      React.SetStateAction<{
         [key: string]: any;
      }>
   >;
}

export type FormControl = FormElementProps;
