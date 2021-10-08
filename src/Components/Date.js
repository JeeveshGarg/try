import React from 'react';
import i1 from "./fullscreen.png";
import "./followus.css";

export const Date = () => {
    const mystyle={
        display: 'flex',  justifyContent:'right', alignItems:'right', height: '3vh',
        position:"relative",textAlign:"right",right:"19px",marginBottom:"5px",


    };
    
    
    return(
        

        
    
        <>
        <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>        
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}} src="https://www.canva.com/design/DAErTrcSOEs/view?embed">
            </iframe>        
        </div>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAErTrcSOEs&#x2F;view?utm_content=DAErTrcSOEs&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">
        <div style={mystyle}> 
            <img src={i1}/>
        </div>
        </a> 

        </>
    )
}