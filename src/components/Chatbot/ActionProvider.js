export class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }



    showHelpOptions() {
        const message = this.createChatBotMessage(
          "Here are some things I can help you with:",
          {
            widget: "helpOptions",
          }
        );
        this.updateChatbotState(message);
      }
      

      handleProjects = () => {
        const message = this.createChatBotMessage(
          "Here are some of Sujal’s projects:",
          {
            widget: "projectsWidget",
          }
        );
        this.updateChatbotState(message);
      };
      


      handleResume = () => {
        const message = this.createChatBotMessage(
          "You can download Sujal's resume here:",
          {
            widget: "resumeDownload",
          }
        );
        this.updateChatbotState(message);
      };
      
      handleSocials = () => {
        const message = this.createChatBotMessage(
          "You can connect with Sujal here:",
          {
            widget: "socialMediaLinks",
          }
        );
        this.updateChatbotState(message);
      };

      handleSkills = () => {
        const message = this.createChatBotMessage(
          "Sujal is skilled in:\n- Web Development 🌍\n- UI/UX Design 🎨\n- Full-Stack Development 🔥\n- Software development 🏗️"
        );
        this.updateChatbotState(message);
      };

      showSkills() {
        const message = this.createChatBotMessage(
          "Sujal is skilled in:\n- Web Development 🌍\n- UI/UX Design 🎨\n- Full-Stack Development 🔥\n- Software development 🏗️"
        );
        this.updateChatbotState(message);
      }


    showSocialMedia() {
        const message = this.createChatBotMessage(
          "You can connect with Sujal here:",
          {
            widget: "socialMediaLinks",
          }
        );
        this.updateChatbotState(message);
      }
      

    showResume() {
        const message = this.createChatBotMessage(
          "Sure! You can download Sujal's resume here: ",
          {
            widget: "resumeDownload",
          }
        );
        this.updateChatbotState(message);
      }


    faqResponse(question) {
        const faq = {
          "what is your name": "I'm PortfolioBot, your personal assistant!",
          "who made you": "I was built by Sujal Dusane! 🚀",
          "what can you do": "I can assist you with information about Sujal's portfolio, projects, skills, and more!",
          "how can I contact Sujal": "You can reach Sujal via email at dusane.s@northeastern.edu 📧"
        };
      
        const response = faq[question.toLowerCase()] || "I'm not sure, but I'm learning every day!";
        const message = this.createChatBotMessage(response);
        this.updateChatbotState(message);
      }
      

    greetUser() {
        const hours = new Date().getHours();
        let greeting = "Hello!";
      
        if (hours < 12) {
          greeting = "Good morning! ☀️ How can I assist you today?";
        } else if (hours < 18) {
          greeting = "Good afternoon! 🌤️ Need any help?";
        } else {
          greeting = "Good evening! 🌙 How can I assist you?";
        }
      
        const message = this.createChatBotMessage(greeting);
        this.updateChatbotState(message);
      }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.updateChatbotState(message);
    }
  
    defaultResponse() {
      const message = this.createChatBotMessage("I'm not sure, but I can help!");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  