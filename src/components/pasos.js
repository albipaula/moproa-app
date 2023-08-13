import React from "react";
import '../css/pasos.css'
function Pasos (props) {

return ( 


<div className="pasosItems " >
   
<img  className="icono"
  src={require(`../images/image-${props.image}.svg`) }  
alt= {props.alt}  />
  <div className="card-body">
    <h5 className="card-title">{props.paso}</h5>
    <p className="card-text"> {props.text}</p>

  </ div>
</ div>


)


}

export default Pasos;