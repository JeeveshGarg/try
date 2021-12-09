import React from "react";
import { Card, Form } from "react-bootstrap";
import myra from "./myra.svg";
import sw from "./sw.svg";
import Post from "./Post.svg";
import {Dropdown} from "react-bootstrap"
import mes from "./mes.svg";

import "./Newpost.css";

import Chevron from './Chevron.svg'
const Newpost = () => {
  return (
    <div
      className="newpost w-screen md:w-full  w-full flex flex-row md:h-full md:flex md:ml-1 ml-4 md:mr-1 mr-40"
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
        <div className="pl-6 pt-16 md:pr-1 pr-32 pl-12 md:w-80">
          <h3 className="pb-3"style={{ fontWeight: "bold",paddingBottom:'' }}>New Posts</h3>
          <div >
           <textarea className="for pl-2 shadow-inner w-99" style={{width:'700px',borderTop:'solid lightgrey 3px',paddingTop:'4px',borderLeft:'solid lightgrey 1px', borderRight:'solid lightgrey 1px',borderRadius:'5px',height:'350px'}} ></textarea>
           {/* <div className="h-8 ml-2  flex justify-between" style={{backgroundColor:'#F0F0F0',paddingTop:'1px',marginTop:'10px',border:'solid lightgrey 1px',borderRadius:'3px',width:'680px'}}>
            <div className="" style={{color:'grey',paddingLeft:'12px',fontSize:'12px'}}>Mention tag (at max 3)</div>
             <div>
               <img className="pr-2 pt-2" style={{paddingLeft:'500px'}} src={Chevron}/>
             </div>
           </div> */}

<Dropdown>
  <Dropdown.Toggle style={{backgroundColor:'#F0F0F0',marginTop:'10px',border:'solid lightgrey 1px',borderRadius:'3px',color:'grey',width:'680px'}} id="">
    <div className="text-xl h-2 pt-1" style={{paddingRight:'550px'}}>
    Add tags(at max 3)</div>

    <div>
               <img className="" style={{paddingLeft:'640px'}} src={Chevron}/>
             </div>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item style={{width:'650px'}} href="#/action-1">Confession</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Date Ideas</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Rebound</Dropdown.Item>
    <Dropdown.Item href="#/action-3">LDR</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
           
          </div>

          <div className="flex justify-between">

           <div className="flex justify-between">
            {/* <div className="img-col pt-4">
             <img src={sw}/>
            </div> */}
            <div>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
              </label>
            </div>
            <div className="text-col pt-4 pl-2 text-lg text-gray-400">
              Post as anonymous
            </div>
            <div className=" abcd img-col mb-32 pt-10 flex" style={{paddingLeft:'420px'}}>
             <img src={mes}/>
            </div>
            <div className="img-col pt-4 pl-6 pr-20  ">
              {/* <button onClick> <img src={Post}/></button> */}
              <div className="">
              <button class="group bg-gray-200 focus:bg-pink-500  ..." style={{width:'70px',height:'40px',borderRadius:'5px'}}><div className="text-white">
                POST
              </div>
 

</button>
              </div>
              
             
            </div>

           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpost;
