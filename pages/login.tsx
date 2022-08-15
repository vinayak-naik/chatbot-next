import React, { useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import TextError from "../components/atoms/textError";
import { UserLoginFormIF } from "../models/user.model";
import { useUserLoginMutation } from "../redux/api-query/userApi";
import { useRouter } from "next/router";
import style from "../styles/pages/userLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserToken } from "../redux/redux-toolkit/userSlice";
import { RootState } from "../redux/store";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const UserLoginForm = () => {
  const dispatch = useDispatch();
  const [addMessage] = useUserLoginMutation();
  const { data } = useSelector((state: RootState) => state.user);

  const router = useRouter();
  useEffect(() => {
    if (!data || data.accessToken === undefined) {
      router.push("/dashboard");
    }
  }, [data]); //eslint-disable-line

  const onSubmit = async (values: UserLoginFormIF) => {
    const res = await addMessage(values);
    console.log(res);
    window.localStorage.setItem("userTokens", JSON.stringify(res));
    dispatch(updateUserToken(res));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className={style.formContainer}>
            <Form method="post" className={style.formBox}>
              <div className={style.input}>
                <TextField
                  type="text"
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...formik.getFieldProps("email")}
                />
                <ErrorMessage component={TextError} name="email" />
              </div>
              <div className={style.input}>
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  {...formik.getFieldProps("password")}
                />
                <ErrorMessage component={TextError} name="password" />
              </div>
              <div className={style.input}>
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default UserLoginForm;
