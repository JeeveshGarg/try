import React from 'react'
// import * as ReactBootStrap from "react-bootstrap";

function Contact() {
    return (
        <div  id="Contact">
            <div className ="container" style={{display:"flex", justifyContent:"center", marginBottom:"90px" }}>
              <div style={{backgroundColor:"rgba(223, 215, 249, 0.4)", width:"80%" , marginBottom:"50px", borderTopLeftRadius:"129px",borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px",borderTopRightRadius:"20px", textAlign:"center"}}>
                   <h2 style={{marginTop:"10px", padding:"40px", color:"#5E6282",fontWeight:"700",  marginTop:"26px"}}>
                   Maybe we haven’t put everything on the here<br/>
                   but we would love to get back on your queries!</h2> 
{/* <form style={{display:"inline-grid"}}>
    <input type="text" placeholder="Your Name" name="name" style={{margin:"20px", padding:"15px", border:"white",width:"91%"}}></input>
    <input type="email" placeholder="Your Email" name="email" style={{margin:"20px", padding:"15px", border:"white",width:"421px"}}></input>
    <button className="btn btn-primary footbtn"> SEND</button>
</form><br/> */}

<iframe  style={{height:"450px", width:"700px"}}  src="https://cdn.forms-content.sg-form.com/354df804-f9ea-11eb-a90a-8a5b2eeadcbf"/>
</div>
  </div>
   </div>
    )
}

export default Contact
 