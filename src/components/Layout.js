/* 
   File: components/Layout.js
   Author: Mohit Sharma
   Student ID: 301297059
   Date: January 28, 2024
*/
import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
