import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo-moproa.jpg'



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
            <li><a className='dropdown-item' href='#'>Perros</a></li>
            <li><a className='dropdown-item' href='#'>Gatos</a></li>
           
          </ul>
        </li>
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Refugio
          </a>
          <ul className='dropdown-menu'>
            <li><a className='nav-link dropdown-toggle' href='#'>Instalaciones</a></li>
            <li><a className='nav-link dropdown-toggle' href='#'>Equipo</a></li>
           
            <li><a className='nav-link dropdown-toggle' href='#'>Noticias</a></li>
          </ul>
        </li>
        <li className='nav-item'>
          <a className='nav-link '>Ser Voluntario</a>
        </li>
      </ul>
      <ul className='navbar-nav '>
      <li className='nav-item d-flex '>
          <a className='nav-link active' aria-current='page' href='#'>Instagram</a>
          <a className='nav-link active' aria-current='page' href='#'>Facebook</a>
        </li>
      </ul>
     
    </ div>
  </ div>
</nav>

)


 }

 export default NavBar ;