import Footer from "../components/Footer"

import aboutImg from '../assets/imgs/page/about/img-about2.png'
import arlena from '../assets/imgs/page/about/team1.png'
import floyd from '../assets/imgs/page/about/team2.png'
import team3 from '../assets/imgs/page/about/team3.png'
import team4 from '../assets/imgs/page/about/team4.png'
import star from '../assets/imgs/template/icons/star.svg'
import igm1 from '../assets/imgs/page/about/user1.png'
import img2 from '../assets/imgs/page/about/user2.png'
import img3 from '../assets/imgs/page/about/user3.png'
import img4 from '../assets/imgs/page/about/user3.png'
import img5 from '../assets/imgs/page/about/user3.png'
import Slider from "react-slick"
import Customer from "../components/Customer"
import Testinomial from "../components/Testinomial"

function About() {
    
    var TestinomialSettings = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
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
                    slidesToShow: 2,
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

  return (
    <>
    
    <main className="main">
            <section className="section-box mt-30">
                <div className="post-loop-grid">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">About Our Company</h2>
                            <p className="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.</p>
                        </div>
                        <div className="row mt-70">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img src={aboutImg} alt="joxBox"/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="mt-15">What we can do?</h3>
                                <div className="mt-20">
                                    <p className="font-md color-text-paragraph mt-20">Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.</p>
                                    <p className="font-md color-text-paragraph mt-20">Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.</p>
                                    <p className="font-md color-text-paragraph mt-20">ClassNameclassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p>
                                </div>
                                <div className="mt-30"><a className="btn btn-brand-1" href="#">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-80">
                <div className="post-loop-grid">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Meet Our Team</h2>
                            <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.</p>
                        </div>
                        <div className="row mt-70">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 text-center hover-up">
                                <div className="image-top-feature flex items-center justify-center">
                                    <figure><img alt={arlena} src={arlena}/></figure>
                                </div>
                                <div className="card-grid-4-info">
                                    <h5 className="mt-10">Arlene McCoy</h5>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                                    <div className="rate-reviews-small pt-5 flex items-center justify-center"><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 text-center hover-up">
                                <div className="image-top-feature flex items-center justify-center">
                                    <figure><img alt="jobBox" src={floyd}/></figure>
                                </div>
                                <div className="card-grid-4-info">
                                    <h5 className="mt-10">Floyd Miles</h5>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">UI/UX Designer</p>
                                    <div className="rate-reviews-small pt-5 flex items-center justify-center"><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 text-center hover-up">
                                <div className="image-top-feature flex items-center justify-center">
                                    <figure><img alt="jobBox" src={team3}/></figure>
                                </div>
                                <div className="card-grid-4-info">
                                    <h5 className="mt-10">Devon Lane</h5>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                                    <div className="rate-reviews-small pt-5 flex items-center justify-center"><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 text-center hover-up">
                                <div className="image-top-feature flex items-center justify-center">
                                    <figure><img alt="jobBox" src={team4}/></figure>
                                </div>
                                <div className="card-grid-4-info">
                                    <h5 className="mt-10">Jerome Bell</h5>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                                    <div className="rate-reviews-small pt-5 flex items-center justify-center"><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span><img src={star} alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-30 mb-40">
                <div className="container">
                    <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Our Happy Customer</h2>
                    <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">When it comes to choosing the right web hosting provider, we know how easy it<br className="d-none d-lg-block"/> is to get overwhelmed with the number.</div>
                    <div className="row mt-50">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3 swiper">
                                <Slider {...settings}>
                                    <Customer img={igm1} />
                                    <Customer img={img2} />
                                    <Customer img={img3} />
                                    
                                </Slider>
                                <div className="swiper-wrapper pb-70 pt-5">

                                    {/* <div className="swiper-slide">
                                        <div className="card-grid-6 hover-up">
                                            <div className="card-text-desc mt-10">
                                                <p className="font-md color-text-paragraph">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <div className="image">
                                                    <figure>
                                                        <img alt="jobBox" src={igm1}/>
                                                    </figure>
                                                </div>
                                                <div className="card-profile">
                                                    <h6>Mark Adair</h6>
                                                    <span>Businessmen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="swiper-slide">
                                        <div className="card-grid-6 hover-up">
                                            <div className="card-text-desc mt-10">
                                                <p className="font-md color-text-paragraph">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <div className="image">
                                                    <figure>
                                                        <img alt="jobBox" src={img2}/>
                                                    </figure>
                                                </div>
                                                <div className="card-profile">
                                                    <h6>Mark Adair</h6>
                                                    <span>Businessmen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="card-grid-6 hover-up">
                                            <div className="card-text-desc mt-10">
                                                <p className="font-md color-text-paragraph">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <div className="image">
                                                    <figure>
                                                        <img alt="jobBox" src={img3}/>
                                                    </figure>
                                                </div>
                                                <div className="card-profile">
                                                    <h6>Mark Adair</h6>
                                                    <span>Businessmen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="swiper-pagination swiper-pagination3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-0">
                <div className="section-box wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">See Some Words</h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Thousands of employee get their ideal jobs<br className="d-none d-lg-block"/>and feed back to us!</p>
                        </div>
                        <div className="box-swiper mt-50">
                            <div className="swiper-container swiper-group-4-border swiper">

                                <Slider {...TestinomialSettings}>
                                    <Testinomial img={img5} />
                                    <Testinomial img={img2} />
                                    <Testinomial img={igm1} />
                                    <Testinomial img={img4} />
                                </Slider>

                                <div className="swiper-wrapper pb-70 pt-5">

                                    {/* <div className="swiper-slide hover-up">
                                        <div className="card-review-1"> 
                                            <div className="image-review">
                                                <img src={img5} alt="jobBox"/>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-name"> 
                                                    <h5>Ellis Kim</h5>
                                                    <span className="font-xs">Digital Artist</span>
                                                </div>
                                                <div className="review-rating flex items-center "><img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/></div>
                                                <div className="review-comment ">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide hover-up">
                                        <div className="card-review-1"> 
                                            <div className="image-review">
                                                <img src="assets/imgs/page/homepage4/user2.png" alt="jobBox"/>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-name"> 
                                                    <h5>John Smith</h5>
                                                    <span className="font-xs">Product designer</span>
                                                </div>
                                                <div className="review-rating flex items-center "><img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/></div>
                                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide hover-up">
                                        <div className="card-review-1"> 
                                            <div className="image-review">
                                                <img src={igm1} alt="jobBox"/>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-name"> 
                                                    <h5>Sayen Ahmod</h5>
                                                    <span className="font-xs">Developer</span>
                                                </div>
                                                <div className="review-rating flex items-center "><img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/></div>
                                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide hover-up">
                                        <div className="card-review-1"> 
                                            <div className="image-review">
                                                <img src="assets/imgs/page/homepage4/user4.png" alt="jobBox"/>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-name"> 
                                                    <h5>Tayla Swef</h5>
                                                    <span className="font-xs">Graphic designer</span>
                                                </div>
                                                <div className="review-rating flex items-center "><img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/></div>
                                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide hover-up">
                                        <div className="card-review-1"> 
                                            <div className="image-review"> 
                                                <img src="assets/imgs/page/homepage4/user.png" alt="jobBox"/>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-name"> 
                                                    <h5>Ellis Kim</h5>
                                                    <span className="font-xs">Digital Artist</span>
                                                </div>
                                                <div className="review-rating flex items-center "><img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/> <img src={star} alt="jobBox"/></div>
                                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                                            </div>
                                        </div>
                                    </div> */}


                                </div>
                                <div className="swiper-pagination swiper-pagination-style-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<Footer />
 
    </>
  )
}

export default About