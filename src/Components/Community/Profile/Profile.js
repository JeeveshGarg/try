import React from 'react'
import { Dropdown } from 'react-bootstrap'
import girlavatar from './girlavatar.svg'
import brush from './brush.svg'
import gender from './gender.svg'
import mail from './mail.svg'
import heart from './heart.svg'
import cancel from './cancel.svg'
import Chevron from './Chevron.svg'
import location from './location.svg';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
const Profile = () => {

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

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#F0F0F0',border:'solid lightgrey 1px' }),
    option: (styles) => {
     
      return {
        ...styles,
      
      };
    },
   
  };



  return (
    <div
      className="profile flex relative w-screen md:w-full h-auto md:h-auto "
      // style={{
      //   height: '300px'
      // }}
      >
      <div className="bg-white flex flex-col mx-auto w-11/12 md:w-10/12 rounded-xl shadow-lg mt-32">
        <div className="mx-auto flex flex-col -mt-32">
          <img src={girlavatar} className="" />
          <p className="ml-16 pl-2">Finn Noris</p>
        </div>

        <div className="flex mx-auto mt-4 md:mt-8">
          <div className="flex mr-6">
            <div className="img-col">
              <img src={gender} />
            </div>
            <div className="text-col text-xl pt-3 pl-2  text-gray-500">Female</div>
          </div>
          <div className="flex">
            <div className="img-col">
              <img src={brush} />
            </div>
            <div className="text-col text-xl pt-3 pl-2 pr-8 text-gray-500">28</div>
          </div>

          <div className="flex">
            <div className="img-col">
              <img src={location} />
            </div>
            <div className="text-col text-xl pt-3 pl-2 pr-8 text-gray-500">Delhi</div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex">
            <div className="img-col pt-8 ml-8">
              <img src={mail} />
            </div>
            <div className="text-col text-xl pt-8 pl-2 pr-8 text-gray-500">finnoris@gmail.com</div>
          </div>
        </div>

        <div className="font-semibold text-2xl ml-48 pt-8">Topics You follow:</div>
        <div className="topics flex flex-col px-8">
          <div className="flex mx-auto justify-between">
            <div className="pt-8">
              <div
                className="container rounded-lg w-4/5 flex h-3/5"
                style={{
                  border: 'solid #FEC6EB 2px'
                }}>
                <div className="text-col w-full flex text-xs md:text-xl ">
                  <img src={heart} className="my-auto h-2/3 mx-2" />
                  <h6 className="my-auto px-2 font-4xl ">Long Distance</h6>
                </div>
                <div className="flex md:mx-2">
                  <img src={cancel} className="my-auto" />
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div
                className="container rounded-lg w-4/5 flex h-3/5 "
                style={{
                  border: 'solid #FEC6EB 2px'
                }}>
                <div className="text-col w-full flex text-xs md:text-xl ">
                  <img src={heart} className="my-auto h-2/3 mx-2" />
                  <h6 className="my-auto px-2">Long Distance</h6>
                </div>
                <div className="flex md:mx-2">
                  <img src={cancel} className="my-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-30 mx-auto">
            <div className="pt-0">
              <div
                className="container rounded-lg flex"
                style={{
                  border: 'solid #FEC6EB 2px',height:'30px',width:'155px'
                }}>
                <div className="text-col w-full flex text-xs md:text-xl ">
                  <img src={heart} className="my-auto h-2/3 mx-2" />
                  <h6 className="my-auto px-2">Long Distance</h6>
                </div>
                <div className="flex md:mx-2">
                  <img src={cancel} className="my-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto justify-between">
            <div className="pt-8">
              <div
                className="container rounded-lg w-4/5 flex h-3/5"
                style={{
                  border: 'solid #FEC6EB 2px'
                }}>
                <div className="text-col w-full flex text-xs md:text-xl">
                  <img src={heart} className="my-auto h-2/3 mx-2" />
                  <h6 className="my-auto px-2">Long Distance</h6>
                </div>
                <div className="flex md:mx-2">
                  <img src={cancel} className="my-auto" />
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div
                className="container rounded-lg w-4/5 flex h-3/5"
                style={{
                  border: 'solid #FEC6EB 2px'
                }}>
                <div className="text-col w-full flex text-xs md:text-xl ">
                  <img src={heart} className="my-auto h-2/3 mx-2" />
                  <h6 className="my-auto px-2">Long Distance</h6>
                </div>
                <div className="flex md:mx-2">
                  <button>
                  <img src={cancel} className="my-auto" />
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="py-8 px-8 w-5/6 md:w-11/12  mx-auto bg-white rounded-xl">
            {/* <Dropdown>
              <Dropdown.Toggle
                className="w-full"
                style={{ backgroundColor: '#F0F0F0', marginTop: '10px', border: 'solid lightgrey 1px', borderRadius: '3px', color: 'grey' }}
                id="">
                <div className="text-xl h-2 pt-1 pr-96 md:pr-52">Add tags(at max 3) </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Confession</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Date Ideas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rebound</Dropdown.Item>
                <Dropdown.Item href="#/action-3">LDR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

<Select  options={option} placeholder={'Add tags (at max 3)'} className="bg-neutral-300" isSearchable theme={customTheme} isMulti autoFocus components={makeAnimated}
             styles={colourStyles}/>


          </div>
        </div>
        <div className="mb-4 flex justify-end mr-16">
                  <button class="group bg-gray-200 focus:bg-pink-500  ..." style={{ width: '80px', height: '30px', borderRadius: '5px' }}>
                    <div className="text-white">SAVE</div>
                  </button>
                </div>
      </div>
    </div>
  )
}

export default Profile