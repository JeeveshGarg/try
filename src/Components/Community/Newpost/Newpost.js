import React from 'react'
import { Card, Form } from 'react-bootstrap'
import myra from './myra.svg'
import sw from './sw.svg'
import Post from './Post.svg'
import { Dropdown } from 'react-bootstrap'
import mes from './mes.svg'

import './Newpost.css'

import Chevron from './Chevron.svg'
const Newpost = () => {
  return (
    <div
      className="newpost w-screen md:w-full "
      style={{
        marginTop: '18px',
        borderRadius: '8px'
      }}>
      {/* <div className="block md:hidden">
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

      <div className="flex">
        <div className="py-8 px-8 w-5/6 md:w-11/12  mx-auto bg-white rounded-xl">
          <h3 className="pb-3" style={{ fontWeight: 'bold', paddingBottom: '' }}>
            New Posts
          </h3>
          <div>
            <textarea
              className="w-full h-96 border p-4 rounded-lg"
              style={{
                borderTop: 'solid lightgrey 3px',
                borderLeft: 'solid lightgrey 1px',
                borderRight: 'solid lightgrey 1px'
              }}></textarea>
            {/* <div
              className="h-8 ml-2  flex justify-between"
              style={{ backgroundColor: '#F0F0F0', paddingTop: '1px', marginTop: '10px', border: 'solid lightgrey 1px', borderRadius: '3px', width: '680px' }}>
              <div className="" style={{ color: 'grey', paddingLeft: '12px', fontSize: '12px' }}>
                Mention tag (at max 3)
              </div>
              <div>
                <img className="pr-2 pt-2" style={{ paddingLeft: '500px' }} src={Chevron} />
              </div>
            </div> */}

            <Dropdown>
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
            </Dropdown>
          </div>

          <div className="flex justify-between">
            <div className="flex justify-between">
              {/* <div className="img-col pt-4">
             <img src={sw}/>
            </div> */}
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>
              <div className="text-col pt-4 pl-2 text-lg text-gray-400">Post as anonymous</div>
              {/* <div className=" abcd img-col mb-32 pt-10 flex" style={{ paddingLeft: '420px' }}>
                <img src={mes} />
              </div> */}
              <div className="img-col pt-4 pl-6 pr-20  ">
                {/* <button onClick> <img src={Post}/></button> */}
                <div className="">
                  <button class="group bg-gray-200 focus:bg-pink-500  ..." style={{ width: '70px', height: '40px', borderRadius: '5px' }}>
                    <div className="text-white">POST</div>
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
