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
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown text-center">Technical Skills</h1>ject
        </div>
      </div>
        <ul className='prof'>
          <li className='prof-li'>Full Stack Development</li>
          <li className='prof-li'>Salesforce</li>
          <li className='prof-li'>APIs</li>
          <li className='prof-li'>CRM</li>
          <li className='prof-li'>Digital Transformation</li>
          <li className='prof-li'>MS Office Suite</li>
          <li className='prof-li'>HubSpot</li>
          <li className='prof-li'>SQL</li>
          <li className='prof-li'>HTML</li>
          <li className='prof-li'>Crystal Reports</li>
          <li className='prof-li'>JavaScript</li>
          <li className='prof-li'>Website Design</li>
          <li className='prof-li'>Business Analysis</li>
          <li className='prof-li'>E-Commerce</li>
          <li className='prof-li'>Financial Reporting</li>
          <li className='prof-li'>Process Analysis</li>
          <li className='prof-li'>Application Integration</li>
        </ul>
      </section>

      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown text-center">Resume</h1>ject
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="section-title text-center">
            <h1 class="display-5 mb-5"><a href="#download" onClick={downloadFile}>Click Here To Download!</a></h1>
          </div>
        </div>
      </div>
      </div>
      );
};

      export default DownloadableFile;
