import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from './s1.png';
import logoo from './s2.png';
import logooo from './s3.png';
function Strip() {
    return (
        <div>
            <ReactBootStrap.Container>
            <ReactBootStrap.Row>
    <ReactBootStrap.Col sm> <img  className="stripimg" src={logo} alt="Logo" /><h2 className="striph2">Lively Virtual Dates</h2>
    <p className="stripp">Fun exercises, activities, games, curb the awkwarness  pauses and be the driver.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img className="stripimg"  src={logoo} alt="Logo" /><h2 className="striph2">Quick Plug-in</h2>
    <p className="stripp">No App download required, easy to plug in with your web browser.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img className="stripimg"  src={logooo} alt="Logo" /><h2 className="striph2">100% Privacy</h2>
    <p className="stripp">We value your intimacy, conversations are limited to the couples in the meet.</p>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  </ReactBootStrap.Container>
  {/* <ReactBootStrap.Container> */}
  <ReactBootStrap.Row >
    <ReactBootStrap.Col sm={12}  style={{background:"#FEC6E8" ,color:"white", padding:"20px" , paddingLeft:"90px" ,fontSize:"80px !important" , marginTop:"15px"}}>
      <h1 style={{fontSize:"80px", fontWeight:"700"}}  className="striph">
        It takes less time, than to make a coffee, to sign up!<br/>
    <ReactBootStrap.Button variant="primary" className="stripbtn">MAKE IT HAPPEN!</ReactBootStrap.Button></h1>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  
{/* </ReactBootStrap.Container> */}
        </div>
    )
}

export default Strip
