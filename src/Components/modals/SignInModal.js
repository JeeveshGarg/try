import React, { useState } from 'react';
import {useAuth} from './../../hooks/use-auth';
import { IoClose } from "react-icons/io5";
// import './SignInModal.css'


function SignInModal({setShowSignInModal,setShowSignUpModal}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)
    const auth = useAuth()
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (email && password) {
          await auth.signin(email, password,setShowError,setShowSignInModal);
        }
      };
    return (
        <div className = " bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
               <main style = {{zIndex:'999'}} className= "z-50 w-90% h-90% rounded-lg shadow-2xl bg-white flex font-DM fixed" >
               <IoClose onClick = {()=>setShowSignInModal(false)} size = {20} color = "white" className = "cursor-pointer absolute -right-10 -top-10"/>
           <article className = "left-side w-full md:w-1/2 px-16 py-16 md:py-24 md:px-24 flex flex-col" >
             
               <div className = "h-20%">
               <div className = "flex items-center">
           <h2 className = "font-bold mr-2 text-5xl">Hey </h2>
                <img width = "30px" height = "30px" src = "/hand-emoji.png"></img>
           </div>
           <p className ="text-left text-gray-light mt-2 text-lg">Welcome, we missed you</p>
               </div>
           
           <form className = "h-60% flex flex-col justify-center">
           <div className = "flex flex-col" >
           <p className="text-red-500 text-lg text-center mb-3">
        {auth.loginError && showError && "Invalid email or password"}
      </p>
            <label className = "text-left text-gray-light text-xl">Email</label>
            <input value = {email} onChange = {(e)=>{setEmail(e.target.value);
            setShowError(false);}} className = "border-b-2 border-gray-50 outline-none mb-10 focus:border-blue-100 text-gray-light text-lg"></input>
            </div>
            <div className = "flex flex-col" >
            <label className = "text-left text-gray-light text-xl">Password</label>
            <input value = {password} onChange = {(e)=>{setPassword(e.target.value);
            setShowError(false);}} type = 'password' className = "border-b-2 border-gray-50 outline-none mb-8 focus:border-blue-100 text-gray-light text-lg"></input>
            </div>
            <button onClick = {(e)=>handleSignIn(e)} className = "border-none  w-full py-4 px-2 rounded-lg shadow-md text-xl text-white bg-orange" >Sign In</button>
            <button onClick = {()=>{setShowSignInModal(false);
            setShowSignUpModal(true)}}  className = "w-full py-4 px-2 rounded-lg shadow-md text-xl text-orange border-orange border-1 mt-4 hover:bg-orange hover:text-white">Sign Up</button>
           </form>
                

           </article>
           <article style = {{background:'#272B3F',color:'#fff'}} className = "right w-1/2 flex flex-col items-center py-10 px-10 lg:px-16  md:block rounded-r-lg hidden md:w-1/2">
               <div className = "w-full h-20% flex flex-col items-left">
               <h2 className = "md:text-5xl text-left tracking-wide">
                    Make them happy -
                </h2>
                <p style = {{color:'#868BA0'}} className  = "text-left text-xl">
                    with playful virtual dates
                </p>
               </div>
                
                <img className = "md:mt-10 lg:mt-0 w-85%  md:h-60% lg:w-85% lg:h-3/4 " src = "/girl.png"></img>
           </article>
       </main> 
        </div> 
    )
}

export default SignInModal;