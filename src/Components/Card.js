import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from './c1.png';
import logoo from './c2.png';
import logooo from './c3.png';
import "../App.css";
function Card() {
    return (
        
                    <div>
            <ReactBootStrap.Container>
  <ReactBootStrap.Row>
    <ReactBootStrap.Col xs={7}  style={{ display: "flex", justifyContent: "center", alignItems:"center"}}>
    <img  src={logo} alt="Logo" />
    </ReactBootStrap.Col>
    <ReactBootStrap.Col xs={5} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>  <h1>Fun interaction games</h1>
       
       <p>Rapid fires, plenty of romantic  games that can help bring you and your partner closer together or at least make for an interesting date night.</p>
       <a  href= "#" style={{textDecoration:"none" , color:"#EB0090"}}>Learn more</a>
   
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  <br/>
<br/>
<br/>
<br/>
  <ReactBootStrap.Row>
    <ReactBootStrap.Col xs={5} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>    <h1>In-depth conversations</h1>
      
      <p>No awkward pauses, intriguing communication with on-demand hints and suggestions. fun ways to learn more about each other. </p>
      <a href= "#" style={{textDecoration:"none", color:"#EB0090"}}>Learn more</a>
    
    </ReactBootStrap.Col>
    <ReactBootStrap.Col xs={7}  style={{ display: "flex", justifyContent: "center", alignItems:"center"}} >
    <img src={logoo}  alt="Logo" />
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
<br/>
<br/>
<br/>
<br/>
  <ReactBootStrap.Row>
    <ReactBootStrap.Col xs={7}  style={{ display: "flex", justifyContent: "center", alignItems:"center"}} >
    <img src={logooo} alt="Logo" />
    </ReactBootStrap.Col>
    <ReactBootStrap.Col xs={5} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}> <h1>Myra, your cupid ;)</h1>
    <p>Your personal cupid, on whenever you or your partner feel bored, with magic tools hellp you build connection and increase fondness for one another.</p>
    <a  href= "#" style={{textDecoration:"none" , color:"#EB0090"}}>Learn more</a>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
</ReactBootStrap.Container>
        </div>
      
    )
}

export default Card
