import Footer from "../components/Footer"
import blog2 from '../assets/imgs/page/blog/img-single.png'
import blog1 from '../assets/imgs/page/blog/img-content.png'
import user3 from '../assets/imgs/page/homepage1/user3.png'
import calender from '../assets/imgs/page/blog/calendar.svg'
import time from '../assets/imgs/template/icons/time.svg'

function Blogs() {
  return (
    <>
    
       
    <main className="main">
            <section className="section-box">
                <div><img src={blog1}/></div>
            </section>
            <section className="section-box">
                <div className="archive-header pt-50 text-center">
                <div className="container">
                    <div className="box-white">
                    <div className="max-width-single"><a className="btn btn-tag" href="#">Job Tips</a>
                        <h2 className="mb-30 mt-20 text-center">11 Tips to Help You Get New Clients Through Cold Calling</h2>
                        <div className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
                        <div className="author d-flex align-items-center mr-30"><img alt="jobBox" src={user3}/><span>Sarah Harding</span></div>
                        <div className="date"><span className="font-xs color-text-paragraph-2 mr-20 d-inline-block"><img className="img-middle mr-5" src={calender}/> 06 Sep 2022</span><span className="font-xs color-text-paragraph-2 d-inline-block"><img className="img-middle mr-5" src={time}/> 8 mins to read</span></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="post-loop-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="single-body">
                                <div className="max-width-single">
                                    <div className="font-lg mb-30">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien
                                        pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus,
                                        quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.
                                        </p>
                                    </div>
                                </div>
                                <figure>
                                    <img src={blog2}/>
                                </figure>
                                <div className="max-width-single">
                                    <div className="content-single">
                                        <p></p>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien
                                        pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus,
                                        quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.
                                        </p>
                                        <h4>In ut odio libero</h4>
                                        <ul>
                                        <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                        <li>5+ years of industry experience in interactive design and / or visual design</li>
                                        <li>Excellent interpersonal skills&#x202F;</li>
                                        <li>Aware of trends in&#x202F;mobile, communications, and collaboration</li>
                                        <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                        <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                        <li>History of impacting shipping products with your work</li>
                                        <li>A Bachelor&rsquo;s Degree in Design (or related field) or equivalent professional experience</li>
                                        <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                        </ul>
                                        <p></p>
                                        <p>
                                        Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat
                                        justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit
                                        est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio.
                                        </p>
                                    </div>
                                    <div className="single-apply-jobs mt-20">
                                        <div className="row">
                                            <div className="col-12">
                                                <a className="btn btn-border-3 mr-10 hover-up" href="#"># Nature</a>
                                                <a className="btn btn-border-3 mr-10 hover-up" href="#"># Beauty</a>
                                                <a className="btn btn-border-3 hover-up" href="#"># Travel tips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </>
  )
}

export default Blogs