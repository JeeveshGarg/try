import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from "./c1.svg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoo from "./c2.svg";
import logooo from "./c3.svg";
import "../App.css";
import { useState } from "react";
import Button from "../Components/Button";
function Card(props) {
  useEffect(() =>{
    AOS.init();
  })
  

  return (
    <div>
      <ReactBootStrap.Container className="card__wrap">
        <ReactBootStrap.Row className="card__one">
          <ReactBootStrap.Col className="one__image" data-aos='fade-right'>
          <div className="cardimg"><img className="cardimg" src={logo} alt="Logo" /></div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col className="one__text" data-aos='fade-left'>
            {" "}
            <h1 className="cardsh" style={props.dark ? {color:"white"}: {color:"#000000"}}>
              Fun interaction games
            </h1>
            <p className="cardp" >
              Rapid fires, plenty of romantic games that can help bring you and
              your partner closer together or at least make for an interesting
              date night.
            </p>
           
            <div className="link"> <Button cardsbtn>Get Access</Button></div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>


        <ReactBootStrap.Row className="card__second"> 
          <ReactBootStrap.Col className="second__text" data-aos='fade-right' data-aos-delay="250" data-aos-once="false">
            {" "}
            <h1 className="cardsh" style={props.dark ? {color:"white"}: {color:"#000000"}}>
              In-depth conversations
            </h1>
            <p className="cardp">
              No awkward pauses, intriguing communication with on-demand hints
              and suggestions. fun ways to explore about each other.{" "}
            </p>
            
            <div className="link"><Button cardsbtn>Get Access</Button></div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col className="second__image" data-aos='fade-left' data-aos-delay="250" data-aos-once="false">
          <div className="cardimg"> <img  src={logoo} alt="Logo"/></div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>


        <ReactBootStrap.Row className="card__third">
          <ReactBootStrap.Col className="third__image" data-aos='fade-right' data-aos-delay="250" data-aos-once="false">
           <div className="cardimg"> <img  src={logooo} alt="Logo" /></div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col className="third__text" data-aos='fade-left' data-aos-delay="250" data-aos-once="false">
            {" "}
            <h1 className="cardsh" style={props.dark ? {color:"white"}: {color:"#000000"}}>
              Myra, your cupid ;)
            </h1>
            <p className="cardp">
              Your personal cupid, on whenever you or your partner feel bored,
              with magic tools help you build connection and increase fondness
              for one another.
            </p>
            <div className="link"><Button cardsbtn>Get Access</Button></div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

export default Card;
