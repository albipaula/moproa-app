import React from 'react'; 
import '../css/footer.css';
import logo from '../images/logo-moproa.jpg'
function Footer () {

  return (
    <footer class='footer-section'>
        <div class='container'>
            <div class='footer-cta pt-5 pb-5'>
                <div class='row'>
                    <div class='col-xl-4 col-md-4 mb-30'>
                        <div class='single-cta'>
                            <i class='fas fa-map-marker-alt'></i>
                            <div class='cta-text'>
                                <h4>Direccion</h4>
                                <span>Las Heras - Mendoza </span>
                            </div>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 mb-30'>
                        <div class='single-cta'>
                            <i class='fas fa-phone'></i>
                            <div class='cta-text'>
                                <h4>Contacto</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 mb-30'>
                        <div class='single-cta'>
                            <i class='far fa-envelope-open'></i>
                            <div class='cta-text'>
                                <h4>email</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='footer-content pt-5 pb-5'>
                <div class='row justify-content-center'>
                    <div class='col-xl-4 col-lg-4 mb-50'>
                        <div class='footer-widget d-flex flex-column align-items-center justify-content-center '>
                            <div class='footer-logo'>
                                <a href='index.html'><img src={logo} class='img-fluid' alt='logo'/></a>
                            </div>
                            <div class='footer-text'>
                                <p>Nuestra ONG se encarga de dar tránsito , curaciones, rehabilitación y busuqeda de un hogar apropiado a nuestrois perros rescatados de situaciones insalubres, maltrato o accidentados con un riguroso seguimiento de adaptacion a su nuevo ohogar.</p>
                            </div>
                            <div class='footer-social-icon'>
                                <span>Seguinos</span>
                                <a href='#'><i class='fab fa-facebook-f facebook-bg'></i></a>
                                <a href='#'><i class='fab fa-twitter twitter-bg'></i></a>
                                <a href='#'><i class='fab fa-google-plus-g google-bg'></i></a>
                            </div>
                        </div>
                    </div>
                    <div class='col-xl-4 col-lg-4 col-md-6 mb-30 align-center row'>
                        <div class='footer-widget'>
                            <div class='footer-widget-heading'>
                                <h3>Refugio Mo.PRo.A</h3>
                            </div>
                            <ul>
                                <li><a href='#'>Inicio</a></li>
                                <li><a href='#'>Sobre Nosotros</a></li>
                                <li><a href='#'>Voluntarios</a></li>
                                <li><a href='#'>Notas</a></li>
                                <li><a href='#'>Galeria</a></li>
                                <li><a href='#'>Donaciones</a></li>
                                <li><a href='#'>Contactanos</a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class='copyright-area'>
            <div class='container'>
                <div class='row'>
                    <div class='col-xl-6 col-lg-6 text-center text-lg-left'>
                        <div class='copyright-text'>
                            <p>Copyright &copy; 2023, Todos los derechos reservados <a href='https://codepen.io/anupkumar92/'>Refugio Moproa</a></p>
                        </div>
                    </div>
                    <div class='col-xl-6 col-lg-6 d-none d-lg-block text-right'>
                        <div class='footer-menu'>
                            <ul>
                                <li><a href='#'>Inicio</a></li>
                                <li><a href='#'>Terminos</a></li>
                                <li><a href='#'>Privacidad</a></li>
                                <li><a href='#'>Politicas</a></li>
                                <li><a href='#'>Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

}

export default Footer;