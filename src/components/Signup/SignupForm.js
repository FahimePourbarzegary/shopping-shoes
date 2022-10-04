import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signupUser } from "../../services/signupService";
import BoxNotif from "../common/BoxNotif";
import Input from "../common/Input";
import "./SignupForm.css";
const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = async (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
    };
    try {
      const { data } = await signupUser(userData);
      setError(null);
      navigate("/");
    } catch (error) {
      if (error.response || error.response.data.message)
        setError(error.response.data.message);
    }
  };
  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email("email is invalid").required("email is required"),
    phoneNumber: yup.string().required("phoneNumber is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
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
          label="PhoneNumber"
          name="phoneNumber"
          type="tel"
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
        {error ? <BoxNotif type="error" message={error}></BoxNotif> : null}
        <Link to="/login">Already Login?</Link>
      </form>
    </div>
  );
};

export default SignupForm;
