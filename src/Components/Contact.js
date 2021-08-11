import React from 'react'
// import * as ReactBootStrap from "react-bootstrap";

function Contact() {
    return (
        <div>
            <div className ="container" style={{display:"flex", justifyContent:"center"}}>
              <div style={{backgroundColor:"rgba(223, 215, 249, 0.4)", width:"80%" , marginBottom:"50px", borderTopLeftRadius:"129px",borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px",borderTopRightRadius:"20px", textAlign:"center"}}>
                   <h2 style={{marginTop:"10px", padding:"40px", color:"#5E6282",fontWeight:"700"}}>
                Maybe we haven’t put everthing on the here<br/>
but We would love to hear from you for any queries!</h2> 
<form style={{display:"inline-grid"}}>
    <input type="text" placeholder="Your Name" name="name" style={{margin:"20px", padding:"15px", border:"white",width:"91%"}}></input>
    <input type="email" placeholder="Your Email" name="email" style={{margin:"20px", padding:"15px", border:"white",width:"421px"}}></input>
    <button className="btn btn-primary footbtn"> SEND</button>
</form>
</div>
            </div>
        </div>
    )
}

export default Contact
