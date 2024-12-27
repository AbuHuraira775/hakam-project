import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.jpg'
import play1 from '../assets/imgs/template/icons/android.png'
import play2 from '../assets/imgs/template/icons/app-store.png'


function Footer() {
    return (
        <>

            <footer className="footer mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/'>
                                <a href="index.html">
                                    <img alt="logo.jpg" src={logo} />
                                </a>
                            </Link>
                            <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
                                Australia’s largest and most trusted Medicare bulk-billed after-hours service
                            </div>
                            <div className="footer-social">
                                <a className="icon-socials icon-facebook" href="#"></a>
                                <a className="icon-socials icon-twitter" href="#"></a>
                                <a className="icon-socials icon-linkedin" href="#"></a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6 className="mb-20">Navigation</h6>
                            <ul className="menu-footer">
                                <li><Link to='/about'><a href="about-us.html">About Us</a></Link></li>
                                <li><Link to='/contact'><a href="cpntact-us.html">Contact Us</a></Link></li>
                                <li><Link to='/book-consultation'><a href="book-consultation.html">Book An Appointment</a></Link></li>
                                <li><Link to='/register'><a href="doctor-registration.html">Doctor Registration</a></Link></li>
                                <li><Link to='/login'><a href="login.html">Login</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6 className="mb-20">Quick links</h6>
                            <ul className="menu-footer">
                                <li><Link to='/location'><a href="locations.html">Locations</a></Link></li>
                                <li><Link to='/pharmacy'><a href="24-hours-pharmacies.html">24 Hours Pharmacies</a></Link></li>
                                <li><Link to='/term-and-ploicy'><a href="terms-and-conditions.html">Terms & Conditions</a></Link></li>
                                <li><Link to='/privacy-policy'><a href="privacy-policy.html">Privacy Policy</a></Link></li>
                                <li><Link to='/faqs'><a href="faqs.html">FAQs</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6 className="mb-20">Download App</h6>
                            <p className="color-text-paragraph-2 font-xs">
                                Download our Apps and get extra 15% Discount on your first Order&mldr;!
                            </p>
                            <div className="mt-15 flex">
                                <a className="mr-5" href="#">
                                    <img src={play1} alt="joxBox" />
                                </a>
                                <a href="#">
                                    <img src={play2} alt="joxBox" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom mt-50">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="font-xs color-text-paragraph">
                                    Copyright &copy; 2024. DADH all right reserved
                                </span>
                            </div>
                            <div className="col-md-6 text-md-end text-start">
                                <span className="font-xs color-text-paragraph">
                                    Designed & Developed by HakamTechSol
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer