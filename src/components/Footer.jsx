function Footer() {
    return (
<div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Contact</h4>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>336-964-6600</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>josiahsmith1359@gmail.com</p>
                            <br />
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/josiah.smith.16/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/josiah-smith-6a30671b3/"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://github.com/jssmith73"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    )
};

export default Footer;