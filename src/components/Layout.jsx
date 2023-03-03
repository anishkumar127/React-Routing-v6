import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container" style={{ minHeight: "82vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
