import React from "react";


function Noticias (props) {

return (
<div className="card" >
<img  className="image-perro"
  src={require(`../images/image-${props.image}.jpg`) }  
alt= {props.alt}  />
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.losandes.com.ar/sociedad/le-dan-refugio-a-mas-de-100-perros-abandonados-en-mendoza-y-necesitan-ayuda/" className=" btn btn-primary  ">Leer Nota</a>
  </ div>
</ div>


)


}

export default Noticias ;