import React, { useEffect, useState } from 'react';
import CClogo from "./Logos.png";
import {getAllflowers} from '../db/index'

function Flowers({setShowFlowersModal,setCurrentFlower}) {
    const [flowers, setFlowers] = useState([])
    useEffect(() => {
        getAllflowers(setFlowers)
    }, [])
    console.log(flowers)
    return (
        <div className = ' bg-cover bg-no-repeat pb-12' style = {{backgroundImage:'url("/bgflowers.png")'}}>
        <div className = "flex items-center w-full px-16 md:px-32 lg:px-40 justify-between pb-6 pt-8 md:pt-12 h-15vh ">
                <div className = "w-60% sm:w-40% md:w-30% flex items-center">
                    <img className = "h-20px w-20px mobile_l:w-30px mobile_l:h-30px mobile_xl:w-40px mobile_xl:h-40px  mr-2" src={CClogo} alt="Logo" />
                </div>
                
        </div>
        <div className = 'header-section text-center flex justify-center items-center flex-col h-85vh relative'>
            <h2 className = 'text-6xl text-white tracking-wideMore'>
                Make them laugh with Candid
            </h2>
            <h1 className = 'tracking-wideMax text-12xl text-white'>
                FLOWERS
            </h1>
            <h2 className = 'text-6xl text-white tracking-wideMore'>
                and a digi-card
            </h2>
            <img src = '/f1.png' className = 'w-72 absolute left-3/6 -ml-56 top-72'></img>
            <img src = '/f2.png' className = 'w-60 absolute left-1/4  bottom-70'></img>
            <img src = '/f3.png' className = 'w-64 absolute right-3/6  bottom-64 mb-12'></img>
            <img src = '/f4.png' className = 'w-80 absolute right-1/4 -mr-20  bottom-60 mb-12'></img>
        </div>
        <div className = " px-16 md:px-32 lg:px-40">
            <p className = 'text-white text-3xl mb-8'>Pick the virtual flowers first,</p>
            <div className = 'grid grid-cols-3 gap-y-20 justify-items-between'>
                {
                    flowers.map((flower,index)=>(
                        <div className="cursor-pointer rounded-xl hvrbox hvrbox_background" style = {{backgroundImage:`url(${flower.Link})`}} onClick = {()=>{setShowFlowersModal(true);setCurrentFlower(flower)}}>
                        <div className="hvrbox-layer_top">
                            <div className="hvrbox-text text-xl"><span className="text-2xl">{`${flower.Name}`}</span><br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                    ))
                }               
            </div>
        </div>
        </div>
    )
}

export default Flowers
