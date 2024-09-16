import project1 from "../assets/projects/DeliveryFood.png";
import project2 from "../assets/projects/train-urself.png";
import project3 from "../assets/projects/summer.png";
import project4 from "../assets/projects/spotify.png";
import photo from './photo.jpg';
import { FaHome,FaGithub ,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { Target } from "lucide-react";


export const assets = {
  photo,
};



export const DATA = {
  navbar: [
    { href: "#about", icon: FaHome, label: "Home" },
  ],
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yahyamati/",
        icon: FaGithub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yahya-mati-265381298/",
        icon: FaLinkedin,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/mati_yahia/",
        icon: FaInstagram,
      },
    },
  
};



export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "DeliveryFood Website",
    image: project1,
    description: "An interactive platform for seamless food ordering and delivery. It offers users an easy way to browse menus, place orders, and track deliveries in real-time. The website provides a user-friendly interface for both customers and restaurant owners.",
    technologies: ["React.js", "Tailwind.css", "Node.js", "Express", "MongoDB"],
    source: "https://github.com/yahyamati/ecommerce-website", 
    website: "https://delivery-food-frontend.onrender.com", 
  },
  {
    title: "TechChallenges Website",
    image: project2,
    description: "A web-based quiz application where users can test their knowledge across various topics. It offers a clean, interactive interface for taking quizzes, reading articles, and participating in CSS battles for an engaging learning experience.",
    technologies: ["React.js", "Tailwind.css", "Node.js", "Express","MongoDB"],
    source: "https://github.com/yahyamati/ecommerce-website",
    website: "https://train-urself.onrender.com", 
  },
  {
    title: "Summarize Articles",
    image: project3,
    description: "Summzie is an AI-powered article summarizer that transforms lengthy articles into concise summaries. It extracts key insights from complex content, making reading easier and more efficient. The tool helps users quickly grasp essential information from any article.",
    technologies: ["React.js", "Tailwind.css", "GPT-4 API"],
    source: "https://github.com/yahyamati/ecommerce-website",
    website: "https://summarize-articles-eight.vercel.app", 
  },
  {
    title: "Spotify",
    image: project4,
    description: "A Spotify-inspired playlist management app that lets users create, search, and organize playlists with a dynamic filtering system. Built with an intuitive UI for seamless music experience and persistent playlist storage.",
    technologies: ["React.js", "Tailwind.css", "Node.js", "Express", "MongoDB"],
    source: "https://github.com/yahyamati/ecommerce-website",
    website: "https://spotify-app-2qc3.onrender.com", 
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
