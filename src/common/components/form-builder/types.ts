import { InputProps, OtpInputProps } from "../../elements";

export interface ElementCommonProps {
   onChange?: (data: { name: string; value: string }) => void;
   classNames?: { [key: string]: any };
   name: string;
   value?: string;
}

export type InputElementProps = {
   label?: string;
   type: string;
   properties: InputProps;
};

export type OtpInputElementProps = {
   label?: string;
   type: string;
   properties: OtpInputProps;
};

export type FormControl = InputElementProps | OtpInputElementProps;

export type FormElementProps = FormControl;

export interface FormBuilderProps {
   controls: FormControl[];
   classNames?: { [key: string]: string };
   onSubmit?: (...args: any[]) => any;
   submitButtonLabel?: string;
}
