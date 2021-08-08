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
    <ReactBootStrap.Col sm> <img src={logo} alt="Logo" /><h2>Lively Virtual Dates</h2>
    <p>Fun exercises, activities, games, curb the awkwarness  pauses and be the driver.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img src={logoo} alt="Logo" /><h2>Quick Plug-in</h2>
    <p>No App download required, easy to plug in with your web browser.</p>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col sm> <img src={logooo} alt="Logo" /><h2>100% Privacy</h2>
    <p>We value your intimacy, conversations are limited to the couples in the meet.</p>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  </ReactBootStrap.Container>
  {/* <ReactBootStrap.Container> */}
  <ReactBootStrap.Row>
    <ReactBootStrap.Col sm={12}  style={{background:"#FEC6E8" ,color:"white", padding:"20px" , paddingLeft:"90px" ,fontSize:"80px !important" , marginTop:"15px"}}><h1 style={{fontSize:"80px !important"}} >It takes less time, than to make a coffee, to sign up!<br/>
    <ReactBootStrap.Button variant="primary">MAKE IT HAPPEN!</ReactBootStrap.Button></h1>
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  
{/* </ReactBootStrap.Container> */}
        </div>
    )
}

export default Strip
