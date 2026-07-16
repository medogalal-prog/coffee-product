import React from "react";
import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
function defaultLayoutProviders() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default defaultLayoutProviders;
