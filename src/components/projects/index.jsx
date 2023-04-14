import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      <section className="projects-section">
        <div className="projects-heading">
          <h1 className="project-heading">Projects</h1>
        </div>

        <div className="projects-card-container">
          <div className="projects-card-left">
            <div className="projects-card-heading">
              <h1 className="projects-card-title">Momento LLC</h1>
              <h2 className="projects-card-subtitle">
                A Shopify Application for the framing industry{" "}
              </h2>
            </div>
            <div className="projects-card-paragraph">
              <p>
                With a Team of 4, developed a complete ecommerce website with
                APIs to update content through an admin dashboard. using React
                JS, Node JS and PostgreSQL. Integrated with Square-up for
                payment portal. Deployed in an EC2 server.
              </p>
            </div>
          </div>
          <div className="projects-card-right">
            <img style={{ height: "50%" }} src="../assets/Momento.png" alt="" />
            <img
              style={{ height: "50%" }}
              src="../assets/Momento-banner.png"
              alt="hello"
            />
          </div>
        </div>

        <div className="projects-card-container">
          <div className="projects-card-left">
            <div className="projects-card-heading">
              <h1 className="projects-card-title">SRMIIEC</h1>
              <h2 className="projects-card-subtitle">Product Manager</h2>
            </div>
            <div className="projects-card-paragraph">
              <p>
                With a team of 3 built dynamic websites on full stack for
                Incubation Center and Fabrication Lab using JavaScript and
                MongoDB
              </p>
            </div>
          </div>
          <div className="projects-card-right">
            <img src="../assets/srmiiec.png" alt="hello" />
          </div>
        </div>

        <div className="projects-card-container">
          <div className="projects-card-left">
            <div className="projects-card-heading">
              <h1 className="projects-card-title">FabLab</h1>
              <h2 className="projects-card-subtitle">Product Manager</h2>
            </div>
            <div className="projects-card-paragraph">
              <p>
                With a team of 3 built dynamic websites on full stack for
                Incubation Center and Fabrication Lab using JavaScript and
                MongoDB
              </p>
            </div>
          </div>
          <div className="projects-card-right">
            <img src="../assets/Fablab.png" alt="hello" />
          </div>
        </div>
      </section>

      <section className="footer-section">
        <p className="copyright">&#169; 2023 by Anant Mishra</p>
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

export default Projects;
