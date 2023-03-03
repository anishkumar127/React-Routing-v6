import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";
const Posts = () => {
  return (
    <Layout>
      Posts
      <Outlet />
    </Layout>
  );
};

export default Posts;
