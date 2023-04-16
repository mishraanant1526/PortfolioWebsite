import React from "react";
import "./projects.css";

const Projects = () => {
  const data = [
    {
      title: "Momento LLC",
      subtitle: "A Shopify Application for the framing industry",
      description: [
        "Brainstormed with product lead on the market for the framing industry. Conducted 90+ customer interviews and 1000+ surveys.",
        "Facilitated an Agile working environment using Jira and Kanban for 4 engineers to begin production of eCommerce platforms using PERN stack and helped leadership in product pricing and positioning.",
        "Launched ecommerce website and application with better UI and helped the marketing team acquire first 100+ customers.",
      ],
      image: "../assets/Momento.png",
    },
    {
      title: "SRMIIEC",
      subtitle: "(MERN Stack)",
      description: [
        "Led a team of 3 to build websites on full stack for Incubation Center and Fabrication Lab using JavaScript and MongoDB.",
        "Integrated payment portal and created a database for 540 students by providing each student their portal to issue tools from the fabrication lab. Created a test bench for the fabrication lab to test the tools with a test success rate of around 68%",
      ],
      image: "../assets/srmiiec.png",
    },
    {
      title: "Gamified platform for Aspiring Managers",
      subtitle: "(HTML, CSS, JavaScript, jQuery, SharePoint)",
      description: [
        "Researched in the area of client and market growth to look for specific consumer needs, collaborated with a team of 5 to create the most optimal UI and a full-stack web game that enables teams to engage in gameplay while they brew their coffee, which increased their efficiency.",
        "Offered a gamified digital solution to assess and raise potential managers' EQ. Educated clients about the usage of platform and gained satisfaction rate on the new learning platform.",
      ],
      image: "../assets/Fablab.png",
    },
    {
      title: "Sentiment Analysis of a company in the market",
      subtitle: " (BERT, Bertweet, Roberta, Distil Roberta)",
      description: [
        "Build an algorithm that conducts Sentiment Analysis using Bert, Bertweet, DistilRoberta and Roberta. Compared all the algorithms using the Sentiment140 Dataset with 1,600,000 tweets extracted using the twitter API to get the most efficient output.",
        "Successfully compared the algorithms with 83% accuracy and 86% precision for RoBERTa and 79% accuracy and 82.5% precision for distilRoBERTa.",
      ],
      image: "../assets/senti.jpeg",
    },
  ];

  return (
    <div>
      <section className="projects-section">
        <div className="projects-heading">
          <h1 className="project-heading">Projects</h1>
        </div>

        {data.map((item) => (
          <div className="projects-card-container">
            <div className="projects-card-left">
              <div className="projects-card-heading">
                <h1 className="projects-card-title">{item.title}</h1>
                <h2 className="projects-card-subtitle">{item.subtitle}</h2>
              </div>
              <div className="projects-card-paragraph">
                {item.description.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <div className="projects-card-right">
              <img style={{ height: "100%" }} src={item.image} alt="" />
            </div>
          </div>
        ))}
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
