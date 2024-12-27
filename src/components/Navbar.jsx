import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.jpg'
import { useState } from 'react'
function Navbar() {
    const [mobileNav, setMobileNav] = useState(false)

    const liStyle = {
        color: '#FF0000',
        fontWeight: '600',
        fontSize: '1.1rem',
        marginBottom: '1.2rem'    
    }

    return (
        <>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link to='/'>
                                    <a className="d-flex" href="index.html">
                                        <img alt="jobBox" src={logo} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About us</Link></li>
                                    <li><Link to='/contact'>Contact us</Link></li>
                                    <li><Link to='/location'>Location</Link></li>
                                    <li><Link to='/pharmacy'>24 Hours Pharmacy</Link></li>
                                </ul>
                            </nav>
                            <div className="burger-icon burger-icon-white relative z-10 " onClick={() => setMobileNav(!mobileNav)}>
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link to='/login'>
                                    <a className="btn btn-default btn-shadow ml-40 hover-up" href="login.html">
                                        Login
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            {mobileNav ?
                <div className="fixed h-[100vh] z-20 bg-white w-screen">
                    <div className="mobile-header-wrapper-inner">
                        <div className="mobile-header-content-area">
                            <div className="perfect-scroll">
                                <div className="mobile-menu-wrap mobile-header-border">
                                    <nav className=' w-screen py-9 pl-35 pr-3'>

                                        <div className="cross flex items-center justify-end" onClick={() => setMobileNav(!mobileNav)}>
                                            <i className='fa-solid fa-xmark text-3xl'></i>
                                        </div>
                                        <ul className="mobile-menu font-heading " onClick={() => setMobileNav(!mobileNav)}>
                                            <li  style={liStyle}><Link to='/'><a href="index.html">Home</a></Link></li>
                                            <li style={liStyle}><Link to='/about'><a href="about-us.html">About Us</a></Link></li>
                                            <li style={liStyle}><Link to='/contact'><a href="contact-us.html">Contact Us</a></Link></li>
                                            <li style={liStyle}><Link to='/location'><a href="locations.html">Locations</a></Link></li>
                                            <li style={liStyle}><Link to='/pharmacy'><a href="24-hours-pharmacies.html">24 Hours Pharmacies</a></Link></li>
                                            <li style={liStyle}><Link to='/login'><a href="login.html">Login</a></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null}




        </>
    )
}

export default Navbar