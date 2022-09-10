export interface FormElementProps {
   label?: string;
   properties: { [key: string]: any; name: string };
}

export interface ElementCommonProps {
   onChange?: (data: OnChangeData) => void;
   classNames?: { [key: string]: any; name: string };
}

export interface OnChangeData {
   name: string;
   value: string;
}
