import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <body>
      <section class="contact-section">
        <div class="resume-heading-container">
          <h1 class="contact-heading">Let's talk</h1>
        </div>

        <div class="contact-form-container">
          <form action="" class="contact-form">
            <div class="contact-form-row">
              <label for="">
                First Name*
                <input type="text" required />
              </label>
              <label for="">
                Last Name*
                <input type="text" required />
              </label>
            </div>
            <label for="">
              Email*
              <input type="email" />
            </label>
            <label for="">
              Subject
              <input type="text" />
            </label>
            <label for="">
              Message
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </label>
            <input type="Submit" id="submit-button" />
          </form>
        </div>
      </section>

      <section class="footer-section">
        <p class="copyright">&#169; 2023 by Anant Mishra</p>
        <div class="footer-inner-container">
          <div class="footer-inner-element">
            <p>
              <b>Call</b>
            </p>
            <p>+1725-208-7095</p>
          </div>
          <div class="footer-inner-element">
            <p>
              <b>Write</b>
            </p>
            <p>mishraanant1526@gmail.com</p>
          </div>
          <div class="footer-inner-element">
            <p>
              <b>Follow</b>
            </p>
            <div>
              <a href="mailto: mishraanant1526@gmail.com">
                <img
                  src="https://static.wixstatic.com/media/5a5ec5_28b318406a6145f791afe734600821a1~mv2.jpg/v1/fill/w_24,h_24,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5a5ec5_28b318406a6145f791afe734600821a1~mv2.jpg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.linkedin.com/in/anant-mishra-639707172/">
                <img
                  src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/_anantmishra/" target="_blank">
                <img
                  src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Contact;
