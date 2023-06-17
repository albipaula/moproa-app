import React from "react";

import '../css/cards.css';



function Cards (props) {

return (



<div className="card" >
<img  className="image-perro"
  src={require(`../images/image-${props.image}.jpg`) }  
alt= {props.alt}  />
  <div className="card-body ">
    <h5 className="card-title text-center">{props.nombre}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Edad:</li>
    <li className="list-group-item">Sexo:</li>
    <li className="list-group-item">Personalidad:</li>
  </ul>
 
    <a href="#" className=" btn btn-primary">Mas Info</a>
  </ div>
</ div>


)}

export default Cards; 