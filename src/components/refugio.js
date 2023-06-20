import React from "react";


function Refugio (props) { 
return(

<div className="moproaSectionCard container" >
<img   className="img-refugio" src={require(`../images/image-${props.image}.svg`) }    />
<div className="containerRefugio container">

  
<p> {props.text}

</p>
</div>
</ div>

)
}


export default Refugio;
