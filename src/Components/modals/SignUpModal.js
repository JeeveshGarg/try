import React, {useEffect,useState,useRef } from 'react';
import {addUserToDB} from '../../db/index'

import { collection, setDoc,doc } from "firebase/firestore"; 
import {useAuth} from './../../hooks/use-auth';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import { IoClose } from "react-icons/io5";



function SignUpModal({setShowSignUpModal,user,setUser,setShowCallToAction}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useStateWithCallbackLazy({emailError:'',passwordError:'',ageError:'',fullNameError:''});
    const [isSubmitted, setIsSubmitted] = useState(false)
    const firebaseError = useRef(null)
    const auth = useAuth();
    const handleSignUpAuth = async(error) => {
        

        if((!error.emailError) && (!error.passwordError)){
        
            let user = await auth.signup(email,password,setShowSignUpModal,setShowCallToAction)
            addUser(user)
            
           
            setTimeout(()=>{
                if(firebaseError.current) firebaseError.current.style = 'display:none';

            },3000)
            }
     }

     const validate = () => {
         setError(error=>(
            { ...error,
            emailError:(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(String(email).toLowerCase())
            ?'':'Invalid Email Address',
            passwordError:(/^[A-Za-z]\w{7,20}$/).test(String(password).toLowerCase())?'':'Password must be between 8-20 digits',
            ageError:(age.length < 1 || parseInt(age) < 0 || parseInt(age) > 100)?'Please enter valid age':'',
            fullNameError:(fullName.length < 3 || fullName.length > 20 )?'Name should be between 3 to 20 characters':''
        }),(currentError)=>handleSignUpAuth(currentError))
     }
    
    const  handleSignUp = (e) => {
        e.preventDefault()
        validate()
        setIsSubmitted(true)
            
    }
    const addUser = (user) => {
        addUserToDB({fullName,age,user});    
    };
    
   
    useEffect(() => {
    }, [])
    console.log("errorr",auth.signUpError)
    
    return (
        <div className = "bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
               <main className= "z-50 w-90% h-90% rounded-lg shadow-2xl bg-white flex font-DM fixed" >
               {/* <div className = "w-1/2" id="sawo-container" style={{height:"500px"}}></div> */}
               <IoClose onClick = {()=>setShowSignUpModal(false)} size = {20} color = "white" className = "cursor-pointer absolute -right-10 -top-10"/>

               
           <article  className = "left w-full md:w-1/2  px-16 py-12 md:py-24 md:px-24 flex flex-col">
               <div className = "h-20%">
           <h2 className = "text-left font-bold mr-2 text-4xl md:text-5xl">It feels you are new :)</h2>
           <p style = {{color:'#282C4099'}} className ="text-left mt-2 text-xl">Let's get it rolling</p>
               </div>
           
           <form  className = "md:h-70% lg:h-80% flex flex-col justify-center">
           <p ref = {firebaseError} className = "text-red-600 text-xs mb-4 text-center"> {auth.signUpError}</p>
           <div className = "flex flex-col" >
            <label className = "text-left text-gray-light text-lg md:text-xl mb-3">Full Name</label>
            <input value = {fullName} onChange = {(e)=>setFullName(e.target.value)} placeholder = "John Doe" className = {`${error.fullNameError?'border-red-500':isSubmitted?'border-green-500':'border-gray-50'} border-b-2 outline-none mb-4  text-gray-light text-lg md:text-xl `}></input>
            </div>
           <div className = "flex flex-col" >
           
            <label className = "text-left text-gray-light text-lg md:text-xl mb-3">Your Email</label>
            <input type = 'email' value = {email} onChange = {(e)=>setEmail(e.target.value)} placeholder = "johndoe@gmail.com" className = {`${error.emailError?'border-red-500':isSubmitted?'border-green-500':'border-gray-50'} border-b-2 outline-none mb-4  text-gray-light text-lg md:text-xl `}></input>
            <p className = 'text-red-600 text-lg mb-4'>{error.emailError}</p>
            </div>
            <div className = "flex flex-col" >
            <label className = "text-left text-gray-light text-lg md:text-xl mb-1">Password</label>
            <input type = 'password' value = {password} onChange = {(e)=>setPassword(e.target.value)}  className = {`${error.passwordError?'border-red-500':isSubmitted?'border-green-500':'border-gray-50'} border-b-2 outline-none mb-4  text-gray-light text-lg md:text-xl `}></input>
            <p className = 'text-red-600 text-lg mb-4'>{error.passwordError}</p>
            </div>
            <div className = "flex flex-col" >
            <label className = "text-left text-gray-light text-lg md:text-xl mb-3">Age</label>
            <input type = 'number' value = {age} onChange = {(e)=>setAge(e.target.value)} placeholder = "20" className = {`${error.passwordError?'border-red-500':isSubmitted?'border-green-500':'border-gray-50'} border-b-2 outline-none mb-4 text-gray-light text-lg md:text-xl `}></input>
            <p className = 'text-red-600 text-lg mb-4'>{error.ageError}</p>
            </div>
            
            <button onClick = {(e)=>handleSignUp(e)} className = "border-none  w-full py-4 px-2 rounded-lg shadow-lg text-white bg-orange text-xl" >Sign Up</button>
           </form>
                

           </article>
           <article style = {{background:'#272B3F',color:'#fff'}} className = "right flex flex-col items-center py-10 px-10 lg:px-16 md:block rounded-r-lg hidden md:w-1/2">
               <div className = "w-full h-20% flex flex-col items-left">
               <h2 className = "text-2xl md:text-5xl text-left tracking-wide">
                    Light up conversation -
                </h2>
                <p style = {{color:'#868BA0'}} className  = "text-left text-xl">
                    with fun trivias
                </p>
               </div>
                
                <img className = "md:mt-10 lg:mt-0 w-85%  md:h-60% lg:w-90% lg:h-3/4" src = "/girl-fly.png"></img>
           </article>
       </main> 
        </div> 
    )
}

export default SignUpModal;