import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as ReactBootStrap from "react-bootstrap";
import logo from "./s1.png";
import logoo from "./s2.png";
import logooo from "./s3.png";
import Button from "../Components/Button";
function Strip() {
  useEffect(() =>{
    AOS.init();
  })
  return (
    <div id="Card">
      <ReactBootStrap.Container>
        <ReactBootStrap.Row className="strip__wrap">
          <ReactBootStrap.Col className="strip__first"  data-aos='fade-up'>
              <div className="strip__image"><img className="stripimg" src={logo} alt="Logo" /></div>
            <h2 className="striph2">Lively Virtual Dates</h2>
            <p className="stripp">
              Fun exercises, activities, games, curb the awkwarness pauses and be the driver.
            </p>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col className="strip__second"  data-aos='fade-up'>
           <div className="strip__image"><img
              className="stripimg"
              src={logoo}
              alt="Logo"
            /></div> 
            <h2 className="striph2">Quick Plug-in</h2>
            <p className="stripp">
              No App download required, easy to plug in with your web browser.
            </p>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col className="strip__third"  data-aos='fade-up'> 
            <div className="strip__image"><img className="stripimg" src={logooo} alt="Logo" /></div>
            <h2 className="striph2">100% Privacy</h2>
            <p className="stripp kuch">
              We value your intimacy, conversations are limited to the couples
              in the meet.
            </p>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>


      <ReactBootStrap.Row>
          <ReactBootStrap.Container style={{ padding: "0" }} className="strip__back">
            <h1  className="striph">
            It takes less time, than to make a coffee, to sign up!  <button 
             style={{background:"none",border:"none", fontSize:".4541em" , height:"60px", lineHeight: "50px", margin:"0"}}>
               <Button>MAKE IT HAPPEN!</Button></button></h1> 
          </ReactBootStrap.Container>
      </ReactBootStrap.Row>


    </div>
  );
}

export default Strip;
