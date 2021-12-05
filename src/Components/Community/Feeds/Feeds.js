import React, { useLayoutEffect } from "react";
import { Button } from "react-bootstrap";
import heart from "./heart.svg";
import bulb from "./bulb.svg";
import hash from "./hash.svg";
import sphere from "./sphere.svg";
import confess from "./confess.svg";
import { Card } from "react-bootstrap";
import like from "./like.svg";
import comment from "./comment.svg";
import myra from "./myra.svg";
import Avatar from "./Avatar.svg";
import share from "./share.svg";
const Feeds = ({ tags, username, age, gender, location }) => {
  return (
    <div className="md:w-auto md:h-auto" style={{ width: "100%" }}>
      <div>
        <p
          style={{
            // marginTop: "170px",
            fontWeight: "bold",
            fontSize: "2rem",
            marginRight: "40rem",
            color: "#19191B",
          }}
        >
          Trends
        </p>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "2rem",
          marginRight: "8rem",
          height: "8rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#FF0099",
            marginRight: "0.5rem",
            borderRadius: "6px",
            width: "20%",
            justifyContent: "center",
            // backdropFilter: "-moz-initial",
            border: "",
            // width: "120px",
            height: "88px",
            border: "#FF0099",
            // filter: 'blur(121.771px)',
          }}
        >
          <button id="butn">
            <img src={heart} alt="noldr" />
          </button>
        </div>

        <div 
          style={{
            display: "flex",
            borderRadius: "5px",
            marginRight: "0.5rem",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "88px",
            border: "solid #FF0099 1px",
            display: "flex",
          }}
        >
          <button id="butn">
            <img src={sphere} alt="noldr" />
          </button>
        </div>

        <div 
          style={{
            display: "flex",
            borderRadius: "5px",
            marginRight: "0.5rem",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "88px",
            border: "solid #FF0099 1px",
            display: "flex",
          }}
        >
          <button id="butn" onClick>
            <img src={bulb} alt="noldr" />
          </button>
        </div>

        <div 
          style={{
            display: "flex",
            borderRadius: "5px",
            marginRight: "0.5rem",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "88px",
            border: "solid #FF0099 1px",
            display: "flex",
          }}
        >
          <button id="butn">
            <img src={confess} alt="noldr" />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            borderRadius: "5px",
            marginRight: "0.5rem",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "88px",
            border: " solid #FF0099 1px",
            display: "flex",
          }}
        >
          <button id="butn">
            <img src={hash} alt="noldr" />
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        <Card
          className="Card"
          style={{ width: "346px", height: "200px", borderRadius: "12px" }}
        >
          <div>
            <img
              src={myra}
              style={{ height: "73px", weight: "63px", marginRight: "20rem" }}
            />
            <div>Myra</div>
            <div>@admin</div>
          </div>
          <Card.Body>
            <Card.Title style={{ textDecoration: "Underline" }}>
              Guidelines
            </Card.Title>
            <Card.Text>
              Guidelines https://www.instagram.com/candid.connection/
              https://www.instagram.com/candid.connection/
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div
        // className="md:w-32"
        style={{
          backgroundColor: "white",
          width: "100%",
          marginTop: "4rem",
          marginRight: "10rem",
          height: "220px",
          paddingLeft:'3rem',paddingTop:'1rem',
          borderRadius:'4px'
        }}
      >
        <div
          className="container flex "
          style={{ border: "solid #FEC6EB 1.5px",marginRight:'90rem',width:'15rem',height:'2rem' }}
        >  
 <div className="img-col">
            <img
              src={heart}
              style={{ width: "300px", height: "15px",paddingRight:'7rem',
              paddingTop:'1px'
               }}
            />
          
        </div>
         
          <div className="text-col" style={{height:'5px'}}>
            <h5 style={{fontSize:'8px',fontWeight:'200'}}>Long Distance</h5>
          </div>
        </div>
         
         <div className="container flex justify-start " style={{}}>
          <div className="img-col">
            <img src={Avatar} style={{ width: "190px", height: "50px",paddingTop:'1rem',paddingRight:'15rem' }} />
          </div>
          <div className="text-col" style={{paddingTop:'1rem'}}>
            <div>
            <h4>{username}</h4>
            </div>
            <div>
              <h4>{age}/{gender}/{location}
            </h4>
            </div>
           </div>
        </div>
         
       
        <div
          className="md:h-auto md:w-auto"
          style={{ fontWeight: "400", paddingLeft: "10px", paddingTop: "5px" }}
        >
          <h4>Really enjoyed the course. I felt like I was getting what you had
          advertised online and much more! Really enjoyed the course.</h4>
        </div>
        <div className="flex" style={{paddingTop:'10px'}}>
          <div className="container flex " style={{}}>
            <div className="img-col">
              <img src={like} style={{marginRight:'0.5rem',width:'24px',height:'24px'}} />
            </div>
            <div className="text-col" style={{width:'15px',height:'22px'}}>
              <h4>3</h4>
            </div>
          </div>

          <div className="container flex " style={{paddingRight:'2rem'}}>
            <div className="img-col" style={{}}>
              <img src={comment} style={{marginRight:'1rem'}} />
            </div>
            <div className="text-col" style={{}}>
              <h4>3</h4>
            </div>
          </div>
          {/* <div> */}
          <div className="container flex " style={{}}>
            <div className="img-col">
              <img src={share} style={{width:'24px',height:'24px',marginLeft:"135px"}} />
            </div>
            <div className="text-col" style={{paddingLeft:'0.5rem',paddingTop:'0.5rem'}}>
              <h4>3</h4>
            </div>
          {/* </div> */}
          </div>
          
        </div>
        <input style={{border:'solid #FEC6EB 2px',width:"95%",paddingLeft:'15rem',marginLeft:'10px',marginTop:'10px',borderRadius:'4px'}} type="text"/>
      </div>

      
    </div>
  );
};

export default Feeds;
