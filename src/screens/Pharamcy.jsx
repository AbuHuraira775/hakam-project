import Footer from "../components/Footer"
import candidate from "../assets/imgs/page/candidates/img.png"
function Pharamcy() {
  return (
   
    <>
    
    <main className="main">
            <section className="section-box-2">
                <div className="container">
                    <div className="banner-hero banner-image-single">
                        <img src={candidate} alt="jobbox"/>
                    </div>
                    <div className="box-nav-tabs mt-40 mb-5">
                        <ul className="nav" role="tablist">
                            <li><a className="btn btn-border mr-15 mb-5 active" href="#tab-sydney" data-bs-toggle="tab" role="tab" aria-controls="tab-sydney" aria-selected="true">Sydney</a></li>
                            <li><a className="btn btn-border mr-15 mb-5" href="#tab-melbourne" data-bs-toggle="tab" role="tab" aria-controls="tab-melbourne" aria-selected="false">Melbourne</a></li>
                            <li><a className="btn btn-border mb-5" href="#tab-brisbane" data-bs-toggle="tab" role="tab" aria-controls="tab-brisbane" aria-selected="false">Brisbane</a></li>
                        </ul>
                    </div>
                    <div className="border-bottom pt-10 pb-10"></div>
                </div>
            </section>
            <section className="section-box mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-single">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-sydney" role="tabpanel" aria-labelledby="tab-sydney">
                                        <div className="col-xl-12 col-12">
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-melbourne" role="tabpanel" aria-labelledby="tab-melbourne">
                                        <div className="col-xl-12 col-12">
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-brisbane" role="tabpanel" aria-labelledby="tab-brisbane">
                                        <div className="col-xl-12 col-12">
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <h4><a href="javascript:void(0)">
                                                    Above & Beyond Beenleigh
                                                </a></h4>
                                                <div className="mt-5">
                                                    <span className="card-briefcase">Phone: +92 309 227 1214</span>
                                                    <br/><span className="card-time">Mon-Fri: 8am-6pm, Sat: 8am-3pm</span>
                                                </div>
                                            </div>
                                        </div>
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

export default Pharamcy