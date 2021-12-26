import React from 'react'
import heart from './heart.svg'
import like from './like.svg'
import comment from './comment.svg'
import Avatar from './Avatar.svg'
import share from './share.svg'
import send from './send.svg'
import './Post.css'

const Post = ({ tags, username, age, gender, location }) => {
  return (
    <div
      className="px-2 md:px-8 py-4 w-full"
      style={{
        backgroundColor: 'white',
        margin: '2.5rem 0',
        borderRadius: '4px'
      }}>
      <div className="container flex  pt-1 pb-1 " style={{ border: 'solid #FEC6EB 1.5px', marginRight: '90rem', height: '2.5rem',marginLeft:'10px',
    width:'160px' }}>
        <div className="img-col">
          <img src={heart} style={{ height: '15px', paddingTop: '1px' }} />
        </div>

        <div className="text-col flex text-xm md:text-xl ">
          <h5 className="my-auto px-2">Long Distance</h5>
        </div>
      </div>

      <div className="container flex justify-start " style={{}}>
        <div className="img-col w-16 my-auto ml-2 pt-4">
          <img src={Avatar} />
        </div>
        <div className="text-col px-4 pt-4" style={{ paddingTop: '1rem' }}>
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

      <div className="md:h-auto md:w-auto" style={{ fontWeight: '400', paddingLeft: '10px', paddingTop: '9px' }}>
        <h5>Really enjoyed the course. I felt like I was getting what you had advertised online and much more! Really enjoyed the course.</h5>
      </div>
      <div className="flex justify-between items-center px-6" style={{ paddingTop: '15px' }}>

        <div className="flex">
        <div className="flex">
            <img  className="mt-1 "src={like} style={{ marginRight: '0.5rem', width: '20px', height: '20px' }} />
            <p><h3 className="pr-2">3</h3></p>
            </div>
           
         <div  className="flex">
         <img className="ml-4  mb-3"src={comment} style={{ marginRight: '1rem' }} />
         <p><h3 className="pr-6">3</h3></p>
         </div>
        </div>
          
           
          <div  className="flex  md:mr-4">
          <img className="" src={share} style={{height:'2rem'}}/>
          <p className="mr-2 pr-1 pt-1"><h4>3</h4></p>
          </div>
           
         
        </div>
       <div className='container'>
      <input className="my-2 h-10 input" placeholder="Type your comment here" style={{ border: 'solid #FEC6EB 2px', width: '95%', borderRadius: '4px' ,marginLeft:'10px'}} type="text" />
      <img src={send} className='image'/>
      </div>
    </div>
  )
}

export default Post
