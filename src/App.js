/** @format */

import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import { smooth } from "./utils/smooth";
import { link } from "./utils/link";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import UserService from "./components/UserService";
import ServiceFlow from "./components/ServiceFlow";
import Promotion from "./components/Promotion";
import OwnerService from "./components/OwnerService";
import BusinessModel from "./components/BusinessModel";

const App = () => {
  useEffect(() => {
    smooth();
    link();
  });
  return (
    <>
      <Header />

      <Main>
        <Banner />
        <UserService />
        <ServiceFlow />
        <Promotion />
        <OwnerService />
        <BusinessModel />
      </Main>

      <Footer />
    </>
  );
};

export default App;
