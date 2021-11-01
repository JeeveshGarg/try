import React, { useState } from 'react';
import {Link,useLocation} from 'react-router-dom';
import logo from "./n.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import CClogo from "./Logos.png";



function NavbarNew({check,dark}) {
    let location = useLocation()
    console.log(location.pathname)
    const [navShow, setNavShow] = useState(false)
    return (
      <main>

        <div className = "flex items-center w-full px-16 md:px-32 lg:px-40 justify-between pb-6 pt-8 md:pt-12  relative">
                <div className = "w-60% sm:w-40% md:w-30% flex items-center">
                <img className = "h-20px w-20px mobile_l:w-30px mobile_l:h-30px mobile_xl:w-40px mobile_xl:h-40px  mr-2" src={CClogo} alt="Logo" />
                <h2 className = "text-pink font-bold pt-1 text-2xl mobile_xl:text-3xl lg:text-4xl">Candid Connections</h2>

                </div>
                <article className = 'hidden md:flex w-100% md:w-50%  justify-between items-center h-full'>
                <Link  to = '/' className = "no-underline"><p onClick = {()=>setNavShow(!navShow)} className = {`${location.pathname === "/"?'underline-text':''}  text-gray-other text-lg md:text-xl lg:text-2xl pt-2`}>Home</p></Link>
                {/* <Link onClick = {()=>setNavShow(!navShow)} to = '/test' className = "no-underline"><p className = {`${location.pathname === "/test"?'underline-text':''}  text-gray-other text-lg md:text-xl lg:text-2xl pt-2`}>Take Test</p></Link> */}
                <a className = "no-underline" href = "/test"><p className = {`${location.pathname === "/test"?'underline-text':''}  text-gray-other text-lg md:text-xl lg:text-2xl pt-2`}>Take Test</p></a>
                {/* <Link onClick = {()=>setNavShow(!navShow)} to = '/Date' className = "no-underline"><p className = {`${location.pathname === "/Date"?'underline-text':''}  text-gray-other text-lg md:text-xl lg:text-2xl pt-2`}>Candid Date</p></Link> */}
                <a className = "no-underline" href = "/Date"><p className = {`${location.pathname === "/Date"?'underline-text':''}  text-gray-other text-lg md:text-xl lg:text-2xl pt-2`}>Candid Date</p></a>

                <p className = "cursor-pointer text-gray-other text-lg md:text-xl lg:text-2xl  pt-2"><a className = 'no-underline text-gray-other' href = '/#Testimonial'>What People Say</a></p>
                </article>
                <article className = "flex items-center">
                {/* <img onClick={check}
                  style={{
                    margin: "20px",
                    width: "25px",
                    height: "20px",
                    background: "white",
                    borderRadius: "50%",
                  }}
                  className = "cursor-pointer"
                  src={logo}
                  alt="Logo"
                /> */}
                <MdOutlineDarkMode className = "mr-4 cursor-pointer" onClick = {check} size = {24} color = {dark?'#fff':'#000'} />
                    <button className = 'bg-orange-other px-4 md:px-8 lg:px-16  py-4 text-white text-lg md:text-xl lg:text-2xl rounded-lg hidden md:block'>Get Started</button>
                <GiHamburgerMenu onClick = {()=>setNavShow(!navShow)} size = {22} color = {dark?'#fff':'#000'} className = "cursor-pointer ml-2 block md:hidden" />

                </article>
        </div>
        {navShow &&
        <article className = 'flex flex-col items-center md:hidden w-100% md:w-50%  h-full'>
                <Link to = '/' className = "no-underline"><p className = {`${location.pathname === "/"?'underline-text':''}  text-gray-other  text-xl lg:text-2xl pt-2`}>Home</p></Link>
                <a href = '/test' className = "no-underline"><p className = {`${location.pathname === "/test"?'underline-text':''}  text-gray-other text-xl lg:text-2xl pt-2`}>Take Test</p></a>
                <a href = '/Date' className = "no-underline"><p className = {`${location.pathname === "/date"?'underline-text':''}  text-gray-other text-xl lg:text-2xl pt-2`}>Candid Date</p></a>
                <p className = "cursor-pointer text-gray-other text-xl lg:text-2xl  pt-2"><a className = 'no-underline text-gray-other' href = '/#Testimonial'>What People Say</a></p>
                </article>
          } 

        </main>
    )
}

export default NavbarNew
