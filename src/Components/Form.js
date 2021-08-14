// import React from "react";
//
// function Form () {
// return(
// <div className="container">
// <div>
//
// <iframe style={{width:"600px", height:"550px", boxSizing:"border-box", alignSelf:"center"}} src="https://cdn.forms-content.sg-form.com/8ab332a3-fab5-11eb-bf25-863f55bc68b6" >
//    </iframe>
// </div>
// </div>
// )
// }
//
// export default Form;
import React from 'react'

const Form = (props) => {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)} >X</button>
                {props.children}
            </div>
        </div>
    ):"";
}

export default Form
