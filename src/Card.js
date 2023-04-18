import React from "react";

function Card( props) {
    return(
<div className="container">
<img src={props.picture} alt="user's-pics"></img>
<div className="names">
<p className="id">{props.id} </p>
<p>{props.title} {props.firstname} {props.lastname}</p>
</div>
</div>

 );
    
}







export default Card;