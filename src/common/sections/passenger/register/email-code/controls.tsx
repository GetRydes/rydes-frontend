import styles from "./email-code.module.scss";

export const emailCodeFormControls = [
   {
      properties: {
         type: "number",
         name: "emailCode",
         placeholder: "1234",
         required: true,
         classNames: {
            container: styles["form-content"],
         },
      },
   },
];
