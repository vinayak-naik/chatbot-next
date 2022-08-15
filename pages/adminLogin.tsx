import React, { useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import TextError from "../components/atoms/textError";
import { AdminFormIF } from "../models/admin.model";
import { useAdminLoginMutation } from "../redux/api-query/adminApi";
import { useRouter } from "next/router";
import style from "../styles/pages/adminLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminToken } from "../redux/redux-toolkit/adminSlice";
import { RootState } from "../redux/store";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const AdminLoginForm = () => {
  const dispatch = useDispatch();
  const [addMessage] = useAdminLoginMutation();
  const { data } = useSelector((state: RootState) => state.admin);

  const router = useRouter();
  useEffect(() => {
    if (data && data.accessToken) {
      router.push("/admin");
    }
  }, [data]); //eslint-disable-line

  const onSubmit = async (values: AdminFormIF) => {
    const res = await addMessage(values);
    console.log(res);
    window.localStorage.setItem("adminTokens", JSON.stringify(res));
    dispatch(updateAdminToken(res));
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

export default AdminLoginForm;
