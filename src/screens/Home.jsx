import ms from '../assets/imgs/page/homepage3/microsoft.svg'
import sony from '../assets/imgs/page/homepage3/sony.svg'
import acer from '../assets/imgs/page/homepage3/acer.svg'
import nokia from '../assets/imgs/page/homepage3/nokia.svg'
import asus from '../assets/imgs/page/homepage3/asus.svg'
import casio from '../assets/imgs/page/homepage3/casio.svg'
import dell from '../assets/imgs/page/homepage3/dell.svg'
import jobSearch from '../assets/imgs/page/homepage3/img-job-search.png'
import banner1 from '../assets/imgs/page/homepage5/banner1.png'
import banner2 from '../assets/imgs/page/homepage5/banner2.png'
import banner3 from '../assets/imgs/page/homepage5/banner3.png'
import banner4 from '../assets/imgs/page/homepage5/banner4.png'
import banner5 from '../assets/imgs/page/homepage5/banner5.png'
import banner6 from '../assets/imgs/page/homepage5/banner6.png'
import Footer from '../components/Footer'
import bg1 from '../assets/imgs/page/homepage4/img-big1.png'
import bg2 from '../assets/imgs/page/homepage4/img-big2.png'
import bg3 from '../assets/imgs/page/homepage4/img-big3.png'
import bg4 from '../assets/imgs/page/homepage4/img-big4.png'
import bg5 from '../assets/imgs/page/homepage4/img-big5.png'
import bg6 from '../assets/imgs/page/homepage4/img-big6.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import HomeSlides from '../components/HomeSlides'
import Desease from '../components/Desease'

function Home() {

    var ServiceSettings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    var DeseaseSettings = {
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    var settings = {
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <div>



            <main className="main">
                <section className="section-box mb-70">
                    <div className="banner-hero hero-1 banner-homepage5">
                        <div className="banner-inner">
                            <div className="row">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="block-banner">
                                        <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                                            Find Highly<br className="d-none d-lg-block" />Qualified Doctors
                                        </h1>
                                        <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            Each month, more than 3 patients seeks pleasure in their diseases from this platform, making over 140,000 consultations every single day
                                        </div>
                                        <div className="mt-30">
                                            <Link to='/book-consultation'>
                                                <a href="book-consultation.html" className="btn btn-default mr-15">Book Consultation</a>
                                            </Link>
                                            <Link to='/register'>
                                                <a href="doctor-registration.html" className="btn btn-border-brand-2">Register as Doctor</a>
                                            </Link>
                                        </div>
                                        <div className="mt-50 mb-20">
                                            <span className="font-md color-text-paragraph-2">Our Services</span>
                                        </div>
                                        <div className="box-logos-485">
                                            <div className="box-swiper">
                                                <div className="swiper-container swiper-group-4-banner swiper">
                                                    <Slider {...ServiceSettings}>

                                                        <div className="swiper-slide"><a href="#"><img src={ms} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={sony} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={acer} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={nokia} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={asus} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={casio} alt="jobBox" /></a></div>
                                                        <div className="swiper-slide"><a href="#"><img src={dell} alt="jobBox" /></a></div>
                                                    </Slider>
                                                    <div className="swiper-wrapper">


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-12 d-none d-xl-block col-md-6">
                                    <div className="banner-imgs">
                                        <div className="banner-1 shape-1">
                                            <img className="img-responsive" alt="jobBox" src={banner1} />

                                        </div>
                                        <div className="banner-2 shape-2">
                                            <img className="img-responsive" alt="jobBox" src={banner2} />
                                        </div>
                                        <div className="banner-3 shape-3">
                                            <img className="img-responsive" alt="jobBox" src={banner3} />
                                        </div>
                                        <div className="banner-4 shape-3">
                                            <img className="img-responsive" alt="jobBox" src={banner4} />
                                        </div>
                                        <div className="banner-5 shape-2">
                                            <img className="img-responsive" alt="jobBox" src={banner5} />
                                        </div>
                                        <div className="banner-6 shape-1">
                                            <img className="img-responsive" alt="jobBox" src={banner6} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70 mb-50">
                    <div className="section-box wow animate__animated animate__fadeIn">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Common Health Conditions</h2>
                            </div>
                            <div className="box-swiper mt-50 layout-brand-1">
                                <div className="swiper-container swiper-group-6 mh-none swiper">


                                    <Slider {...DeseaseSettings}>
                                        <Desease bg={bg1} title='Covid-19' />
                                        <Desease bg={bg2} title='Gastro' />
                                        <Desease bg={bg3} title='Cough' />
                                        <Desease bg={bg4} title='Fever' />
                                        <Desease bg={bg5} title='Asthama' />
                                    </Slider>
                                    <div className="swiper-wrapper pb-70 pt-5">


                                        {/* <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up" style={{backgroundImage: `url(${bg1})`}}>
                                        <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Covid-19</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up" style={{backgroundImage: `url(${bg2})`}}>
                                        <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Cold & FLu</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg3})`}}>
                                            <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Gastro</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg4})`}}>
                                        <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Cough</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg5})`}}>
                                        <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Fever</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg6})`}}>
                                        <Link to='/blogs'>
                                            <a href="blogs.html">
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h6 className="color-white mb-5">Asthama</h6>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div> */}

                                    </div>
                                </div>
                                <div className="swiper-button-next swiper-button-next-1"></div>
                                <div className="swiper-button-prev swiper-button-prev-1"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mb-30 bg-brand-2 pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="pt-70">
                                    <h2 className="color-white mb-20">How Does It Work ?</h2>
                                    <p className="color-white mb-30">Step By Step Guidance</p>
                                    <div className="mt-20">
                                        <Link to='/register'>
                                            <a href="register.html" className="btn btn-brand-1 btn-icon-more hover-up">Start Now</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="box-swiper mt-50 layout-brand-1">

                                    <Slider {...settings}>

                                        <HomeSlides bg={bg1} />
                                        <HomeSlides bg={bg2} />
                                        <HomeSlides bg={bg3} />
                                        <HomeSlides bg={bg4} />
                                        <HomeSlides bg={bg5} />
                                        <HomeSlides bg={bg6} />

                                    </Slider>

                                    <div className="swiper-container swiper-group-3-explore mh-none swiper">
                                        <div className="swiper-wrapper pb-70 pt-5">

                                            {/* <div className="swiper-slide hover-up">
                                            <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg1})`}}>
                                                <a href="javascript:void(0)">
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h6 className="color-white mb-5">Step 1</h6>
                                                            <p className="color-white font-xs">Choose symptoms from categories and add details.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide hover-up">
                                            <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg2})`}}>
                                                <a href="javascript:void(0)">
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h6 className="color-white mb-5">Step 2</h6>
                                                            <p className="color-white font-xs">Simple verification with Medicare card. No credit card needed.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide hover-up">
                                            <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg3})`}}>
                                                <a href="javascript:void(0)">
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h6 className="color-white mb-5">Step 3</h6>
                                                            <p className="color-white font-xs">Send real time request with estimated wait time.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide hover-up">
                                            <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg4})`}}>
                                                <a href="javascript:void(0)">
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h6 className="color-white mb-5">Step 4</h6>
                                                            <p className="color-white font-xs">Connect with a Licenced Australian Doctor.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide hover-up">
                                            <div className="card-grid-5 card-category hover-up"  style={{backgroundImage: `url(${bg5})`}}>
                                                <a href="javascript:void(0)">
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h6 className="color-white mb-5">Step 5</h6>
                                                            <p className="color-white font-xs">Access ePrescriptions, urgent referrals and certificates.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                         */}
                                        </div>
                                    </div>
                                    <div className="swiper-button-next swiper-button-next-1"></div>
                                    <div className="swiper-button-prev swiper-button-prev-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box bg-15 pt-50 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center mb-30">
                                <img className="img-job-search mt-20" src={jobSearch} alt="jobBox" />
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                                <h2 className="mb-40">Achieved Milestones</h2>
                                <div className="box-checkbox mb-30">
                                    <h6>Largest Medicare funded accredited after-hours service</h6>
                                </div>
                                <div className="box-checkbox mb-30">
                                    <h6>Australian licenced doctors</h6>
                                </div>
                                <div className="box-checkbox mb-30">
                                    <h6>Over 10,000,000 GP consults performed</h6>
                                </div>
                                <div className="box-checkbox mb-30">
                                    <h6>Telehealth and home visits</h6>
                                </div>
                                <div className="box-checkbox mb-30">
                                    <h6>4000 subscribing GP practices</h6>
                                </div>
                                <div className="box-checkbox mb-30">
                                    <h6>No appointments. Simple and easy.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home