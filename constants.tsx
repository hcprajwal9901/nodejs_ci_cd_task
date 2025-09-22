
import type { Project } from './types';

export const PERSONAL_INFO = {
  name: "H C Prajwal",
  title: "Intern @ Elevate Labs",
  bio: "I'm a passionate intern specializing in building beautiful, functional, and scalable web applications with React, TypeScript, and modern web technologies. I love solving complex problems and creating exceptional user experiences.",
  email: "hcprajwal9901@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Virtual Mechanic an AI powered DIY car diagnostics/repair tool",
    description: " Built an Al-powered virtual mechanic that diagnoses common vehicle issues based on user inputs like text, sound, image, video analysis.  Integrated NLP models to interpret user queries and provide troubleshooting steps. Designed a responsive interface to simulate real-time vehicle fault detection and solutions ",
    image: "src/pics/vm.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    codeUrl: "https://github.com/hcprajwal9901/virtual_mechanic",
  },
  {
    id: 2,
    title: "Face recognition System for Home Security",
    description: "Developed a face recognition system for home security using computer vision techniques. Implemented real-time video processing and facial recognition through CCTV input with high accuracy.",
    image: "src/pics/fdsh.png",
    tags: ["PythonProgramming", "SQL", "OpenCV", "Yolo", "ArtificialIntelligence", "ComputerVision", "MachineLearning","training","DataVisualization"],
    liveUrl: "#",
    codeUrl: "https://github.com/hcprajwal9901/face_recognition_for_home_cctv",
  },
  {
    id: 3,
    title: "Deep Learning Approaches for Cyber Security in Network Intrusion Detection",
    description: "Implemented ensemble classifiers (KNN, CNN, Random Forest, XGBoost, CatBoost) to detect anomalies in computer networks.Designed and trained models for intrusion detection systems (IDS) achieving improved accuracy in identifying malicious traffic.Applied data preprocessing, model tuning, and evaluation techniques to boost system performance.",
    image: "src/pics/id.png",
    tags: ["PythonProgramming","MachineLearning", "KNN", "CNN", "DataVisualization", "CyberSecurity","RandomForest","XGBoost","CatBoost"],
    codeUrl: "https://github.com/hcprajwal9901/Major_project",
    liveUrl: "#"
  },
  {id: 4,
    title: "personal portfolio website",
    description: "Developed a personal portfolio website to showcase my projects and skills using React,NodeJS, TypeScript, and Tailwind CSS.",
    image: "src/pics/pp.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Web Development"],
    liveUrl: "#",
    codeUrl: "https://github.com/hcprajwal9901/nodejs_ci_cd_task"}
];
export const SKILLS = [
  "PythonProgramming","SQL","NoSQL","postgreSQL",
  "DataStructures & Algorithms",
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5 & CSS3",,
  "REST APIs",
  "Git & GitHub",
  "UI/UX Design",
  "artificialIntelligence",
  "ComputerVision",
  "MachineLearning",
  "DataVisualization",
  "DeepLearning",
  "NLP",
  "CI/CD",
  "PowerBi",
  "MSExcel",
  "MSPowerPoint",
  "MSWord",
];

export const SOCIAL_LINKS = {
    github: "https://github.com/hcprajwal9901",
    linkedin: "https://www.linkedin.com/in/h-c-prajwal-b063b024b/"
};

export const ICONS = {
    github: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    externalLink: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    )
}
