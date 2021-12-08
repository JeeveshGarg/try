import React, { useLayoutEffect } from 'react'
import { Button } from 'react-bootstrap'
import heart from './heart.svg'
import bulb from './bulb.svg'
import hash from './hash.svg'
import sphere from './sphere.svg'
import confess from './confess.svg'
import { Card } from 'react-bootstrap'
import like from './like.svg'
import comment from './comment.svg'
import myra from './myra.svg'
import Avatar from './Avatar.svg'
import share from './share.svg'
import Post from './Posts.js'
import './Feeds.css';
const Feeds = ({ feeds }) => {
  return (
    <div className="w-screen md:w-full pb-32 md:pb-8 flex flex-col px-16 md:px-0">
      <div className="w-full ml-8">
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            // marginRight: '30rem',
            marginTop:'2.5rem',
            // marginLeft:"3rem",
            color: '#19191B'
          }}>
          Trends
        </p>
      </div>

      <div
        className="md:py-2 mb-8 md:mb-0 ml-4"
        style={{
          display: 'flex',
          height: '8rem',
          display: 'flex',
          flexDirection: 'row',
          // marginLeft:'3rem',
          // marginRight:'3rem'
        }}>
        <div className="selected"
          style={{
            display: 'flex',
            borderRadius: '5px',
            marginRight: '0.5rem',
          //  backgroundColor:'purple',
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '88px',
            border: 'solid #FF0099 1px',
            display: 'flex'
          }}>
          <button id="butn">
            <img src={heart} alt="noldr" />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            borderRadius: '5px',
            marginRight: '0.5rem',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '88px',
            border: 'solid #FF0099 1px',
            display: 'flex'
          }}>
          <button id="butn">
            <img src={sphere} alt="noldr" />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            borderRadius: '5px',
            marginRight: '0.5rem',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '88px',
            border: 'solid #FF0099 1px',
            display: 'flex'
          }}>
          <button id="butn" onClick>
            <img src={bulb} alt="noldr" />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            borderRadius: '5px',
            marginRight: '0.5rem',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '88px',
            border: 'solid #FF0099 1px',
            display: 'flex'
          }}>
          <button id="butn">
            <img src={confess} alt="noldr" />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            borderRadius: '5px',
            marginRight: '0.5rem',
            width: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '88px',
            border: ' solid #FF0099 1px',
            display: 'flex'
          }}>
          <button id="butn">
            <img src={hash} alt="noldr" />
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        <Card className="Card">
          <div className="flex">
            <img src={myra} className="p-4" alt="img" />
            <div className="px-8 my-auto">Myra</div>
            <div className="my-auto">@admin</div>
          </div>
          <Card.Body>
            <Card.Title style={{ textDecoration: 'Underline' }}>Guidelines</Card.Title>
            <Card.Text className="text-lg">Guidelines https://www.instagram.com/candid.connection/ https://www.instagram.com/candid.connection/</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="w-full" style={{}}>
        {feeds.map((feed) => (
          <Post
            username={feed.username}
            //   caption={feeds.caption}
            location={feed.location}
            tags={feed.tags}
            age={feed.age}
            gender={feed.gender}
          />
        ))}
      </div>
    </div>
  )
}

export default Feeds
