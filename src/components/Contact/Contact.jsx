import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_bsza48n", 
                        "template_21zq5821", 
                        form.current, 
                        "V5-yW3Re6bna3ivQ8")
                        
                .then((result) => {
                    console.log(result.text);
                    alert("Message Successfully Sent!");
                    e.target.reset();
                }, (error) => {
                    console.log(error.text);
                    alert("Something went wrong while sending your message.");
                    e.target.reset();
                });
    };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Don't Be A Stranger</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i class="uil uil-envelope-alt"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>

                        <a href="/" className="contact__button">Write me {" "} <i class="uil uil-arrow-right contact__button-icon"></i></a>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__card">
                        <i class="uil uil-linkedin-alt"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">linkedIn.com/user123</span>

                        <a href="/" className="contact__button">Write me {" "} <i class="uil uil-arrow-right contact__button-icon"></i></a>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__card">
                        <i class="uil uil-whatsapp"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">999-888-777</span>

                        <a href="/" className="contact__button">Write me {" "} <i class="uil uil-arrow-right contact__button-icon"></i></a>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__card">
                        <i class="uil uil-facebook-messenger-alt"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb123</span>

                        <a href="/" className="contact__button">Write me {" "} <i class="uil uil-arrow-right contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="sender_name" className="contact__form-input" placeholder='Provide Your Name' />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="sender_email" className="contact__form-input" placeholder='Provide Your Email'/>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="sender_project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
                    </div>
                    <button className="button button--flex">
                        Send Message <i class="uil uil-message"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact