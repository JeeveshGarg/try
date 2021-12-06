import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import myra from './myra.svg'
import './Rightbar.css'
import women from './women.svg'
const RightSideBar = () => {
  return (
    <div
      style={{
        width: '100%'
      }}>
      <Card className="Card " style={{ width: '300px', height: '200px', borderRadius: '12px', marginTop: '7rem' }}>
        <div className="myra flex">
          <div className="img-col p-4">
            <img src={myra} style={{ height: '65px', weight: '63px', marginRight: '10rem', marginTop: '5px' }} />
          </div>
          <div classNmae="text-col" style={{ marginRight: '50rem', marginTop: '15px' }}>
            <h5>Myra @admin</h5>
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
          width: '300px',
          height: '150px',
          borderRadius: '12px',
          marginTop: '1rem'
        }}>
        <Card.Img variant="top" src={women} style={{ height: '10rem' }} />
        <Card.Body>
          <Button
            style={{
              backgroundColor: '#EB0090',
              marginLeft: '10rem',
              width: '9rem'
            }}>
            Video Date
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RightSideBar
