import { Link } from "react-router-dom"

function Desease({bg,title}) {
    return (
        <>

            <div className="swiper-slide hover-up p-2">
                <div className="card-grid-5 card-category hover-up" style={{ backgroundImage: `url(${bg})` }}>
                    <Link to='/blogs'>
                        <a href="blogs.html">
                            <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">{title}</h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Desease