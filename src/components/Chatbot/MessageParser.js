export class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      const faqQuestions = ["what is your name", "who made you", "what can you do", "how can I contact Sujal"];


      window.addEventListener("askSkills", () => {
        document.dispatchEvent(new CustomEvent("chatbot-message", { detail: "skills" }));
      });
      
      window.addEventListener("askResume", () => {
        document.dispatchEvent(new CustomEvent("chatbot-message", { detail: "resume" }));
      });
      
      window.addEventListener("askSocials", () => {
        document.dispatchEvent(new CustomEvent("chatbot-message", { detail: "linkedin" }));
      });
      
      
      



      if (message.toLowerCase().includes("resume")) {
        this.actionProvider.showResume();
      }

      else if (message.toLowerCase().includes("skills")) {
        this.actionProvider.showSkills();
      }
      
  
      else if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello")) {
        this.actionProvider.greetUser();
      }
      else if (faqQuestions.some(q => message.toLowerCase().includes(q))) {
        this.actionProvider.faqResponse(message);
      }
      
      else if (message.toLowerCase().includes("linkedin") || message.toLowerCase().includes("github")) {
        this.actionProvider.showSocialMedia();
      }
      else {
        this.actionProvider.defaultResponse();
      }



    }
  }
  