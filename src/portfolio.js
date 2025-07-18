/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dharani Aningi",
  title: "Hi All, I'm Dharani Aningi",
  subTitle: emoji(
    " 🚀  Data & Business Analyst with expertise in Machine Learning 🤖 and data analytics 📊, with experience building scalable data pipelines 🔄, insightful dashboards 📈, and LLM-powered healthcare tools 🏥. Dedicated to transforming data into actionable insights 💡 that drive impactful decisions."
  ),
  resumeLink: "http://localhost:3000/Resume_DharaniAningi.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dharani2805",
  linkedin: "https://www.linkedin.com/in/dharanianingi/",
  gmail: "dharani.aningi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Data & Business Analyst passionate about solving real-world problems using AI, analytics, and agile execution",
  skills: [
    emoji(
      "⚡ Building scalable ETL pipelines and automating data workflows using Python, SQL, BigQuery, and AWS"
    ),
    emoji(
      "⚡ Creating interactive dashboards and KPIs using Tableau and Power BI to drive business insights"
    ),
    emoji(
      "⚡ Applying Machine Learning, Generative AI, and LLMs in fraud detection and healthcare analytics"
    ),
    emoji(
      "⚡ Gathering requirements, conducting impact analysis, and leading sprint planning in Agile projects"
    ),
    emoji(
      "⚡ Streamlining operations with tools like ServiceNow, Tivoli Work Scheduler, and Rational Team Concert"
    )
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-pie"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "GCP", fontAwesomeClassname: "fab fa-google"},
    {skillName: "LLMs", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "ServiceNow", fontAwesomeClassname: "fas fa-tools"},
    {
      skillName: "Tivoli Scheduler",
      fontAwesomeClassname: "fas fa-calendar-check"
    },
    {
      skillName: "Rational Team Concert",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {skillName: "Agile/Scrum", fontAwesomeClassname: "fas fa-users-cog"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "San Jose State University",
      logo: require("./assets/images/SJSULogo.png"),
      subHeader: "Master of Science in Data Analytics",
      duration: "August 2022 – May 2024",
      desc: "Relevant Coursework: Data Mining, Big Data Technologies, Statistics, Data Warehousing, Data Visualization, Deep Learning, NLP, and Machine Learning."
    },
    {
      schoolName: "GITAM University",
      logo: require("./assets/images/gitamLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2013 – May 2017",
      desc: "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Web Technologies, and Software Engineering."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Analytics & Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "85%"
    },
    {
      Stack: "ETL / ELT & Data Pipelines",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Platforms (AWS, GCP, Azure)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Python, SQL, R)",
      progressPercentage: "90%"
    },
    {
      Stack: "BI Tools (Tableau, Power BI, Looker)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Analyst II",
      company: "Mark Infotech Inc",
      companylogo: require("./assets/images/markinfotechLogo.png"), // Replace with actual logo
      date: "Aug 2024 – Present",
      desc: "Optimized fraud detection workflows, delivered interactive Tableau dashboards, and collaborated cross-functionally to define KPIs and drive business decisions.",
      descBullets: [
        "Automated processes using SQL and Excel, cutting manual efforts by 40%",
        "Created 25+ dashboards improving CRM and data warehouse workflows by 30%",
        "Boosted decision-making by 35% via effective stakeholder collaboration"
      ]
    },
    {
      role: "Senior Business Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.png"), // Replace with actual logo
      date: "May 2017 – Jul 2022",
      desc: "Led DevOps automation, strategic healthcare reporting, sprint planning, and change request management to enhance performance and delivery.",
      descBullets: [
        "Implemented Jenkins-based DevOps strategy with 99.9% data accuracy",
        "Designed healthcare dashboards using Tableau and Power BI for AI-driven forecasting",
        "Created user stories and wireframes for healthcare claims processing",
        "Prioritized 300+ change requests in ServiceNow across five environments"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "HCLTech",
      companylogo: require("./assets/images/hcltechLogo.png"), // Make sure this image exists
      date: "Jan 2016 – Jan 2017",
      desc: "Worked on Customer Relationship Management (CRM) systems and Salesforce to support data-driven decisions and client solutions.",
      descBullets: [
        "Developed reports and dashboards in Salesforce for CRM insights",
        "Assisted in data cleaning, validation, and transformation for internal reporting",
        "Collaborated with cross-functional teams to improve customer experience analytics"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "AI, Data Analytics, and Real-World Problem Solving",
  projects: [
    {
      image: require("./assets/images/graphRagLogo.png"), // Replace with actual image
      projectName: "LLM Medical Knowledge Graph",
      projectDesc:
        "Built a real-time AI platform using Large Language Models (Mistral, GPT-4), semantic ontologies, and GraphRAG with ChromaDB & Neo4j to enhance medical decision-making by 30%.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Dharani2805/Graph_RAG"
        }
      ]
    },
    {
      image: require("./assets/images/sentimentAnalysisLogo.png"), // Replace with actual image
      projectName: "Cyberbullying Classifier",
      projectDesc:
        "Developed a text classification system using BERT, GRU, LSTM achieving 97% accuracy. Implemented advanced sentiment analysis with Word2Vec and solved complex data transformation challenges.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Dharani2805/Sentiment_Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/fireDeptLogo.png"), // Replace with actual image
      projectName: "Fire Department Analytics",
      projectDesc:
        "Analyzed over 6M emergency records for San Francisco Fire Department. Improved emergency response times by 20% and enhanced public safety insights using AWS and Tableau.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Dharani2805/BigDataProject_228"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Achievements🏆 "),
  subtitle:
    "Credentials, recognitions, and milestones that highlight my career journey.",
  achievementsCards: [
    {
      title: "SAFe® 6.0 Product Owner & Product Manager",
      description:
        "Certified SAFe® POPM, specializing in Agile Product Management."
    },
    {
      title: "Lean Six Sigma Foundations",
      description: "PMI Certified - Foundations in Lean Six Sigma."
    },
    {
      title: "Six Sigma Green Belt",
      description: "PMI & IIBA Certified Green Belt for process improvement."
    },
    {
      title: "Microsoft Certified: Career Essentials in Data Analysis",
      description:
        "Issued by Microsoft and LinkedIn for demonstrating proficiency in data analysis fundamentals, including Excel, Power BI, and data storytelling."
    },
    {
      title: "ServiceNow IT Leadership Professional Certificate",
      description:
        "Issued by ServiceNow in Jan 2025 for demonstrating leadership in IT management practices."
    },
    {
      title: "Generative AI and Large Language Models on AWS",
      description:
        "Issued by AWS for completing hands-on training on building and deploying LLMs using AWS services."
    },
    {
      title: "Microsoft Certified: Career Essentials in Generative AI",
      description:
        "Issued by Microsoft and LinkedIn for foundational knowledge in Generative AI concepts and tools."
    },

    {
      title: "IDC Pinnacle Award",
      description: "Awarded for outstanding performance in April 2022."
    },
    {
      title: "Star of the Month",
      description: "Recognized for exceptional contributions in November 2021."
    },
    {
      title: "Star of the Month",
      description: "Recognized for outstanding performance in December 2021."
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji(
    "💬 Feel free to reach out for 🤝 collaboration, ❓ questions, or 🌟 opportunities. I'm actively looking for full-time and contract roles. Always open to connecting! 😊"
  ),
  number: "+1-408-505-6794",
  email_address: "dharani.aningi@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
