import React from "react";
import * as ReactBootStrap from "react-bootstrap";
function Footer() {
  return (
     <div style={{marginBottom:0 }}>
      <footer className="py-5 bg-dark">
        <ReactBootStrap.Container>
            <br/>
            
            <hr style={{color:"white"}} />
            <h1 style={{color:"white" , marginTop:"50px", marginBottom:"50px", lineHeight:"66px"}}>Candid  <br/>Connections</h1>
            
            <hr style={{color:"white"}} />
           
            <div style={{display:"flex"}}>
              <h3 style={{color:"grey", marginRight:"50px"}}>About us</h3>
              <h3 style={{color:"grey", marginRight:"50px"}}>Contact us</h3>
              <h3 style={{color:"grey", marginRight:"50px"}}>Home</h3>
              <h3 style={{color:"grey", marginRight:"50px"}}>Privacy Policy</h3>
              
            </div>
        </ReactBootStrap.Container>
      </footer>
     </div>
  );
}

export default Footer;
