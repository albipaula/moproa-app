import React from "react";


function Refugio (props) { 
return(

<div className="moproaSectionCard" >
<img   className="img-refugio" src={require(`../images/image-${props.image}.jpg`) }    />
<div>
<p> {props.text}
Nuestra ONG se encarga de dar tránsito , curaciones, rehabilitación y busuqeda de un hogar apropiado a nuestrois perros rescatados de situaciones insalubres, maltrato o accidentados con un riguroso seguimiento de adaptacion a su nuevo ohogar. 
<p>
En este momento nuestro refugio NO recibe animalitos, ni puede dar tránsito ya que se encuentra poblado por mas de 40 perros en recuperación y en espera de un hogar
</p>
</p>
</div>
</ div>

)
}


export default Refugio;
