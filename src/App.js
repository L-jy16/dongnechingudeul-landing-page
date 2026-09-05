/** @format */

import React from "react";
import "./assets/scss/style.scss";

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
