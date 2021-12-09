import React from "react";
import girlavatar from "./girlavatar.svg";
import brush from "./brush.svg";
import gender from "./gender.svg";
import mail from "./mail.svg";
import heart from "./heart.svg";
import cancel from "./cancel.svg";
import Chevron from "./Chevron.svg";
import location from "./location.svg";
const Profile = () => {
  return (
    <div>
     <div className="pl-40 ml-48 " style={{}}>
  <img src={girlavatar } style={{}} />
  <div>Finn noris</div>
</div>
    
     <div
    
    className="profile ml-28  w-100 md:ml-2 md:flex  shadow-lg border-opacity-100 h-100 md:h-100 pl-24"
    style={{
      backgroundColor: "white",
      height: "300px",
      border: "solid lightgrey 2px",
      borderRadius: "2px",
    }}
  > 
     

    <div className="">
     

      <div className="flex pt-44 pl-40 mr-2 md:mr8 ml-20">
        <div className="flex mr-6" style={{}}>
          <div className="img-col">
            <img src={gender} />
          </div>
          <div className="text-col text-xl pt-3 pl-2 pr-8 text-gray-500">
            Female
          </div>
        </div>
        <div className="flex" style={{ marginLeft: "10px" }}>
          <div className="img-col">
            <img src={brush} />
          </div>
          <div className="text-col text-xl pt-3 pl-2 pr-8 text-gray-500">
            28
          </div>
        </div>

        <div className="flex">
          <div className="img-col">
            <img src={location} />
          </div>
          <div className="text-col text-xl pt-3 pl-2 pr-8 text-gray-500">
            Delhi
          </div>
        </div>
      </div>
      <div className=" md:pl-48 ml-32 pl-36" style={{}}>
        <div className="flex">
          <div className="img-col pt-8">
            <img src={mail} />
          </div>
          <div className="text-col text-xl pt-8 pl-2 pr-8 text-gray-500">
            finnoris@gmail.com
          </div>
        </div>
      </div>

      <div className="font-semibold text-2xl pl-28 ml-24 pt-12 md:pt-12">
        Topics You follow:
      </div>

     

      <div className="flex justify-start">
        
      <div className="ml-32 pl-30 pt-8">
        <div
          className=" target container flex "
          style={{
            border: "solid #FEC6EB 1.5px",
            height: "2rem",
            marginLeft: "10px",
            width: "230px",
          }}
        >
          <div className="img-col">
            <img src={heart} style={{ height: "15px", paddingTop: "1px" }} />
          </div>

          <div className="text-col flex text-xm md:text-xl ">
            <h6 className="my-auto px-2">Long Distance</h6>
          </div>
          <div className="pl-36">
            {" "}
            <button>
            <img src={cancel} /></button>
          </div>
        </div>
      </div>

      <div className="w-44 ml-4 pl-4 pt-8">
        <div
          className="container flex "
          style={{
            border: "solid #FEC6EB 1.5px",
            marginRight: "90rem",
            height: "2rem",
            marginLeft: "10px",
            width: "230px",
          }}
        >
          <div className="img-col">
            <img src={heart} style={{ height: "15px", paddingTop: "1px" }} />
          </div>

          <div className="text-col flex text-xm md:text-xl ">
            <h6 className="my-auto px-2">Long Distance</h6>
          </div>
          <div className="pl-36">
            {" "}
            <img src={cancel} />
          </div>
        </div>
      </div>
      </div>

      <div className="w-50 ml-32 pl-32 pt-8">
        <div
          className="container flex "
          style={{
            border: "solid #FEC6EB 1.5px",
            marginRight: "90rem",
            height: "2rem",
            marginLeft: "10px",
            width: "250px",
          }}
        >
          <div className="img-col">
            <img src={heart} style={{ height: "15px", paddingTop: "1px" }} />
          </div>

          <div className="text-col flex text-xm md:text-xl ">
            <h5 className="my-auto px-2">Long Distance</h5>
          </div>
          <div className="pl-36">
            {" "}
            <img src={cancel} />
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        
      <div className="ml-32 pl-30 pt-8">
        <div
          className="container flex "
          style={{
            border: "solid #FEC6EB 1.5px",
            height: "2rem",
            marginLeft: "10px",
            width: "230px",
          }}
        >
          <div className="img-col">
            <img src={heart} style={{ height: "15px", paddingTop: "1px" }} />
          </div>

          <div className="text-col flex text-xm md:text-xl ">
            <h6 className="my-auto px-2">Long Distance</h6>
          </div>
          <div className="pl-36">
            {" "}
            <img src={cancel} />
          </div>
        </div>
      </div>

      <div className="w-44 ml-4 pl-4 pt-8">
        <div
          className="container flex "
          style={{
            border: "solid #FEC6EB 1.5px",
            marginRight: "90rem",
            height: "2rem",
            marginLeft: "10px",
            width: "230px",
          }}
        >
          <div className="img-col">
            <img src={heart} style={{ height: "15px", paddingTop: "1px" }} />
          </div>

          <div className="text-col flex text-xm md:text-xl ">
            <h6 className="my-auto px-2">Long Distance</h6>
          </div>
          <div className="pl-36">
            {" "}
            <img src={cancel} />
          </div>
        </div>
      </div>
      </div>

      
      <div
        className="h-10 ml-6 flex justify-between shadow-md shadow-inner"
        style={{
          backgroundColor: "#F0F0F0",
          paddingTop: "1px",
          marginTop: "70px",
          border: "solid lightgrey 1px",
          borderRadius: "5px",
          width: "630px",
          marginRight: "20px",
        }}
      >
        <div
          className="box-shadow"
          style={{ color: "grey", paddingLeft: "2px", fontSize: "12px" }}
        >
          Add more tags
        </div>
        <div>
          <img
            className="pr-2 pt-2"
            style={{ paddingLeft: "500px" }}
            src={Chevron}
          />
        </div>
      </div>
    </div>
  </div>
    </div>
    
  );
};

export default Profile;
