export default function Contact() {
    return(
        <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown text-center">Contact</h1>
        </div>

        <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: "6rem 0"}}>
        <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 ps-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Contact Me</h1>
                        </div>
                        <p className="mb-4">Please contact me via the form below and I will respond as soon as possible! <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form id="ajax-contact" method="post" action="mailer.php">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    )
}