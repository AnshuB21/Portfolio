import { nanoid } from "nanoid";
import {
  FaCloud,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaLeaf,
  FaReact,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 " />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-yellow-300" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "SpringBoot",
    icon: <FaLeaf className="h-16 w-16 text-green-900" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Database",
    icon: <FaDatabase className="h-16 w-16 text-yellow-900" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaCloud className="h-16 w-16 " />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
export const experience = [
  {
    id: nanoid(),
    title: "Graduate Teaching Assitant",
    company: "Georgia State University",
    date: "August 2024 - Present ",
    location: " Atlanta, USA",
    description:
      "GTA for Computer organization and programming, Theoretical Foundation of Computer Science. Graded quizzes, assignments, and exams, Guide students with their lab work, Communicate and guide students. ",
  },
  {
    id: nanoid(),
    title: "Analyst/ Software Engineer",
    company: "Capgemini Services limited, India",
    date: "December 2022 - June 2024",
    location: "Banglore, India",
    description:
      "Application Performance Enhancement: Worked with cross-functional teams to resolve critical issues in web applications, achieving a 10% improvement in load times and contributing to a seamless user experience.Continuous Integration & Project Tracking: Utilized Jenkins and JIRA to streamline deployment processes and track project progress, ",
  },
];
