import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo-moproa.jpg';
import ig from '../images/instagram-svgrepo-com.svg';



function NavBar () {

return (


<nav className='navbar navbar-expand-lg '>
  <div className='container-fluid'>
  <a className='navbar-brand' href='#' >   <img className='logoMoproa' src={logo} alt='logo-moproa' /> </a>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
   
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
        </li>
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Adoptar
          </a>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href='#perros'>Perros</a></li>
            
           
          </ul>
        </li>
        <li className='nav-item'>
          <a className='nav-link 'href='#serVoluntario' >Ser Voluntario</a>
        </li>
        <li className='nav-item dropdown'>
          <a className='nav-link' href='#moproa' role='button' >
            Moproa
          </a>
          {/* <ul className='dropdown-menu'>
            <li><a className='nav-link ' href='#'>Instalaciones</a></li>
            <li><a className='nav-link ' href='#'>Equipo</a></li>
           
            <li><a className='nav-link ' href='#'>Noticias</a></li>
          </ul> */}
        </li>
        
      </ul>
      <ul className='navbar-nav '>
      <li className='nav-item'>
     
          <a className='nav-link active ' target='blank' aria-current='page' href='https://www.instagram.com/refugiomoproa/?hl=es'> <img className='logoig' src={ig} alt='logo-ig' /> </a> </li> 
          <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='#'></a> </li>
      </ul>
     
    </ div>
  </ div>
</nav>

)


 }

 export default NavBar ;