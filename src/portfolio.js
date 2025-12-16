/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Prachi Varshney | Portfolio",
  description:
    "Full Stack Developer with experience in MERN stack, cloud technologies, and machine learning.",
  og: {
    title: "Prachi Varshney Portfolio",
    type: "website",
    url: "",
  },
};

// =======================
// HOME / GREETING
// =======================
const greeting = {
  title: "Hi, I'm Prachi Varshney 👋",
  logo_name: "PrachiVarshney",
  nickname: "",
  subTitle:
    "A passionate Full Stack Developer skilled in MERN stack,Cloud technologies, and ML. I enjoy building scalable web applications and solving real-world problems with efficient code.",
  resumeLink:
    "https://drive.google.com/file/d/1QTrLQb5-KmOKh7mFPvwy5sCRow7HUd5y/view",
  portfolio_repository: "",
  githubProfile: "https://github.com/Varhneyprachi",
};

// =======================
// SOCIAL MEDIA
// =======================
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Varhneyprachi",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/prachivarshney26",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:varshneyprachi26@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
  name: "LeetCode",
  link: "https://leetcode.com/u/Varshneyprachi/",
  fontAwesomeIcon: "simple-icons:leetcode",
  backgroundColor: "#FFA116",
},

];

// =======================
// SKILLS
// =======================
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using React.js",
        "⚡ Developing RESTful APIs with Node.js & Express",
        "⚡ Implementing secure authentication using JWT & Firebase",
        "⚡ Database design using MongoDB and SQL",
      ],
      softwareSkills: [
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5" },
        { skillName: "CSS3", fontAwesomeClassname: "fa-css3" },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript" },
        { skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react" },
        { skillName: "NodeJS", fontAwesomeClassname: "devicon-plain:nodejs-wordmark" },
        { skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb" },
      ],
    },
    {
      title: "Machine Learning Developer",
      fileName: "MLImg",
      skills: [
        "⚡ Building ML models using Python & Scikit-learn",
        "⚡ Data preprocessing & feature engineering",
        "⚡ Model evaluation & optimization",
        "⚡ Deploying ML models using Flask / FastAPI",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python" },
        { skillName: "TensorFlow", fontAwesomeClassname: "simple-icons:tensorflow" },
        { skillName: "Scikit Learn", fontAwesomeClassname: "simple-icons:scikitlearn" },
      ],
    },
    {
      title: "Cloud Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying applications on AWS & Azure",
        "⚡ Docker & containerization",
        "⚡ CI/CD pipelines using GitHub Actions",
        "⚡ Monitoring, scaling & cloud security",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws" },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker" },
        { skillName: "GitHub Actions", fontAwesomeClassname: "simple-icons:githubactions" },
      ],
    },
  ],
};
// Competitive Programming Sites (required by template)
const competitiveSites = {
  competitiveSites: [],
};


// =======================
// EDUCATION
// =======================
const degrees = {
  degrees: [
    {
      title: "Noida Institute Of Engineering and Technology",
      subtitle: "B.Tech in Information Technology",
      logo_path: "NIET.png",
      alt_name: "NIET Greater Noida",
      duration: "2022 - Present",
      descriptions: ["⚡ CGPA: 8.33", "⚡ Focus on Full Stack, Cloud & ML"],
      website_link: "",
    },
    {
      title: "Wisdom Public School, Aligarh",
      subtitle: "Intermediate & High School",
      logo_path: "download.png",
      alt_name: "Wisdom Public School",
      duration: "2019 - 2022",
      descriptions: ["⚡ Class 10th - 89%", "⚡ Class 12th - PCM (79%)"],
      website_link: "",
    },
  ],
};

// =======================
// CERTIFICATIONS
// =======================
const certifications = {
  certifications: [
    {
      title: "AI & Machine Learning",
      subtitle: "Certificate",
      logo_path: "AIML.png",
      certificate_link:
        "https://drive.google.com/file/d/1S9uBEena26IrYqlFSqpAp2ycMg89tJ9O/view",
      alt_name: "AI ML",
      color_code: "#6A5ACD",
    },
    {
      title: "CI / CD Pipeline",
      subtitle: "Certificate",
      logo_path: "CICD.png",
      certificate_link:
        "https://drive.google.com/file/d/1LiTc-9K5cardcV99rOqXKK_b0rsDrfkp/view",
      alt_name: "CI CD",
      color_code: "#FF8C00",
    },
    {
      title: "Full Stack Development",
      subtitle: "Certificate",
      logo_path: "fullstack.png",
      certificate_link:
        "https://drive.google.com/file/d/1HIY-ywno1PzBC0bW0l_XR_OPuQJWa2hT/view",
      alt_name: "Full Stack",
      color_code: "#20B2AA",
    },
    {
      title: "Object Oriented Programming (OOPS)",
      subtitle: "Certificate",
      logo_path: "oops.png",
      certificate_link:
        "https://drive.google.com/file/d/1IEVthghl1hLUjBKIXX-bNiWoT-4U-WCh/view",
      alt_name: "OOPS",
      color_code: "#DC143C",
    },
  ],
};

// =======================
// EXPERIENCE
// =======================
const experience = {
  title: "Experience",
  subtitle: "Internship & Project Work",
  description: "Hands-on experience in frontend and full-stack development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      work: true,
      experiences: [
        {
          title: "Frontend Developer Intern",
          company: "Freelance / Self Project",
          duration: "Jan 2024 – Mar 2024",
          location: "Remote",
          description: "Built responsive web applications and integrated REST APIs.",
          logo_path: "codesoft.png",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// =======================
// PROJECTS
// =======================
const projectsHeader = {
  title: "Projects",
  description: "Some of the projects I have built using modern technologies.",
  avatar_image_path: "projects_image.svg",
};

const projects = { data: [] };

// =======================
// CONTACT
// =======================
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PrachiPic.png",
    description:
      "Feel free to reach out for internships, full-time roles, or collaborations.",
  },
};

// =======================
// OPEN SOURCE (GITHUB)
// =======================
const openSource = {
  githubUserName: "Varhneyprachi",
  githubConvertedToken: btoa(
    ""
  ),
};
// =======================
// CODING PROFILES (DSA)
// =======================
const codingProfiles = {
  leetcode: {
    username: "prachivarshney", // CHANGE if needed
    profileLink: "https://leetcode.com/prachivarshney/",
    solved: "300+",
    streak: "50+ days", // optional, can remove
  },
  github: {
    username: "Varhneyprachi",
    profileLink: "https://github.com/Varhneyprachi",
  },
};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData,
  openSource,
  codingProfiles,
};
