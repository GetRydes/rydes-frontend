export const registerFormControls = (
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
      },
   },
   {
      name: "firstName",
      label: "First Name",
      properties: {
         type: "text",
         placeholder: "Jack",
         required: true,
         className: errors.firstName ? "invalid" : "",
         onBlur,
      },
   },
   {
      name: "lastName",
      label: "Last Name",
      properties: {
         type: "text",
         placeholder: "Robinson",
         required: true,
         className: errors.lastName ? "invalid" : "",
         onBlur,
      },
   },
   {
      name: "phoneNumber",
      label: "Phone Number",
      properties: {
         type: "number",
         placeholder: "2341234567890",
         required: true,
         className: errors.lastName ? "invalid" : "",
         onBlur,
      },
   },
   {
      name: "password",
      label: "Password",
      properties: {
         type: "password",
         placeholder: "********",
         required: true,
         className: errors.lastName ? "invalid" : "",
         onBlur,
      },
   },
];
