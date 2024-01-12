import react, { useState } from 'react';
import { validateEmail } from "../utils/helpers"

const handleChange = (e) => {
    // if (e.target.name === 'email') {
    //     const isValid = validateEmail(e.target.value);
    //     if (!isValid) {
    //         setErrorMessage('Your email is invalid.');
    //     } else {
    //         setErrorMessage('');
    //     }
    //     if (!e.target.value.length) {
    //         setErrorMessage(`${e.target.name} is required.`);
    //     } else {
    //         setErrorMessage('');
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //         console.log('Handle Form', formState);
    //     }
    // }
    setInputValue(e.target.value);

};

// const input = document.querySelector('form-control');

// const handleName = () => {
//     if (input.value='')
//       alert('Please enter your name!');
// };
// const handleEmail = () => {
//     if (input.value='')
//     alert('Please enter your email!');
// };
// const handleMessage = () => {
//     if (input.value='')
//     alert('Please enter a message!');
// };

const FormWithErrorMessage = () => {
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);

    const handleMouseLeave = () => {
        if (inputValue.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // function Contact() {
    return (
        <div className="container-fluid page-header py-5 mb-5">
            <div className="container py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown text-center">Contact</h1>
            </div>

            <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
                <div className="container contact px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">Contact Me</h1>
                                </div>
                                <p className="mb-4">Please contact me via the form below and I will respond as soon as possible!</p>
                                <form id="ajax-contact" method="post" action="mailer.php" >
                                    <div className="row g-3">

                                        {/* Name Enter */}

                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={inputValue}
                                                    onChange={handleChange}
                                                    onMouseLeave={handleMouseLeave} />
                                                {showError && <div style={{ color: 'red' }}>Please enter a value!</div>}
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>

                                        {/* Email Enter */}

                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    value={inputValue}
                                                    onChange={handleChange}
                                                    onMouseLeave={handleMouseLeave}
                                                />
                                                {showError && <div style={{ color: 'red' }}>Please enter a value!</div>}
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>

                                        {/* Enter Message */}

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea 
                                                className="form-control" 
                                                placeholder="Leave a message here" 
                                                id="message" 
                                                style={{ height: "100px" }}
                                                ovalue={inputValue}
                                                onChange={handleChange}
                                                onMouseLeave={handleMouseLeave}>                                    
                                                </textarea>
                                                {showError && <div style={{ color: 'red' }}>Please enter a value!</div>}
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


export default FormWithErrorMessage;