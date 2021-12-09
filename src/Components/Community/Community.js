import React, { useState } from 'react'
import Topbar from './Topbar/Topbar'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import RightSideBar from './RightSideBar/RightSideBar'
import Feeds from './Feeds/Feeds'
import Newpost from './Newpost/Newpost';
import './Community.css'
import Profile from './Profile/Profile'
const Community = () => {
  const [feeds, setfeeds] = useState([
    {
      tags: 'LDR',
      username: 'Aditi',
      location: 'Delhi',
      gender: 'M',
      age: '22'
    },
    {
      tags: 'LDR',
      username: 'Ojha',
      location: 'Delhi',
      gender: 'M',
      age: '19'
    }

    // {  tags:"LGBTQ",
    //   username: "ojha",
    //   caption: "wow",
    //   location:"Delhi",
    //   gender:"M",
    //   age:"22"

    // },
  ])
  return (
    <div className="community min-h-screen max-w-full" style={{ backgroundColor: '#Ffebf8'}}>
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
        </div>
        */}
        <div className="w-65%">
          <Newpost/>
        </div>

        {/* <div className="w-65%">
        <Profile/>
        </div>
        */}
        <div className="md:block hidden" style={{ width: '20%', height: '100%', paddingTop: '18px' }}>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default Community
