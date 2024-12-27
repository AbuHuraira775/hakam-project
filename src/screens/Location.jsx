
import img1 from "../assets/imgs/page/homepage1/location1.png"
import img2 from "../assets/imgs/page/homepage1/location2.png"
import img3 from "../assets/imgs/page/homepage1/location3.png"
import img4 from "../assets/imgs/page/homepage1/location4.png"
import img5 from "../assets/imgs/page/homepage1/location5.png"
import img6 from "../assets/imgs/page/homepage1/location6.png"
import Footer from "../components/Footer"

function Location() {
  return (
    <>
      
      <main className="main">
            <section className="section-box mt-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Our Presence</h2>
                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your nearest spot and get the benefits of yourself</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-50">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location1.png);" */}
                                <div className="image " style={{ backgroundImage: `url(${img1})` }}><span className="lbl-hot">Hot</span></div></a>
                                <div className="informations bg1"><a href="javascript:void(0)">
                                    <h5>Paris, France</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">5 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">120 Pharmacies</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location2.png);" */}
                                <div className="image"style={{ backgroundImage: `url(${img2})` }} ><span className="lbl-hot">Trending</span></div></a>
                                <div className="informations"><a href="javascript:void(0)">
                                    <h5>London, England</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">7 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">68 Pharmacies</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location3.png);" */}
                                <div className="image"style={{ backgroundImage: `url(${img3})` }}><span className="lbl-hot">Hot</span></div></a>
                                <div className="informations"><a href="javascript:void(0)">
                                    <h5>New York, USA</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">9 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">80 Pharmacies</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location4.png);" */}
                                <div className="image" style={{ backgroundImage: `url(${img4})` }}></div></a>
                                <div className="informations"><a href="javascript:void(0)">
                                    <h5>Amsterdam, Holland</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">16 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">86 Pharmacies</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location5.png);" */}
                                <div className="image" style={{ backgroundImage: `url(${img5})` }}></div></a>
                                <div className="informations"><a href="javascript:void(0)">
                                    <h5>Copenhagen, Denmark</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">39 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">186 Pharmacies</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="javascript:void(0)">
                            {/* style="background-image: url(assets/imgs/page/homepage1/location6.png);" */}
                                <div className="image"style={{ backgroundImage: `url(${img6})` }}></div></a>
                                <div className="informations"><a href="javascript:void(0)">
                                    <h5>Berlin, Germany</h5></a>
                                <div className="row">
                                    <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">15 Doctors</span></div>
                                    <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">632 Pharmacies</span></div>
                                </div>
                                </div>
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

export default Location