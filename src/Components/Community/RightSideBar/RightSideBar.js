import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import myra from './myra.svg'
import './Rightbar.css'
import women from './women.svg'
import fly from './fly.svg'
const RightSideBar = () => {
  return (
    <div
    style={{
      width: '100%'
    }}>
    <Card className="Card" style={{ width:'250px', height: '250px', borderRadius: '12px',}}>
      <div className="myra flex">
        <div className="p-4">
          <img src={myra} style={{ height: '65px', weight: '63px', marginRight: '4rem', marginTop: '5px' }} />
        </div>
        <div className="flex flex-col md:flex-col" style={{ marginRight: '52rem', marginTop: '40px' }}>
          <h5>Myra</h5>
          <h5>@admin</h5>
        </div>
      </div>
      <Card.Body>
        <Card.Title style={{ textDecoration: 'Underline' }}>Guidelines</Card.Title>
        <Card.Text>Guidelines https://www.instagram.com/candid.connection/ https://www.instagram.com/candid.connection/</Card.Text>
      </Card.Body>
    </Card>

    <Card
      className="Card"
      style={{
        display: 'flex',
        width: '250px',
        height: '200px',
        borderRadius: '12px',
        marginTop: '1rem'
      }}>
      <Card.Img variant="top" src={fly} style={{ height: '12rem',marginTop:'1rem' }} />
      <Card.Body>
        <button
          style={{
            backgroundColor: '#EB0090',
            marginLeft: '6rem',
            width: '12rem',height:'4rem',fontSize:'1.2rem',
            borderRadius:'8px',
            color:'white'
          }}>
          Video Date
        </button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default RightSideBar
