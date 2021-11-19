import React from 'react'
import { IoClose } from "react-icons/io5";


function CallToActionModal({setShowFlowersSuccessModal}) {
    return (
        <div className = "bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center font-DM ">
            
            <main style = {{zIndex:'999'}} className = "rounded-lg shadow-2xl w-90% h-90% bg-white relative py-14 fixed flex flex-col items-center">
            <IoClose onClick = {()=>setShowFlowersSuccessModal(false)} size = {20} color = "white" className = "cursor-pointer absolute -right-10 -top-10"/>
                <img style = {{width:'100px',height:'400px'}} className = "absolute top-0 left-0 opacity-10" src = "/left-top.png"></img>
                <img className = "absolute bottom-0 right-0 opacity-10" src = "/right-bottom.png"></img>
                <h2 className = "text-pink text-2xl md:text-5xl font-bold text-center">Candid Connections</h2>
                <div className = "py-16 px:8 md:py-28 md:px-10 h-80% flex flex-col items-center justify-center">
                <h1 style = {{color:'#0D0F44'}} className = "text-5xl md:text-6xl mb-10 font-bold">Your flowers have been sent!</h1>
                <p className = "mb-20 text-2xl md:text-3xl text-center">While &lt;recepient name&gt; is wondering with the card,  you can<br/> book a virtual date to spice up the romance.</p>
                <button className = "bg-pink px-6 py-3 md:px-12 rounded-lg text-white text-lg md:text-2xl">Book for free</button>
                <p style = {{transform:'translateX(-50%)'}} className = "text-xl md:text-2xl font-bold absolute bottom-7 left-1/2">Lit up your virtual date :)</p>
                </div>
                
            </main>
        </div>
    )
}

export default CallToActionModal
