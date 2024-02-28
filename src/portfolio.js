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
  username: "Sunny Dhama",
  title: "Hi all, I'm Sunny",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/blackwolf08",
  linkedin: "https://www.linkedin.com/in/sunnydhama/",
  gmail: "dhamasunny98@gmail.com",
  gitlab: "https://gitlab.com/dhamasunny98",
  facebook: "https://www.facebook.com/beingsunnydhama",
  medium: "https://medium.com/@dhamasunny98",
  stackoverflow: "https://stackoverflow.com/users/10656906/sunny-dhama",
  instagram: "https://instagram.com/sunnydhama_",
  twitter: "https://twitter.com/sunny_dhama_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/uf-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Appointed as Graduate Research Assistant and and published 3 papers."
      // descBullets: [
      //   "Distributed Operating Systems Principles",
      //   "Database Management Systems",
      //   "Computer Network Security",
      //   "Advanced Data Structures and Algorithms",
      //   "Software Engineering",
      //   "Software Testing and Quality Assurance"
      // ]
    },
    {
      schoolName: "Jaypee Institute of Information Technology",
      logo: require("./assets/images/jiit-logo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2017 - May 2021",
      desc: "Ranked top 10% in the program. Published 2 research papers."
      // descBullets: [
      //   "Software Development Fundamentals",
      //   "Data Structures and Algorithms",
      //   "Object Oriented Programming",
      //   "Database Management Systems",
      //   "Operating Systems",
      //   "Computer Networks",
      //   "Web Technologies",
      //   "Software Engineering",
      //   "Web Security",
      //   "Mobile Application Development",
      //   "Artificial Intelligence",
      //   "Machine Learning"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "University of Florida",
      companylogo: require("./assets/images/uf-logo.png"),
      date: "October 2022 - Present",
      desc: "At the University of Florida, I contributed to a transformative educational platform project with a focus on middle school science, backed by a significant NSF grant. My role encompassed enhancing platform efficiency and pioneering real-time health metric sharing for sports via Flutter apps."
      // descBullets: [
      //   "Spearheaded the development and optimization of a React and Django-based educational platform, impacting over 100 students.",
      //   "Enhanced platform efficiency, achieving a 30% reduction in computation on virtual cores using Docker and ALB.",
      //   "Pioneered the use of Flutter applications for real-time health metric sharing, reducing smartwatch battery consumption by 22%."
      // ]
    },
    {
      role: "Software Engineer",
      company: "Scaler Academy",
      companylogo: require("./assets/images/scaler-logo.png"),
      date: "Feburary 2021 - August 2022",
      desc: "In my tenure at Scaler Academy, I led the creation of a React-based code editor and a novel JavaScript video streaming solution, directly contributing to increased user engagement and streamlined instructor workflows. My work also involved optimizing web performance and building scalable API solutions."
      // descBullets: [
      //   "Led the development of a React-based Monaco editor code editor, resulting in 7 million yearly code submissions.",
      //   "Engineered a JavaScript-based video streaming solution, enhancing user engagement by 50% and reducing instructor load.",
      //   "Optimized JavaScript and Webpack configurations, reducing dashboard load times significantly."
      // ]
    },
    {
      role: "Software Engineer Intern",
      company: "Remedico",
      companylogo: require("./assets/images/remedico-logo.png"),
      date: "May 2020 - August 2020",
      desc: "At Remedico, I improved the codebase by developing reusable React components and updating the Doctor's onboarding portal with React Native, focusing on UI enhancements and code efficiency."
      // descBullets: [
      //   "Developed reusable React components, reducing codebase by 30% and improving code quality.",
      //   "Modernized the Doctor's onboarding portal using React Native, enhancing user interface and experience."
      // ]
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/scaler-logo.png"),
      projectName: "Scaler Academy's Code Editor",
      projectDesc:
        "A web-based code editor for students to practice coding problems and submit their solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.interviewbit.com/problems/text-editor/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nlp4science-logo.png"),
      projectName: "NLP Based Educational Platform",
      projectDesc:
        "A transformative educational platform project with a focus on middle school science, backed by a significant NSF grant.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.nlp4science.org"
        }
      ]
    },
    {
      image: require("./assets/images/amby-logo.png"),
      projectName: "Amby",
      projectDesc:
        "An educational platform project with a focus on middle school science, to build AI chatbots with dialogflow.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amby.campdialogs.org"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Learn Student Ambassador",
      subtitle:
        "Selected as Microsoft Learn Student Ambassador for the year 2021-2022.",
      image: require("./assets/images/microsoft-logo.jpeg"),
      imageAlt: "Microsoft Learn Student Ambassador Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://studentambassadors.microsoft.com/certificate/80a87818-8f77-4bbd-8dc6-c39816e76256"
        }
      ]
    },
    {
      title: "DSC Lead",
      subtitle:
        "Appointed as DSC Lead for the year 2021-2022 at Jaypee Institute of Information Technology, Noida, India.",
      image: require("./assets/images/dsc-logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Events",
          url: "https://www.linkedin.com/posts/sunnydhama_dsc-gcp-google-activity-6585913450621480960-KIV0?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "Microsoft 'Week of AI' Participant",
      subtitle:
        "Participated in Microsoft 'Week of AI' and completed the course.",
      image: require("./assets/images/microsoft-logo.jpeg"),
      imageAlt: "Microsoft 'Week of AI' Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/86c17b4b-b581-402a-a6c9-0889c53c643f#gs.5gzh54"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "With scale React and React Native Web Apps",
      subtitle: "Build and Scale",
      event_url:
        "https://www.linkedin.com/posts/build-and-scale_webapps-react-reactnative-activity-6640689248817254400-PbJg?utm_source=share&utm_medium=member_desktop"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.youtube.com/embed/oCMFRl6a9t4"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-3523287352",
  email_address: "dhamasunny98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sunny_dhama_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
