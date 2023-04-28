import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="about-section">
        <div className="about-content-container">
          <div className="bg-shadow">
            <div className="about-content-left">
              <div className="image-container"></div>
              <h1>Anant Mishra</h1>
              <div className="about-content-line"></div>
              <p>PRODUCT MANAGER</p>
            </div>
            <div className="about-content-socials">
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
              <a
                href="https://www.linkedin.com/in/anant-mishra-639707172/"
                target="_blank"
              >
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
          <div className="about-content-right">
            <h1>Hello</h1>
            <p className="about-content-right-subhead">
              Here's who I am & what I do
            </p>
            <div className="button-container">
              <a href="./assets/Resume.pdf" target="_blank">
                <button className="resume-button">Resume</button>
              </a>
              <a href="./projects">
                <button className="projects-button">Projects</button>
              </a>
            </div>
            <p className="about-paragraph">
              In order to create products that provide solutions for end users,
              I like serving as the link between technical teams and management.
              By responding to the What and the Why of crucial product
              questions, I am able to provide clarity and enthusiasm to the
              team's efforts. I get energized by collaborating across functional
              lines, solving issues, and guiding the team toward a shared goal.
            </p>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <p>&#169; 2023 by Anant Mishra</p>
        <div className="footer-inner-container">
          <div className="footer-inner-element">
            <p>
              <b>Call</b>
            </p>
            <p>+1725-208-7095</p>
          </div>
          <div className="footer-inner-element">
            <p>
              <b>Write</b>
            </p>
            <p>mishraanant1526@gmail.com</p>
          </div>
          <div className="footer-inner-element">
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
    </div>
  );
};

export default Home;
