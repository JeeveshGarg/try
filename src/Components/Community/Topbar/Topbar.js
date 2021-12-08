import React from 'react'
import { Button } from 'react-bootstrap'
import logo from './CC logo (1) 1.svg'
const Topbar = () => {
  return (
    <div
      className="topbar flex flex-row md:px-16 px-5 py-2 w-full h-full"
      style={{
       
        background: 'white',
        justifyContent: 'space-between',
        // padding: '10px 10px 60px 20px',
        // position: "absolute",
        // width: '100%',
        // height: "5vh",
        alignItems: 'center',
        // height: '100%'
      }}>
      <div style={{ display: 'flex' }}>
        <img className="candid_logo flex " style={{ height: '60px', width: '72px', }} src={logo} alt="oops!"></img>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          style={{
            border: '2px',
            borderRadius: '8px',
            height: '16px',
            width: '47px',
            // left: "0px",
            // top: "12px",
            weight: '500',
            style: 'normal',
            fontSize: '15px',
            backgroundColor: 'white',
            color: 'black',
            marginRight: '5px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 16px',
            // position: "static",
            marginTop: '0.9rem'
          }}>
          Signin
        </Button>

        <Button
          style={{
            border: '2px',
            borderRadius: '8px',
            backgroundColor: '#FF7143',
            width: '83px',
            height: '40px',
            fontWeight: '400',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 16px',
            // position: "static",
            // marginRight: '3rem'
            // marginBottom:'3rem'
          }}>
          SignUp
        </Button>
      </div>
    </div>
  )
}

export default Topbar
