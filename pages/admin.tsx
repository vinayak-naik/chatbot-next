import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Admin = () => {
  const admin = useSelector((state: RootState) => state.admin);
  console.log(admin);

  return <div>Admin</div>;
};

export default Admin;
