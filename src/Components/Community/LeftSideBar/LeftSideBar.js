import React from 'react'
import com from './com.svg'
import profile from './profile.svg'
import newthought from './newthought.svg'
const LeftSideBar = () => {
  return (
    <div className="w-screen fixed bottom-0 md:relative z-10 pt-4 bg-gray-50 md:bg-transparent min-w-min md:w-full">
      <div className="m-auto justify-between flex md:flex-col px-28 md:px-0 ">
        <div className="md:my-2">
          <img src={newthought} alt="new" style={{ width: '48px', height: '50px' }}></img>
          <p
            className=""
            style={{
              weight: '400',
              alignItems: 'center',
              width: '119px',
              height: '16.41px',
              color: '#979797'
            }}>
            New Thought
          </p>
        </div>

        <div className="md:my-2">
          <img
            src={com}
            alt="new"
            style={{
              borderLeft: ' solid #EB0090  0.5rem',
              width: '48px',
              height: '50px'
            }}></img>
          <p
            style={{
              weight: '400',
              size: '180px',
              alignItems: 'center',
              width: '98px',
              height: '16.41',
              color: '#000000'
            }}>
            Community
          </p>
        </div>

        <div className="md:my-2">
          <img src={profile} alt="new" style={{ width: '48px', height: '50px' }}></img>
          <p
            style={{
              weight: '400',
              size: '180px',
              alignItems: 'center',
              width: '48px',
              height: '16.41',
              color: '#979797'
            }}>
            Profile
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
