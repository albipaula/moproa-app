import React from "react";

import '../css/cards.css';



function Cards (props) {

return (



<div className="card" >
<img  className="image-perro"
  src={require(`../images/image-${props.image}.webp`) }  
alt= {props.alt}  />
  <div className="card-body ">
    <h5 className="card-title text-center">{props.nombre}</h5>
    <p className="card-text">{props.descripcion}</p>
    <ul className="list-group list-group-flush">
    <li className="list-group-item"> Edad :{props.edad}</li>
    <li className="list-group-item">Sexo: {props.sexo}</li>
    <li className="list-group-item">Tamaño: {props.tamano}</li>
    <li className="list-group-item">Castrado:</li>
  </ul>
 <div className="containerButton text-center">
    <a href="#" className="  btn btn-primary">Mas Info</a>
    </div>
  </ div>
</ div>


)}

export default Cards; 