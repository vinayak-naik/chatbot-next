import { Button } from "semantic-ui-react";
import style from "../styles/components/header.module.css";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { updateAdminToken } from "../redux/redux-toolkit/adminSlice";
import { updateUserToken } from "../redux/redux-toolkit/userSlice";
import { useDispatch } from "react-redux";

const HeaderComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const admin = localStorage.getItem("adminTokens");
      const user = localStorage.getItem("userTokens");
      if (admin) {
        dispatch(updateAdminToken(JSON.parse(admin || "")));
      }
      if (user) {
        dispatch(updateUserToken(JSON.parse(user || "")));
      }
    }
  }, []); // eslint-disable-line

  return (
    <div className={style.container}>
      <h1 onClick={() => router.push("/")}>Chatbot</h1>
      <div className={style.rightBox}>
        <div className={style.navContainer}>
          <div className={style.navItem} onClick={() => router.push("/")}>
            Home
          </div>
          <div className={style.navItem} onClick={() => router.push("/login")}>
            Login
          </div>
          <div
            className={style.navItem}
            onClick={() => router.push("/register")}
          >
            Register
          </div>
          <div
            className={style.navItem}
            onClick={() => router.push("/feedback")}
          >
            Feedback
          </div>
          <div className={style.navItem} onClick={() => router.push("/help")}>
            Help
          </div>
        </div>
        <Button
          circular
          inverted
          color="green"
          size="medium"
          onClick={() => router.push("/adminLogin")}
        >
          {/* <Icon name="admin" /> */}
          Admin
        </Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
