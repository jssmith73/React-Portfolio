function About() {
    return (

        //About Me Header
        <div className="container-fluid page-header py-5 mb-5">
            <div className="container py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown text-center">About Me</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                </nav>
            </div>

            {/* Proficiencies */}

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center justify-content-between mb-2">

                                <img className="text-center mx-auto d-block" src="img\icons\react.png" alt="" style={{ width: "100px", height: "100px" }} />

                            </div>
                            <h5 className="text-center text-white">React</h5>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center justify-content-between mb-2">

                                <img className="text-center mx-auto d-block" src="img\icons\node.png" alt="" style={{ width: "100px", height: "100px" }} />

                            </div>
                            <h5 className="text-center text-white">Node</h5>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center justify-content-between mb-2">

                                <img className="text-center mx-auto d-block" src="img\icons\sql.png" alt="" style={{ width: "100px", height: "100px" }} />

                            </div>
                            <h5 className="text-center text-white">SQL</h5>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center justify-content-between mb-2">

                                <img className="text-center mx-auto d-block" src="img\icons\json.png" alt="" style={{ width: "100px", height: "100px" }} />

                            </div>
                            <h5 className="text-center text-white">JSON</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* About me column */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img className="mx-auto d-block" src="img\graduation.png" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">About Me</h1>
                                </div>
                                <p className="mb-4 pb-2">Born, raised, and homeschooled in Randleman, NC. After I graduated I went to Randolph Community College's welding trade program. I then worked in that field for nearly 10 years and since becoming a recent parent, my wife and I decided it was time to consider career options better for my long-term health. I then decided to pursue my early interest in computer technology. After discovering web devolpment I found an interest in the inner-workings of how websites work and how everything connects together. Since then my curiosity leads me to learning new things about web development everyday.</p>
                                <div className="row g-4 mb-4 pb-2">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "60px", height: "60px" }}>
                                                <i className="fa fa-users fa-2x text-primary"></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default About;