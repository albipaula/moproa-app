import React from "react";


function Refugio (props) { 
return(

<div className="moproaSectionCard container"id="moproa" >
<img   className="img-refugio" src={require(`../images/image-${props.image}.svg`) }    />
<div className="containerRefugio ">

  
<p> {props.text}

</p>
</div>
</ div>

)
}


export default Refugio;
