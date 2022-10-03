import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import "./SignupForm.css";
const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = yup.object({
    name: yup.string().required("name is Reqired"),
    email: yup.string().email("email is invalid").required("email is Required"),
    phoneNumber: yup.string().required("phoneNumber is Reqired"),
    password: yup
      .string()
      .required("password is Reqired")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="signupform">
      <form className="form" onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="ConfirmPassword"
          name="confirmPassword"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn btn__primary"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
