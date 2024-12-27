import star from '../assets/imgs/template/icons/star.svg'
function Testinomial({img}) {
  return (
    <>
    
    <div className="swiper-slide hover-up px-2">
                                        <div className="card-review-1"> 
                                            <div className="image-review">
                                                <img src={img} alt="jobBox"/>
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
                                    
    </>
  )
}

export default Testinomial