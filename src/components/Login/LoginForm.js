import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "../common/Input";
import "./LoginForm.css";
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = yup.object({
    email: yup.string().required("email is Required"),
    password: yup.string().required("password is Reqiured"),
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
        <Input formik={formik} label="Email" name="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn btn__primary"
        >
           
          Login
        </button>
        <Link to="/signup">Are you not Signup?</Link>
      </form>
    </div>
  );
};

export default LoginForm;
