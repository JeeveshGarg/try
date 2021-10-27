import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Start = () => {
    let location = useLocation()
    useEffect(() => {
        
    }, [location.pathname])
    return (
        <div>
            <div data-tf-widget="ZUkefutP" style={{width:"100%", height:"700px", }}></div>
            <div data-tf-widget="u0FFqLBh" style={{width:"100%", height:"700px", marginTop:"110px"}}></div>
        </div>
    )
}

export default Start
