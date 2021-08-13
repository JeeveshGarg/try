import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from './s1.png';
import logoo from './s2.png';
import logooo from './s3.png';
function Strip({popup}) {
    return (
        <div  id="Card">
            <ReactBootStrap.Container style={{marginBottom:"56px"}}>
            <ReactBootStrap.Row >
    <ReactBootStrap.Col sm> <img  className="stripimg" src={logo} alt="Logo" /><h2 className="striph2">Lively Virtual Dates</h2>
    <p className="stripp" style={{ width:"400px"}}>Fun exercises, activities, games, curb the awkwarness  pauses and be the driver.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img className="stripimg"  src={logoo} alt="Logo" style={{height:"118px"}} /><h2 className="striph2">Quick Plug-in</h2>
    <p className="stripp" style={{ width:"400px"}}>No App download required, easy to plug in with your web browser.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img className="stripimg"  src={logooo} alt="Logo" /><h2 className="striph2">100% Privacy</h2>
    <p className="stripp" style={{ width:"400px"}}>We value your intimacy, conversations are limited to the couples in the meet.</p>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  </ReactBootStrap.Container>
 
  <ReactBootStrap.Row >
    <ReactBootStrap.Col sm={12}  style={{background:"#FEC6E8" ,color:"white", padding:"20px" , paddingLeft:"90px" ,fontSize:"80px !important" , marginTop:"15px"}}>
       <ReactBootStrap.Container style={{padding:"0"}}>
      <h1 style={{fontSize:"80px", fontWeight:"700"}}  className="striph">
        It takes less time, than to make a coffee, to sign up!
    <ReactBootStrap.Button variant="primary" className="stripbtn" onClick={() => popup(true)}>MAKE IT HAPPEN!</ReactBootStrap.Button></h1>
    </ReactBootStrap.Container>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  

        </div>
    )
}

export default Strip
