import project1 from "../assets/projects/DeliveryFood.png";
import project2 from "../assets/projects/train-urself.png";
import project3 from "../assets/projects/summer.png";
import project4 from "../assets/projects/spotify.png";
import Hackathon1 from "../assets/hackathon/hackwave-hackathon.png";
import photo from './photo.jpg';
import { FaHome,FaGithub ,FaLinkedin,FaInstagram} from 'react-icons/fa';



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



export const HACKATHONS = [
  {
    year: "September - 2024",
    name: "HackWave Hackathon",
    image:Hackathon1,
    place: "Alger, Algeria",
    description: "We developed a Chrome extension that handles the three steps, from the first step of integrating SATIM's payment platform to the final step, improving the efficiency of validation by automating message management.",
    source: "https://github.com/yahyamati/hackwave2",
  },

];

export const PROJECTS = [
  {
    title: "DeliveryFood Website",
    image: project1,
    description: "An interactive platform for seamless food ordering and delivery. It offers users an easy way to browse menus, place orders, and track deliveries in real-time. The website provides a user-friendly interface for both customers and restaurant owners.",
    technologies: ["React.js", "Tailwind.css", "Express", "MongoDB"],
    source: "https://github.com/yahyamati/Delivery-food", 
    website: "https://delivery-food-frontend.onrender.com", 
  },
  {
    title: "TechChallenges Website",
    image: project2,
    description: "A web-based quiz application where users can test their knowledge across various topics. It offers a clean, interactive interface for taking quizzes, reading articles, and participating in CSS battles for an engaging learning experience.",
    technologies: ["React.js", "Tailwind.css", "Express","MongoDB"],
    source: "https://github.com/yahyamati/Quiz-app",
    website: "https://train-urself.onrender.com", 
  },
  {
    title: "Summarize Articles",
    image: project3,
    description: "Summzie is an AI-powered article summarizer that transforms lengthy articles into concise summaries. It extracts key insights from complex content, making reading easier and more efficient. The tool helps users quickly grasp essential information from any article.",
    technologies: ["React.js", "Tailwind.css", "GPT-4 API"],
    source: "https://github.com/yahyamati/Summarize_Articles_OpenAI-GPT-4",
    website: "https://summarize-articles-eight.vercel.app", 
  },
  {
    title: "Spotify",
    image: project4,
    description: "A Spotify-inspired playlist management app that lets users create, search, and organize playlists with a dynamic filtering system. Built with an intuitive UI for seamless music experience and persistent playlist storage.",
    technologies: ["React.js", "Tailwind.css", "Express", "MongoDB"],
    source: "https://github.com/yahyamati/Spotify",
    website: "https://spotify-app-2qc3.onrender.com", 
  },
];

