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
import { useState } from 'react'
import { Card, Form } from 'react-bootstrap';
import myra from './myra.svg'
import Select from 'react-select'
const Profile = () => {

  var option=[
    {
      value:1,
      label:"LongDistance",
      icons:<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5625 0.0625H1.4375C0.988086 0.0625 0.625 0.425586 0.625 0.875V17.125C0.625 17.5744 0.988086 17.9375 1.4375 17.9375H22.5625C23.0119 17.9375 23.375 17.5744 23.375 17.125V0.875C23.375 0.425586 23.0119 0.0625 22.5625 0.0625ZM20.1631 1.89316L12 8.23828L3.83691 1.89316H20.1631ZM21.5469 2.87578V16.1094H2.45312V2.87578L1.75234 2.32988L2.45059 2.87324L11.124 9.61699C11.3735 9.81077 11.6803 9.91597 11.9962 9.91597C12.3121 9.91597 12.6189 9.81077 12.8684 9.61699L21.5469 2.87578L22.2477 2.32988L21.2498 1.04766H21.2523L22.2502 2.32988L21.5469 2.87578Z" fill="#FEC6E8"/>
      </svg>
      
    },
    {
      value:2,
      label:"Confession",
      icons:<svg xmlns='heart.svg' width="16" height="16" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" /></svg>
     
    },
    {
      value:3,
      label:"DateIdeas",
      icons:<svg xmlns='heart.svg' width="16" height="16" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" /></svg>
    },
    {
      value:4,
      label:"Misc",
      icons:<svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" fill="none"><path fill-rule="evenodd" d="M22.5625 0.0625H1.4375C0.988086 0.0625 0.625 0.425586 0.625 0.875V17.125C0.625 17.5744 0.988086 17.9375 1.4375 17.9375H22.5625C23.0119 17.9375 23.375 17.5744 23.375 17.125V0.875C23.375 0.425586 23.0119 0.0625 22.5625 0.0625ZM20.1631 1.89316L12 8.23828L3.83691 1.89316H20.1631ZM21.5469 2.87578V16.1094H2.45312V2.87578L1.75234 2.32988L2.45059 2.87324L11.124 9.61699C11.3735 9.81077 11.6803 9.91597 11.9962 9.91597C12.3121 9.91597 12.6189 9.81077 12.8684 9.61699L21.5469 2.87578L22.2477 2.32988L21.2498 1.04766H21.2523L22.2502 2.32988L21.5469 2.87578Z" /></svg>
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
    control: styles => ({ ...styles, backgroundColor: '#F0F0F0',border:'solid lightgrey 1.5px' }),
    option: (styles) => {
     
      return {
        ...styles,
      
      };
    },
   
  };
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);}


  return (
     


    


    
    <div
      className="profile flex flex-col relative w-screen md:w-full h-auto md:h-auto "
      // style={{
      //   height: '300px'
      // }}
      >

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
                <div className="flex md:mx-2" id="fortry"style={{display:'block'}}>
                  <button >
                  <img src={cancel} className="my-auto" />
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="py-8 pr-20 pl-16 w-5/6 h-2/3 md:w-11/12  mx-auto bg-white rounded-xl">
           
            

<Select  options={option} placeholder={'Add tags (at max 3)'} className="bg-neutral-300"   isSearchable theme={customTheme} isMulti autoFocus components={makeAnimated}  value={selectedOption}
             styles={colourStyles}  onChange={handleChange}
             getOptionLabel={e => (
               <div style={{ display: 'flex', alignItems: 'center' }}>
                 {e.icons}
                 <span style={{ marginLeft: 5 }}>{e.label}</span>
               </div>
             )}/>
{/* {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option:</b> {selectedOption.label}
      </div>} */}

          </div>
        </div>
        <div className="mb-4 flex justify-end mr-12 pb-4">
                  <button class="group focus:bg-pink-500 ..." style={{ width: '80px', height: '30px', borderRadius: '5px',backgroundColor:'#F0F0F0' }}>
                    <div className="text-white  ">SAVE</div>
                  </button>
                </div>
      </div>
    </div>
  )
}

export default Profile