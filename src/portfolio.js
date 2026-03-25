/* Change this file to get your personal Porfolio */
import github from "../src/assets/images/github.png";
import leetcode from "../src/assets/images/leetcode.png";
import lpu_logo from "../src/assets/images/lpu_logo.png";
import nptel from "../src/assets/images/nptel_logo.png";
import coursera from "../src/assets/images/coursera_logo.png";
import cipher from "../src/assets/images/cipher_logo.png";
import libgen from "../src/assets/images/libgen.png";
import netpay from "../src/assets/images/netpay.png";
import multicore from "../src/assets/images/multicore.png";
// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ayush's Portfolio",
  description:
    "A passionate full-stack developer who enjoys building end-to-end products, designing scalable systems, and delivering sustainable technical solutions that create real-world impact.",
  og: {
    title: "Ayush Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ayush Singh",
  logo_name: "AyushSingh",
  nickname: "",
  subTitle:
    "A passionate full-stack developer who enjoys building end-to-end products, designing scalable systems, and delivering sustainable technical solutions that create real-world impact.",
  resumeLink:
    "https://drive.google.com/file/d/11-EBaNTusMLjdBbRdtO8LIN8YMqGdQoD/view?usp=sharing",
  portfolio_repository: "https://github.com/SINGHAYUSH24/Portfolio",
  githubProfile: "https://github.com/SINGHAYUSH24",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SINGHAYUSH24",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayush-singh123",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ayushsingh123102@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly interactive user interfaces for web applications",
        "⚡ Building responsive website front ends using React and Redux",
        "⚡ Creating scalable application backends using Node.js, Express, and Spring Boot",
        "⚡ Writing efficient database queries and optimizing data retrieval using PostgreSQL and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Designing and implementing CI/CD pipelines using Docker for containerization and GitHub Actions for automated builds and testing",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#323754",
      },
      profileLink: "https://github.com/SINGHAYUSH24",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Ael61SVNNu/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "Lovely Professional University, Phagwara",
      subtitle: "B.Tech. in Computer Science And Engineering",
      logo_path: lpu_logo,
      alt_name: "LPU Phagwara",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Strong foundation in core computer science subjects including Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence.",
        "⚡ Specialized in Full-Stack Web Development, with additional focus on Cloud Computing and DevOps as part of elective coursework.",
        "⚡ Consistently maintained a high academic performance with a CGPA of ~9.0 across all semesters.",
      ],
      website_link: "http://www.lpu.in",
    },
  ],
};
const achievementSection = {
  title: "Activities",
  subtitle: "Some of my Recent Achievments/Contributions",
  achivementsCards: [
    {
      title: "GitHub Contributions",
      subtitle: "",
      image: github,
      footerLink: [
        {
          name: "View Profile",
          url: "https://github.com/SINGHAYUSH24",
        },
      ],
    },
    {
      title: "LeetCode",
      subtitle: "",
      image: leetcode,
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/u/Ael61SVNNu/",
        },
      ],
    },
  ],
};
const certifications = {
  certifications: [
    {
      title: "Cloud Computing",
      subtitle: "- NPTEL",
      logo_path: nptel,
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S135870058510402621.pdf",
      alt_name: "NPTEL",
      color_code: "#8C151599",
    },
    {
      title: "Fundamentals of Network Communications ",
      subtitle: "- Coursera",
      logo_path: coursera,
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6EU66I5JA9LD",
      alt_name: "Certificate",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      subtitle: "-Coursera",
      logo_path: coursera,
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7V80IJUDDQ1V",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },{
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "-Coursera",
      logo_path: coursera,
      certificate_link:"https://coursera.org/verify/ZTUHSN0MHU4X",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "MERN STACK WEB DEVELOPMENT ",
      subtitle: "- CipherSchools",
      logo_path: cipher,
      certificate_link:
        "https://www.cipherschools.com/certificate/preview?id=687f73b97efd6d5090704916",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My expertise lies in creating scalable web application-based projects and deploy them over Internet using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};
const projects = {
  projectList: [
    {
      status: "Completed",
      version: "V 1.2.2",
      title: "LibGen",
      subtitle:
        "A Centralized Hub for Storing and Retrieving Library Resources",
      skills: [
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "RestAPI",
        "Tailwind",
      ],
      features: [
        "Advanced book search by title, author, or category with instant results",
        "Role-based access for admins and users with secure authentication",
        "Seamless book issuing and return system with real-time availability tracking",
        "Centralized database management for books, users, and transaction history",
      ],
      github: "https://github.com/SINGHAYUSH24/LibGen",
      liveLink: "https://libgen-rouge.vercel.app/",
      imagesrc: libgen
    },
    {
      status: "Ongoing",
      version: "V 1.0.1",
      title: "NetPay",
      subtitle:
        "An Internet Based Banking and Fund Transfer Web Application",
      skills: [
        "React.js",
        "SpringBoot",
        "JavaScript",
        "PostgreSQL",
        "Rest API",
        "Tailwind",
      ],
      features: [ "Secure money transfer simulation via account number, mobile number, and UPI ID with transaction PIN verification",
"Real-time balance updates and transaction history tracking across multiple user-created accounts",
"QR code-based payment system for quick and seamless transactions using integrated scanner functionality",
"Comprehensive dashboard with account management, transaction insights, and multi-account support"
        
      ],
      github: "https://github.com/SINGHAYUSH24/Virtual_Banking",
      liveLink: "https://libgen-rouge.vercel.app/",
      imagesrc: netpay
    },
    {
      status: "Completed",
      version: "V 1.0.1",
      title: "Multicore Scheduler",
      subtitle:
        "A Web Based Multicore Process Scheduler",
      skills: [
        "HTML",
        "JavaScript",
        "Operating System",
        "Data Structures",
        "Tailwind",
      ],
      features: [ "Designed and developed a web-based multicore CPU scheduling simulator to model task execution, priority-based scheduling, and core utilization.",
        "Added dynamic task preemption, automatic task reassignment on idle cores, and Gantt chart visualization for  execution analysis.",
        "Improved scheduling efficiency using optimized data structures such as Binary Trees and Max Heaps for storing running and preempted tasks. ",
        "Implements Priority-based Preemtive Scheduling"
      ],
      github: "https://github.com/SINGHAYUSH24/Multicore_Scheduler",
      liveLink: "https://singhayush24.github.io/Multicore_Scheduler/",
      imagesrc: multicore
    }
  ],
};
const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with FullStack,AI,Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Phagwara,Kapurthala, Punjab , India 144411",
    locality: "Phagwara",
    country: "INDIA",
    region: "Punjab",
    postalCode: "144411",
    streetAddress: "Chehuru",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Y4UprTEZC4rxa8PYA",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 7007471499",
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
  achievementSection,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
