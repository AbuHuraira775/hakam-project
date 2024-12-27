function HomeSlides({bg}) {
    return (
        <>
            <div className="swiper-slide hover-up p-2">
                <div className="card-grid-5 card-category hover-up" style={{ backgroundImage: `url(${bg})` }}>
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
        </>
    )
}

export default HomeSlides