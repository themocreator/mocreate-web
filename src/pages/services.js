import React, { useState } from "react";
import { Header, ServicesContainer } from "./services.style";
import ReactDOM from "react-dom";
import { CircleButton, ServicesButton } from "./Button.style";
import { Fixed } from "@cantonjs/react-scroll-view";

const Services = (props) => {
  const discoveryHandler = (event) => {};

  const designHandler = (event) => {};

  const developmentHandler = (event) => {};

  return (
    <>
      <ServicesContainer className={"title"}>
        <label>The one-stop solution for all your needs.</label>
      </ServicesContainer>
      <ServicesContainer className={"description"}></ServicesContainer>
      <ServicesContainer className={"services"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ServicesButton onClick={discoveryHandler}>Discovery</ServicesButton>
          <ServicesButton onClick={designHandler}>Design</ServicesButton>
          <ServicesButton onClick={developmentHandler}>
            Development
          </ServicesButton>
        </div>
        <div
          style={{
            position: "absolute",
            left: "0px",
            bottom: "0px",
          }}
        >
          <CircleButton>WORK WITH ME</CircleButton>
        </div>
      </ServicesContainer>
      <CircleButton>WORK WITH ME</CircleButton>
    </>
  );
};

export default Services;
