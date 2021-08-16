import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from './Facebook.png';
import logoa from './Twitter.png';
import logob from './LinkedIn.png';
import logoc from './Instagram.png';
import logod from './Pinterest.png';
import logoe from './GooglePlus.png';
import logof from './Youtube.png';
import logog from './RSS.png';
import logoh from './round-place-24px.png';
import logoi from './round-phone-24px.png';
import logoj from './Vect1or.png';
function Footer() {
  return (
     <div style={{marginBottom:0 }}>
      <footer className="py-5 bg-dark">
        <ReactBootStrap.Container>
            <br/>
            
            <hr style={{color:"white"}} />
            <h1 className="footh" style={{color:"white" , marginTop:"50px", marginBottom:"50px" , float:"left"}}>Candid  <br/>Connections</h1>
            <div className="social">Follow us
            {/* <a className="foota"> <img src={logo} alt="Logo" /></a>
            <a className="foota"> <img src={logoa} alt="Logo" /></a>
            <a className="foota"> <img src={logob} alt="Logo" /></a> */}
            <a href="https://www.instagram.com/candid.connection/" className="foota"> <img src={logoc} alt="Logo" /></a>
            {/* <a className="foota"> <img src={logod} alt="Logo" /></a>
            <a className="foota"> <img src={logoe} alt="Logo" /></a>
            <a className="foota"> <img src={logof} alt="Logo" /></a>
            <a className="foota"> <img src={logog} alt="Logo" /></a> */}
            </div> 
            <div  style={{	position: "absolute",left: "55.1%", marginTop:"59px"}}>
            <div className="add"><img style={{marginRight:"5px"}} src={logoh} alt="Logo" /> New Delhi, India</div>
            <span className="foots"> <img style={{marginRight:"8px"}} src={logoi} alt="Logo" />(+91)7390071951</span>
            <span className="foots" style={{marginLeft:"74px"}}><img style={{marginRight:"5px", height:"13px", width:"16px"}} src={logoj} alt="Logo"/>
             <a style={{textDecoration:"none",
    color: "#FFFFFF"}} href="mailto: hi@candidconnect.tech"> hi@candidconnect.tech </a></span>

            </div>




            <hr style={{color:"white", clear:"both"}} />
           
            <div style={{display:"flex",marginBottom:"30px" }}>
              <ReactBootStrap.Nav.Link href="#Card" style={{color:"grey", marginRight:"50px"}}>Features</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#Contact" style={{color:"grey", marginRight:"50px"}}>Contact Us</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#Home" style={{color:"grey", marginRight:"50px"}}>Home</ReactBootStrap.Nav.Link>
              {/* <h3 style={{color:"grey", marginRight:"50px"}}>Privacy Policy</h3> */}
              <ReactBootStrap.Nav.Link style={{color:"grey", marginLeft:"420px", fontSize:"12px"}}>Copyright © 2021.</ReactBootStrap.Nav.Link>
            </div>
        </ReactBootStrap.Container>
      </footer>
     </div>
  );
}

export default Footer;
