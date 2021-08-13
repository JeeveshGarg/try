import React from "react";

function Form ({popup}) {
return(
<div className="container">
<div className="form">
    
<iframe style={{width:"600px", height:"500px", boxSizing:"border-box"}} src="https://cdn.forms-content.sg-form.com/8ab332a3-fab5-11eb-bf25-863f55bc68b6" >
   </iframe><button className="formbtn" onClick={() => popup(false)}>Back</button>
</div>
</div>
)
}

export default Form;