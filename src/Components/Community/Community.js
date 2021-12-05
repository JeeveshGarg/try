import React, { useState } from "react";
import Topbar from "./Topbar/Topbar";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import Feeds from "./Feeds/Feeds";
import "./Community.css";
const Community = () => {
  const [feeds, setfeeds] = useState([
    {
      tags: "LDR",
      username: "aditi",
      location: "Delhi",
      gender: "M",
      age: "22",
    },
    // {  tags:"LGBTQ",
    //   username: "ojha",
    //   caption: "wow",
    //   location:"Delhi",
    //   gender:"M",
    //   age:"22"

    // },
  ]);
  return (
    <div  className="community flex flex-col" style={{ backgroundColor: '#Ffebf8',height:'100vh'}}>
      <div style={{height:'5vh'}}>
      <Topbar style={{ marginBottom: "5px" }} />
      </div>
     
      <div
        className="com_head flex flex-col-reverse md:flex-row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height:'95vh',
          // marginTop: "3rem",
          // margin: "3rem",
          paddingLeft:'100px',paddingRight:'100px',paddingTop:'50px'
        }}
      >
        <div style={{width:'10%',paddingTop:'30px'}}>
        <LeftSideBar />
        </div>
       
         <div style={{width:'60%',paddingTop:'30px'}}>
         {feeds.map((feeds) => (
          <Feeds
            style={{ height:'100%' }}
            username={feeds.username}
            //   caption={feeds.caption}
            location={feeds.location}
            tags={feeds.tags}
            age={feeds.age}
            gender={feeds.gender}
          />
        ))}
        {/* <Feeds style={{width:'40%'}}/> */}
          
         </div>
       <div className="md:block hidden" style={{ width: "20%",height:'100%',paddingTop:'100px' }} >
       <RightSideBar/>
       </div>
       
      </div>
    </div>
  );
};

export default Community;
