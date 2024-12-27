import Footer from "../components/Footer"
import contact from "../assets/imgs/page/contact/img.png" 

function Contact() {
  return (
    <>
    
         
    <main className="main">
            <section className="section-box mt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-40">
                            <span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span>
                            <h2 className="mt-5 mb-10">Get in touch</h2>
                            <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <div className="col-lg-6 col-md-6 input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="cuq_name"
                                            placeholder="Enter your Name *" type="text" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="cuq_email"
                                            placeholder="Your Email *" type="email" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="cuq_phone"
                                            placeholder="Phone Number *" type="tel" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="cuq_subject"
                                            placeholder="Subject *" type="text" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-20">
                                        <div className="textarea-style">
                                            <textarea className="font-sm color-text-paragraph-2" name="cuq_message"
                                                placeholder="Your Query Here *" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                    {/* style="width:100%" */}
                                        <div  className="g-recaptcha" data-sitekey="6LeYCr0bAAAAAIb28XVInMkGk2wRDca-l4-t6NpS"></div>
                                    </div>
                                    {/* style="align: right" */}
                                    <div className="col-md-4">
                                        
                                        <button className="submit btn btn-send-message text-right " name="addContact" type="submit">  Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 text-center d-none d-lg-block">
                            <img src={contact}alt="joxBox" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
<Footer />
    </>
  )
}

export default Contact