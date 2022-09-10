import styles from "./form.module.scss";

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

export const passwordControls = [
   {
      properties: {
         type: "password",
         name: "password",
         placeholder: "",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];

export const emailCodeFormControls = [
   {
      properties: {
         type: "code",
         name: "emailCode",
         placeholder: "1234",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];

export const nameControls = [
   {
      properties: {
         type: "text",
         name: "firstName",
         placeholder: "John",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
   {
      properties: {
         type: "text",
         name: "lastName",
         placeholder: "Doe",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];
