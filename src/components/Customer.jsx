function Customer({img}) {
  return (
   <>
        <div className="swiper-slide px-2">
                                        <div className="card-grid-6 hover-up">
                                            <div className="card-text-desc mt-10">
                                                <p className="font-md color-text-paragraph">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.
                                                </p>
                                            </div>
                                            <div className="card-image">
                                                <div className="image">
                                                    <figure>
                                                        <img alt="jobBox" src={img}/>
                                                    </figure>
                                                </div>
                                                <div className="card-profile">
                                                    <h6>Mark Adair</h6>
                                                    <span>Businessmen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
   </>
  )
}

export default Customer