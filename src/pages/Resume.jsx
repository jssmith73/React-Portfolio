import React from 'react';


const DownloadableFile = () => {
  const downloadFile = () => {
    // Perform any logic needed before downloading the file

    // For example, you can create a URL for the file
    const fileUrl = 'https://www.dropbox.com/scl/fi/qzz36vebx8ceugcaj87vk/Josiah-Resume.docx?rlkey=onj0yaxboean83jcjsb1iul5f&dl=0';

    // Then initiate the download by creating a link and simulating a click
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'your_file_name.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section className="technical-skills">
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown text-center">Technical Skills</h1>ject
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="bi bi-filetype-html"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">01</h1>
                </div>
                <h5>Full Stack Development</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-check fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">02</h1>
                </div>
                <h5>API'S </h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">03</h1>
                </div>
                <h5>SQL</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-filetype-html"></i>    
                                </div> */}
                  <h1 className="display-1 text-light mb-0">04</h1>
                </div>
                <h5>HTML</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">05</h1>
                </div>
                <h5>CSS</h5>
              </div><div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">06</h1>
                </div>
                <h5>JavaScript</h5>
              </div><div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">07</h1>
                </div>
                <h5>Website-Design</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                    <i className="fa fa-check fa-2x text-primary"></i>
                  </div> */}
                  <h1 className="display-1 text-light mb-0">08</h1>
                </div>
                <h5>MERN</h5>
              </div>
              </div>
          </div>
        </div>
      </section>

      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown text-center">Resume</h1>ject
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5"><a href="#download" onClick={downloadFile}>Click Here To Download!</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableFile;
