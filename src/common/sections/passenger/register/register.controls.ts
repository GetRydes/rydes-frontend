import styles from "./form.module.scss";

export const registerFormControls = [
   {
      label: "Email Address",
      type: "input",
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
      type: "input",
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
      type: "code",
      properties: {
         name: "emailCode",
         placeholder: "1234",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
         numInputs: 4,
      },
   },
];

export const nameControls = [
   {
      type: "input",
      properties: {
         name: "firstName",
         placeholder: "John",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
   {
      type: "input",
      properties: {
         name: "lastName",
         placeholder: "Doe",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];

export const phoneNumberControls = [
   {
      type: "input",
      properties: {
         name: "phoneNumber",
         type: "number",
         placeholder: "2345678904859",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];
