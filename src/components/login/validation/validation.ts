import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
  .string()
  .required("This field is required")
  .email("Email entered incorrectly"),
  password: yup
  .string()
  .min(8, "Password must be more than 8 character")
  .max(30, "Password must be no more than 30 characters")
  .required("This field is required"),
})