import styles from "./signin.module.scss";

export const loginFormControls = (
   errors: { [key: string]: any },
   onBlur: React.FocusEventHandler<HTMLInputElement>,
) => [
   {
      label: "Email Address",
      type: "input",
      properties: {
         type: "email",
         name: "email",
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
      label: "Password",
      type: "input",
      properties: {
         type: "password",
         name: "password",
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
