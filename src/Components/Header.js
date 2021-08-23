import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from "./m.png";
import "../App.css";
import { useState } from "react";
import Button from "../Components/Button";
function Header() {
  return (
    <ReactBootStrap.Container>
      <ReactBootStrap.Row className="header__box">
        <ReactBootStrap.Col  className="header__text">
          
          <div className="header__content">
            <h1 style={{ fontWeight: "700" }} className="headh">
              Lit up your<br/>
              online <span style={{ color: "#EB0090" }}>date.</span>
            </h1>
            <p className="headp">
              Turn your online couple meeting into a playful date. Free of
              boredom, & awkward pauses with intriguing converations & fun
              engagement.
            </p>
            <div className="header__button">
              <Button primary> MAKE IT HAPPEN!</Button>
              </div>
          </div>
          
        </ReactBootStrap.Col>
        <ReactBootStrap.Col  className="header__image">
         <div className="header__img"><img src={logo} alt="Logo" /></div> 
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>
    </ReactBootStrap.Container>
  );
}

export default Header;
