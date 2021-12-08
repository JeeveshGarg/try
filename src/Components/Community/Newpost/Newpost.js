import React from "react";
import { Card, Form } from "react-bootstrap";
import myra from "./myra.svg";
import sw from "./sw.svg";
import Post from "./Post.svg";
import mes from "./mes.svg";

import "./Newpost.css";

import Chevron from './Chevron.svg'
const Newpost = () => {
  return (
    <div
      className="newpost w-screen md:w-full w-95% flex flex-row md:h-full md:flex md:ml-1 ml-4 md:mr-1 mr-32"
      style={{
        backgroundColor: "white",
        marginTop: "18px",
        borderRadius: "8px",
      }}
    >
      {/* <div className="block md:hidden">
        <Card className="Card">
          <div className="flex">
            <img src={myra} className="p-4" alt="img" />
            <div className="px-8 my-auto">Myra</div>
            <div className="my-auto">@admin</div>
          </div>
          <Card.Body>
            <Card.Title style={{ textDecoration: "Underline" }}>
              Guidelines
            </Card.Title>
            <Card.Text className="text-lg">
              Guidelines https://www.instagram.com/candid.connection/
              https://www.instagram.com/candid.connection/
            </Card.Text>
          </Card.Body>
        </Card>
      </div> */}
      
      <div>
        <div className="pl-6 pt-16 md:pr-1 pr-32">
          <h3 className="pb-3"style={{ fontWeight: "bold",paddingBottom:'' }}>New Posts</h3>
          <div className="for pl-2 shadow-inner md:w-99%" style={{width:'700px',borderTop:'solid lightgrey 3px',paddingTop:'4px',borderLeft:'solid lightgrey 1px', borderRight:'solid lightgrey 1px',borderRadius:'5px',height:'350px'}}>
           <h5>Tell us what you feel....</h5>
           <div className="h-8 ml-2 flex justify-between" style={{backgroundColor:'#F0F0F0',paddingTop:'1px',marginTop:'300px',border:'solid lightgrey 1px',borderRadius:'3px',width:'680px'}}>
            <div className="" style={{color:'grey',paddingLeft:'12px',fontSize:'12px'}}>Mention tag (at max 3)</div>
             <div>
               <img className="pr-2 pt-2" style={{paddingLeft:'500px'}} src={Chevron}/>
             </div>
           </div>
          </div>

          <div className="flex justify-between">

           <div className="flex justify-between">
            <div className="img-col pt-4">
             <img src={sw}/>
            </div>
            <div className="text-col pt-11 pl-2 text-xl text-gray-400">
              Post as anonymous
            </div>
            <div className=" abcd img-col pt-4 flex" style={{paddingLeft:'420px'}}>
             <img src={mes}/>
            </div>
            <div className="img-col pt-11 pl-8 text-xl text-gray-400">
              <img src={{Post}}/>
            </div>

           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpost;
