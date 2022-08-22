import styles from "./signin.module.scss";

export const loginFormControls = (
   errors: { [key: string]: any },
   onBlur: React.FocusEventHandler<HTMLInputElement>,
) => [
   {
      name: "email",
      label: "Email Address",
      properties: {
         type: "email",
         placeholder: "jack.robinson@bankr.com",
         required: true,
         className: errors.email ? "invalid" : "",
         onBlur,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
   {
      name: "password",
      label: "Password",
      properties: {
         type: "password",
         placeholder: "********",
         required: true,
         className: errors.password ? "invalid" : "",
         onBlur,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];
