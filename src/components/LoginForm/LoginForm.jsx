import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(20, "Too long")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldID = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            name="email"
            type="email"
            id={emailFieldId}
            className={css.input}
          />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={passwordFieldID} className={css.label}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            id={passwordFieldID}
            className={css.input}
          />
          <ErrorMessage name="password" component="span" />

          <div>
            <Link to="/register">You don`t have account? Sign Up!</Link>
          </div>

          <button type="submit" className={css.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
