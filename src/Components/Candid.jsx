import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Candid(props) {
  return (
    <div id="candid">
      <ReactBootStrap.Row>
        <ReactBootStrap.Container
          style={{ padding: "0" }}
          className="strip__back"
        >
          <h1 className="candidh">
            Candid Parties
            <br />& Ambassadors
          </h1>
             
        <ReactBootStrap.Container>
        
            <div style={{paddingBottom:"50px"}}>  
          <ol style={{color:"white",fontSize:"28px",fontWeight:"700"}}>
            <li>Visit our website</li>
            <li>Sign up</li>
            <li>Find the course you want</li>
          </ol>
          <button className="candidbtn">Be a Candid Ambassador</button>
          </div>
        </ReactBootStrap.Container>
        </ReactBootStrap.Container>
      </ReactBootStrap.Row>
   
      
    
    </div>
  );
}

export default Candid;
