
import React from "react";


function Voluntariado (props) { 
return(

<div className="moproaSectionCard container" id="serVoluntario" >
<img   className="img-refugio" src={require(`../images/image-${props.image}.svg`) }    />
<div className="container-voluntariado">

<li> Podes hacer traslados si tenes auto y disponibilidad.</li>
<li> Podes manejar nuestras redes.</li>
<li> Podes acercarte a la calle Gutierrez donde nos juntamos a recaudar dinero.</li>
<li>Acercarte a las jornadas que hacemos en el refugio donde limpiamos los caniles, abrazamos a los peludos, los sacamos al espacio de recreación, les damos muchos besos y arreglamos espacios rotos.
</li>
<li> Si está en tus posibilidades podes colaborar con dinero. <h2>¡Toda propuesta que tengas es bienvenida!</h2>
</li>

</div>
</ div>

)
}


export default Voluntariado;
