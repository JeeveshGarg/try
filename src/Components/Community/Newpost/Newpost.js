import React from 'react'
import { Card, Form } from 'react-bootstrap'
import myra from './myra.svg'
import sw from './sw.svg'
import Post from './Post.svg';
import makeAnimated from 'react-select/animated';
import { Dropdown } from 'react-bootstrap'
import mes from './mes.svg';
import Select from 'react-select'

import './Newpost.css'

import Chevron from './Chevron.svg'
const Newpost = () => {
  var option=[
    {
      value:1,
      label:"LongDistance"
    },
    {
      value:2,
      label:"Confession"
    },
    {
      value:3,
      label:"DateIdeas"
    },
    {
      value:4,
      label:"Misc"
    },
  ]
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#F0F0F0',border:'solid lightgrey 1px' }),
    option: (styles) => {
     
      return {
        ...styles,
      
      };
    },
   
  };
  
  

  function customTheme(theme){
    return{
      ...theme,
      colors:{
        ...theme.colors,
        primary25:'lightgrey',
        primary:'lightgrey'
      },
    };
  }


  return (
    <div
      className="newpost w-screen md:w-full h-auto "
      style={{
        borderRadius: '8px'
      }}>
      {/* <div className="block md:hidden px-16 pb-4">
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
              <div className="block md:hidden px-16 pb-4">
    <Card className="Card">
      <div className="flex">
        <img src={myra} className="p-4" alt="img" />
        <div className='pt-16'>
        <div className="pl-2 my-auto">Myra</div>
        <div className="my-auto pl-2">@admin</div>
        </div>
       
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
  </div>

      <div className="flex">
        <div className="py-8 px-8 w-5/6 md:w-11/12  mx-auto bg-white rounded-xl">
          <h3 className="pb-3" style={{ fontWeight: 'bold', paddingBottom: '' }}>
            New Posts
          </h3>
          <div className='pb-4'>
            <textarea
              className="w-full h-96 shadow-inner p-4 rounded-lg"
              style={{
                borderTop: 'solid lightgrey 3px',
                borderLeft: 'solid lightgrey 1px',
                borderRight: 'solid lightgrey 1px'
              }}></textarea>
            

           
             
             <Select  options={option} placeholder={'Add tags (at max 3)'} className="bg-neutral-300" isSearchable theme={customTheme} isMulti autoFocus components={makeAnimated}
             styles={colourStyles}/>
             
           
          </div>

          <div className="flex justify-between">
            <div className="flex justify-between">
              {/* <div className="img-col pt-4">
             <img src={sw}/>
            </div> */}
              <div>
                <label className="switch shadow-inner">
                  <input type="checkbox" />
                  <span className="slider shadow-inner" />
                </label>
              </div>
              <div className="text-col pt-7 text-xl pl-2 md:pl-2 font-normal md:pr-40 md:mr-44   text-gray-400">Post as anonymous</div>
              {/* <div className=" abcd img-col mb-32 pt-10 flex" style={{ paddingLeft: '420px' }}>
                <img src={mes} />
              </div> */}
              {/* <div className="pt-4 ">
                  <button >
                    <img src={mes}/>
                  </button>
                </div> */}
                 {/* <div className='pt-7'>
                <button className='ml-4'>
                  <img src={mes}/>
                </button>
                </div> */}
              <div className="img-col pt-4 ">
                {/* <button onClick> <img src={Post}/></button> */}
               
               
                
                <div className="ml-44 md:ml-16 md:pl-48  flex justify-end">
                <button className='pr-4'>
                  <img src={mes}/>
                </button>
                  <button className=" button group  focus:bg-pink-500  ..." style={{ width: '80px', height: '30px', borderRadius: '5px' }}>
                    <div className="text-gray-400">POST</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newpost