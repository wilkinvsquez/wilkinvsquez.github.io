import { Layout, Server, Terminal } from 'lucide-react';

export const skills = {
  en: [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      skills: ["Vue.js", "Angular", "React JS", "Ionic (React / Vue / Angular)","React Native", "Next.js","JavaScript", "TypeScript"]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express JS", "NestJS", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "CSS Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Bootstrap", "Material UI", "Chart.js", 'Tailwind CSS', "Naive UI","React Native Paper" ]
    },
    {
      category: "Tools & Others",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Git/GitHub", "Scrum/JIRA", "CI/CD", "Google Analytics", "JWT","Testing (Jest / Jasmine / Karma)", "Ajax/Axios"]
    }
  ],
  es: [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      skills: ["Vue.js", "Angular", "React JS", "Ionic (React / Vue / Angular)", "React Native", "Next.js", "JavaScript", "TypeScript" ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express JS", "NestJS", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "CSS Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Bootstrap", "Material UI", "Chart.js", "Socket.io", "Tailwind CSS", "Naive UI","React Native Paper", "React Native Elements"]
    },
    {
      category: "Herramientas y Otros",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Git/GitHub", "Scrum/JIRA", "CI/CD", "Google Analytics", "JWT","Testing (Jest / Jasmine / Karma)", "Ajax / Axios"]   
    }
  ]
};
