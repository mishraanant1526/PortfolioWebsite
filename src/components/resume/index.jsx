import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <body>
      <section class="resume-section">
        <div class="resume-heading-container">
          <h1 class="resume-heading">Resume</h1>
        </div>
        <div class="resume-experience-container">
          <h1>Experience</h1>
          <a href="../assets/Resume.pdf" target="_blank">
            <button class="resume-button">Download CV</button>
          </a>
        </div>

        <div class="resume-card-container">
          <div class="resume-card-left-container">
            <div>
              <h1 class="position-time">2022 - Present</h1>
              <p>Product Manager</p>
              <p>Momento</p>
              <p>Nevada,USA</p>
            </div>
          </div>
          <div class="resume-card-right-container">
            <p>
              Examined the various client segments via customer interviews,
              grouping them according to age gaps and frequency for the framing
              industry in the United States.
            </p>
            <p>
              Led a team of 4 to develop an ecommerce website/ mobile
              application achieving curated user interface.
            </p>
          </div>
        </div>
        <div class="resume-card-container">
          <div class="resume-card-left-container">
            <div>
              <h1 class="position-time">2021 - 2022</h1>
              <p>Business Technology</p>
              <p>Analyst</p>
              <p>Deloitte</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
          <div class="resume-card-right-container">
            <p>
              Researched in the area of client and market growth to look for
              specific consumer needs, collaborated with a team of 5 to create
              the most optimal UI and a full-stack web game that enables teams
              to engage in gameplay while they brew their coffee, offered a
              gamified digital solution to assess and raise potential managers'
              EQ.
            </p>
          </div>
        </div>

        <div class="resume-experience-container">
          <h1>Education</h1>
        </div>

        <div class="resume-card-container">
          <div class="resume-card-left-container">
            <div>
              <h1 class="position-time">2022 - 2023</h1>
              <p>University of California</p>
              <p>Berkeley</p>
              <p>Post Graduate in Business</p>
              <p>Administration</p>
              <p>Berkeley, California</p>
            </div>
          </div>
          <div class="resume-card-right-container">
            <p>
              Relevant Coursework: Product Management, Pricing, International
              Marketing, Technology Entrepreneurship, Design and Innovation,
              Technology Design Foundation, Business Decision Making
            </p>
          </div>
        </div>
        <div class="resume-card-container">
          <div class="resume-card-left-container">
            <div>
              <h1 class="position-time">2018 - 2022</h1>
              <p>SRM Institute Of Science and Technology KTR</p>
              <p>Bachelor in Computer Science Chennai, India</p>
            </div>
          </div>
          <div class="resume-card-right-container">
            <p>
              Relevant Coursework: Data Structures and Algorithm, Java, C, C++,
              Computer Architecture, Computer Communications and Networks, Data
              Science.
            </p>
          </div>
        </div>
      </section>

      <section class="skillset-section">
        <div class="skillset-content-container">
          <h1>Professional skillset</h1>
          <div class="skills-content above" style={{ marginLeft: 40 }}>
            <div>
              <ul>
                <li>Entrepreneurial Mindset</li>
                <li>Teamwork & Collaboration</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Go-to-Market Planning</li>
                <li>Digital Analytics</li>
              </ul>
            </div>
            <div></div>
          </div>
          <h1>Languages</h1>
          <div class="skills-content">
            <div style={{ marginLeft: 40 }}>
              <ul>
                <li>English(Native)</li>
                <li>Spanish(Proficient)</li>
              </ul>
            </div>
            <div>
              <ul style={{ marginLeft: 28 }}>
                <li>French(Proficient)</li>
              </ul>
            </div>
            <div></div>
          </div>
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

export default Resume;
