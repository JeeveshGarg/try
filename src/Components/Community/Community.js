import React, { useState } from 'react'
import Topbar from './Topbar/Topbar'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import RightSideBar from './RightSideBar/RightSideBar'
import Feeds from './Feeds/Feeds'
import './Community.css'
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
    <div className="community min-h-screen max-w-full" style={{ backgroundColor: '#Ffebf8' }}>
      <div style={{ height: '5vh' }}>
        <Topbar style={{ marginBottom: '5px' }} />
      </div>

      <div className="com_head flex flex-col-reverse pt-20 justify-between md:flex-row md:px-40 lg:px-60">
        <div className="">
          <LeftSideBar />
        </div>

        {/* <div style={{ width: '60%', paddingTop: '30px' }}>
          {feeds.map((feeds) => (
            <Feeds feeds={feeds} />
          ))}
        </div> */}
        <Feeds feeds={feeds} />
        <div className="md:block hidden" style={{ width: '20%', height: '100%', paddingTop: '100px' }}>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default Community
