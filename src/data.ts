import {
  BuildingIcon,
  CodeIcon,
  FolderKanbanIcon,
  GraduationCapIcon,
  SquareChevronRightIcon,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const projects = [
  {
    title: "DigiMenu",
    description:
      "DigiMenu is a digital menu for restaurants and cafes. It allows customers to view the menu and place orders from their own devices by scanning QR Code",
    links: ["https://github.com/amratansh12/digital-menu"],
  },
  {
    title: "LoopSocial",
    description:
      "LoopSocial is a social media platform that allows users to seamlessly interact with each other. It features profile customisation, post sharing, liking, and chat functionality",
    links: ["https://github.com/amratansh12/social-media-app"],
  },
  {
    title: "Medflow",
    description:
      "MedFlow is a medicine inventory management app that features role based functionality to helps users to purchase medicines and admins to manage the store and inventory",
    links: ["https://github.com/amratansh12/Techshila-2024"],
  },
  {
    title: "Fincar",
    description:
      "Fincar is a personal finance management app that helps users to track their expenses and income. It also features interactive charts to help users understand their spending habits",
    links: ["https://github.com/amratansh12/fincar"],
  },
  {
    title: "PDF-Analyser",
    description:
      "PDF-Analyser is a tool that helps users to extract text from PDF files and query the text using Natural Language Processing. It also features a web interface for easy access",
    links: ["https://github.com/amratansh12/PDF-Analyser"],
  },
  {
    title: "See more on GitHub",
    description: "Check out more projects on my GitHub profile",
    links: ["https://www.github.com/amratansh12"],
  },
];

export const about = [
  {
    question: "What is my alma mater?",
    answer: "IIT Roorkee (2025 Graduate)",
    icon: GraduationCapIcon,
  },
  {
    question: "What I do?",
    answer: "JavaScript based frameworks, REST APIs and more!",
    icon: CodeIcon,
  },
  {
    question: "What framework do I use?",
    answer: "ReactJS, NextJS, NodeJS, MongoDB, ExpressJS and more!",
    icon: SquareChevronRightIcon,
  },
  {
    question: "Had I worked on any projects?",
    answer: "Yes, more than five projects",
    icon: FolderKanbanIcon,
  },
  {
    question: "Had I worked with any company?",
    answer: "FYN Mobility, WNE3 and DraftAI",
    icon: BuildingIcon,
  },
];

export const companies = [
  {
    company: "FYN Mobility",
    description:
      "Worked as a Frontend Developer Intern. I was responsible for redesigning responsive webpages in ReactJS to improve user retention by 25%, developed companyws website and admin dashboard in NextJS to save 15+ management hours",
  },
  {
    company: "WNE3",
    description:
      "Worked as a Fullstack Developer Intern. I worked on developing secure routes and controllers with ExpressJS, integrated Qikink RestAPI to automate 200+ orders, and engineered responsive ReactJS pages, increasing user conversion rates",
  },
  {
    company: "DraftAI",
    description:
      "Worked as a React Developer Intern. I was responsible for integrating the OpenAI API to generate human-like text, developed a responsive ReactJS sidebar to query and analyze the generated text, and redesigned the sidebar to improve user experience",
  },
];

export const footerContacts = [
  {
    link: "https://www.linkedin.com/in/amratanshshrivastava",
    icon: FaLinkedinIn,
  },
  {
    link: "https://github.com/amratansh12",
    icon: FaGithub,
  },
  {
    link: "https://www.instagram.com/amratanx",
    icon: FaInstagram,
  },
  {
    link: "https://leetcode.com/u/ackerman1205/",
    icon: SiLeetcode,
  },
];
