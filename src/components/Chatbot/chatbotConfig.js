import { createChatBotMessage } from "react-chatbot-kit";

export const config = {
    botName: "Nova",
    initialMessages: [
      createChatBotMessage("Hi! How can I help you today?", {
        widget: "helpOptions",
      }),
    ],
  widgets: [
    {
      widgetName: "resumeDownload",
      widgetFunc: () => (
        <a
          href="/resume.pdf"
          download="Sujal_Dusane_Resume.pdf"
          className="resume-link"
        >
          📄 Click to Download Resume
        </a>
      ),
    },

    {
        widgetName: "socialMediaLinks",
        widgetFunc: () => (
          <div className="social-media-widget">
            <a
              href="https://www.linkedin.com/in/sujal-dusane/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              🔹 LinkedIn
            </a>
            <a
              href="https://github.com/sujaldusane"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
            >
              🔹 GitHub
            </a>
          </div>
        ),
      },

      {
        widgetName: "helpOptions",
        widgetFunc: (props) => (
          <div className="chatbot-options">
            <button onClick={props.actionProvider.handleSkills}>🔹 What are Sujal’s skills?</button>
            <button onClick={props.actionProvider.handleResume}>📄 Can I download Sujal’s resume?</button>
            <button onClick={props.actionProvider.handleSocials}>🌐 Where can I connect with Sujal?</button>
            <button onClick={props.actionProvider.handleProjects}>
            🚀 Show me Sujal’s projects
          </button>
          </div>
        ),
      },


      {
        widgetName: "projectsWidget",
        widgetFunc: () => (
          <div className="chatbot-projects">
            <p>🚀 **Project 1: Plant disease prediction system**</p>
            <p>🔹 Built a deep learning-based web application using VGG16 and InceptionV3 models to detect plant diseases. Developed the front-end with HTML, CSS, and JavaScript, and integrated AI models for real-time disease identification.</p>
            <a
              href="https://github.com/sujaldusane"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
  
            <p>🚀 **Project 2: SkillPort**</p>
            <p>🔹 A skill-sharing platform developed using MERN stack to view and upload courses.</p>
            <a
              href="https://github.com/patilchirag2392/web_finalproject_group3"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on Github
            </a>
  
            <p>🚀 **Project 3: SafarNama**</p>
            <p>🔹 Android-based application developed using Java and android studio to guide tourists about the places they select based on location.</p>
            <a
              href="https://github.com/wassupsujall/SafarNama"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>

            <p>🚀 **Project 4: LearnTravia**</p>
            <p>🔹 Learning based application to help users prepare for their high-level competitive exams.</p>
            <a
              href="https://github.com/wassupsujall/LearnTravia"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on Github
            </a>


            <p>🚀 **Project 5: Missing person website**</p>
            <p>🔹 A website to find missing persons using python and machine learning.</p>
            <a
              href="https://github.com/wassupsujall/MissingPersonWebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on Github
            </a>

            <p>🚀 **Project 6: The GiftZone**</p>
            <p>🔹 An ecommerce website to buy gifts for your loved ones.</p>
            <a
              href="https://github.com/sujaldusane"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on Github
            </a>

            <p>🚀 **Project 7: Coding Bootcamp website**</p>
            <p>🔹 A website to learn coding and get certified, developed for Suvidha Foundation NGO</p>
            <a
              href="https://github.com/sujaldusane"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View on Github
            </a>
          </div>
        ),
      },
  ],
};
