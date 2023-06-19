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
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 mb-30'>
                        <div class='single-cta'>
                            <i class='fas fa-phone'></i>
                            <div class='cta-text'>
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 mb-30'>
                        <div class='single-cta'>
                            <i class='far fa-envelope-open'></i>
                            <div class='cta-text'>
                                <h4>Mail us</h4>
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
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
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
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>about</a></li>
                                <li><a href='#'>services</a></li>
                                <li><a href='#'>portfolio</a></li>
                                <li><a href='#'>Contact</a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Our Services</a></li>
                                <li><a href='#'>Expert Team</a></li>
                                <li><a href='#'>Contact us</a></li>
                                <li><a href='#'>Latest News</a></li>
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
                            <p>Copyright &copy; 2018, All Right Reserved <a href='https://codepen.io/anupkumar92/'>Anup</a></p>
                        </div>
                    </div>
                    <div class='col-xl-6 col-lg-6 d-none d-lg-block text-right'>
                        <div class='footer-menu'>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Terms</a></li>
                                <li><a href='#'>Privacy</a></li>
                                <li><a href='#'>Policy</a></li>
                                <li><a href='#'>Contact</a></li>
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