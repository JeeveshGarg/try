import React, { useState } from "react";
import Topbar from "./Topbar/Topbar";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import Feeds from "./Feeds/Feeds";
import Notification from "./Notification/Notification";
import Newpost from "./Newpost/Newpost";
import "./Community.css";
import Profile from "./Profile/Profile";
// import { Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Switch from "react-bootstrap/esm/Switch";
const Community = () => {
  const [feeds, setfeeds] = useState([
    {
      tags: "LDR",
      username: "Aditi",
      location: "Delhi",
      gender: "M",
      age: "22",
    },
    {
      tags: "LDR",
      username: "Ojha",
      location: "Delhi",
      gender: "M",
      age: "19",
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
        <div className="community min-h-screen max-w-full" style={{ backgroundColor: '#Ffebf8' }}>
          <div style={{}}>
            <Topbar style={{}} />
          </div>

          <div className="com_head flex flex-col-reverse py-20 justify-between md:flex-row md:px-8 lg:px-20" style={{}}>
            <div className="w-7%">
              <LeftSideBar />
            </div>

            {/* <div style={{ width: '60%', paddingTop: '30px' }}>
              {feeds.map((feeds) => (
                <Feeds feeds={feeds} />
              ))}
            </div> */}
            {/* <div className="w-65%">
            <Feeds feeds={feeds} />
            </div> */}
           
            <div className="max-w-2xl flex-grow md:max-w-7xl 2xl:max-w-full mb-24 ">
              <Newpost />
            </div>

    {/* <div className="max-w-2xl flex-grow md:max-w-7xl 2xl:max-w-full ">
              <Notification />
            </div> */}

            {/* <div className="max-w-2xl flex-grow md:max-w-7xl 2xl:max-w-full mb-24">
              <Profile />
            </div> */}

            <div className="md:block hidden" style={{ width: '20%', height: '100%', paddingTop: '18px' }}>
              <RightSideBar />
            </div>
          </div>
        </div>
    // <div
    //   className="community min-h-screen max-w-full"
    //   style={{ backgroundColor: "#Ffebf8" }}
    // >
    //   <Router>
    //     <div style={{}}>
    //       <Topbar style={{}} />
    //     </div>
    //     <div
    //       className="com_head flex flex-col-reverse py-20 justify-between md:flex-row md:px-8 lg:px-20"
    //       style={{}}
    //     >
    //       <Switch>
           
    //           <Route exact path="/LeftSideBar">
    //           <div className="w-7%">
    //             <LeftSideBar/>
    //             </div>
    //             </Route>
           

    //         <Route exact path="/Feeds">
    //           <div style={{ width: "60%", paddingTop: "30px" }}>
    //             {feeds.map((feeds) => (
    //               <Feeds feeds={feeds} />
    //             ))}
    //           </div>
    //         </Route>

    //         <Route exact path="/Rightbar">
    //           <div
    //             className="md:block hidden"
    //             style={{ width: "20%", height: "100%", paddingTop: "18px" }}
    //           >
    //             <RightSideBar />
    //           </div>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // </div>
  );
};

export default Community;
