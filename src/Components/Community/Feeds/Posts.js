import React from 'react'
import heart from './heart.svg'
import like from './like.svg'
import comment from './comment.svg'
import Avatar from './Avatar.svg'
import share from './share.svg'

const Post = ({ tags, username, age, gender, location }) => {
  return (
    <div
      className="px-4 md:px-8 py-4 w-full"
      style={{
        backgroundColor: 'white',
        margin: '2.5rem 0',
        borderRadius: '4px'
      }}>
      <div className="container flex w-50 " style={{ border: 'solid #FEC6EB 1.5px', marginRight: '90rem', height: '2rem' }}>
        <div className="img-col">
          <img src={heart} style={{ height: '15px', paddingTop: '1px' }} />
        </div>

        <div className="text-col flex text-xm md:text-xl ">
          <h5 className="my-auto px-2">Long Distance</h5>
        </div>
      </div>

      <div className="container flex justify-start " style={{}}>
        <div className="img-col w-16 my-auto">
          <img src={Avatar} />
        </div>
        <div className="text-col px-4" style={{ paddingTop: '1rem' }}>
          <div>
            <h4>{username}</h4>
          </div>
          <div>
            <h4>
              {age}/{gender}/{location}
            </h4>
          </div>
        </div>
      </div>

      <div className="md:h-auto md:w-auto" style={{ fontWeight: '400', paddingLeft: '10px', paddingTop: '5px' }}>
        <h4>Really enjoyed the course. I felt like I was getting what you had advertised online and much more! Really enjoyed the course.</h4>
      </div>
      <div className="flex" style={{ paddingTop: '10px' }}>
        <div className="container flex " style={{}}>
          <div className="img-col">
            <img src={like} style={{ marginRight: '0.5rem', width: '24px', height: '24px' }} />
          </div>
          <div className="text-col" style={{ width: '15px', height: '22px' }}>
            <h4>3</h4>
          </div>
        </div>

        <div className="container flex " style={{ paddingRight: '2rem' }}>
          <div className="img-col" style={{}}>
            <img src={comment} style={{ marginRight: '1rem' }} />
          </div>
          <div className="text-col" style={{}}>
            <h4>3</h4>
          </div>
        </div>
        <div className="container flex pl-32 md:ml-80" style={{}}>
          <div className="img-col">
            <img src={share} />
          </div>
          <div className="text-col" style={{ paddingLeft: '0.5rem', paddingTop: '0.5rem' }}>
            <h4>3</h4>
          </div>
        </div>
      </div>
      <input className="my-2 h-10" style={{ border: 'solid #FEC6EB 2px', width: '95%', borderRadius: '4px' }} type="text" />
    </div>
  )
}

export default Post
