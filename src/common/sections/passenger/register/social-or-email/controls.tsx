import styles from "./social-or-email.module.scss";

export const registerFormControls = [
   {
      label: "Email Address",
      properties: {
         type: "email",
         name: "email",
         placeholder: "jack.robinson@bankr.com",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];
