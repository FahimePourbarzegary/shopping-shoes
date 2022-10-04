import { useFormik } from "formik";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import * as yup from "yup";
import { loginUser } from "../../services/loginService";
import BoxNotif from "../common/BoxNotif";
import Input from "../common/Input";
import "./LoginForm.css";
const LoginForm = () => {
  const navigate=useNavigate();
  const [error, setError] = useState();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
    };
    try {
      const { data } = await loginUser(userData);
      setError(null);
      navigate("/");
    } catch (error) {
      if (error.response || error.response.data.message)
        setError(error.response.data.message);
    }
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
        {error ? <BoxNotif type="error" message={error}></BoxNotif> : null}
        <Link to="/signup">Are you not Signup?</Link>
      </form>
    </div>
  );
};

export default LoginForm;
