import React from "react";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    ai,
    event,
    webdev,
    powerbi,
    excel,
    expressjs,
    mysql,
    blog,
    hireline,
    python,
    nextjs,
    Cpp,
    Appwrite,
    supabase,
    postman,
    NotaAi

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
    const Frontend = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name:'Python',
      icon: python
    },
    {
      name: "Cpp",
      icon: Cpp

    }

   
  ];

 const backendd = [
    
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name:"Express js",
        icon: expressjs
      },
      {
        name:'Mysql',
        icon: mysql
      },
      {
        name: "Appwrite",
        icon: Appwrite,
      },
      {
        name: "Supabase",
        icon: supabase,
      }
    
  ]  

  const tools=[
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Powerbi",
      icon: powerbi,
    },
    {
      name:"Excel",
      icon: excel,
    },
    {
      name: "Postman",
      icon: postman,
    }

  

  ]
  const experiences = [
    {
      title: "Web Developer",
      icon:webdev,
      iconBg: "#383E56",
      points: [
          "Over 1 year of experience in web development.",
          "Designed multiple websites and crafted UI for the frontend.",
          "Gained comprehensive knowledge of backend development.",
          "Currently learning AI and ML to implement in full-stack projects.",
      ],
    },
    {
      title: "Events & Social Network",
      icon:event,
      iconBg: "#383E56",
        points: [
            "Attended various events like Kotlin, The Ace, Innova, and Dev Con.",
            "Gained valuable networking opportunities by interacting with professionals.",
            "Expanded my knowledge through discussions with experienced individuals.",
            "Learned about the latest trends and advancements in technology.",
            "Built strong connections to enhance professional growth."
      ],
    },
   
    {
      title: "AI & ML",
      icon:ai,
      iconBg: "#383E56",
      points: [
          "Started diving into artificial intelligence and machine learning.",
          "Possess advanced knowledge of Python programming.",
          "Currently learning AI/ML concepts to integrate into real-world projects."
      ],
    },
  ];
  

  
  const projects = [
    {
      name: " Blogverse",
      description:
       "Welcome to Blogverse, a modern and interactive blogging platform where users can create, edit, and delete their own blogs. Built with React for the frontend and Appwrite Cloud for the backend, Blogverse ensures a smooth user experience with cutting-edge features like authentication, database management, and rich text editing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite Cloud",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/adithyarana/BlogVerse",
      liveLink:"https://blog-verse-eta.vercel.app/"
    },
    {
      name: "HireLine",
      description:
        "Welcome to Hireline, a modern job portal website that bridges the gap between job seekers and recruiters. This platform allows candidates to apply for jobs and recruiters to post job openings seamlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "clerk",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcnUI",
          color: "green-text-gradient",
        },
        {
          name: "Node js",
          color: "pink-text-gradient",
        },
        {
          name: "Supabase",
          color: "blue-text-gradient",
        },
      ],
      image: hireline,
      source_code_link: "https://github.com/adithyarana/HireLine-JobPortol-",
      liveLink:"https://adithyarana.vercel.app/"
    },
    {
      name: "Nota AI",
      description:
      "Your AI-Powered Note-Taking Assistant Nota AI is an intelligent note-taking application that leverages AI to help you create, edit, and enhance your notes effortlessly. With features like AI-powered summaries, text formatting, and easy content organization, Nota AI transforms your raw ideas into well-structured and visually appealing notes.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "clerk",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcnUI",
          color: "green-text-gradient",
        },
        {
          name: "Node js",
          color: "pink-text-gradient",
        },
        {
          name: "convex DB",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini API",
          color: "blue-text-gradient",
        },
        {
          name: "LangChain",
          color: "blue-text-gradient",
        },
      ],
      image:  NotaAi,
      source_code_link: "https://github.com/adithyarana/Nota-AI",
      liveLink:"https://nota-ai.vercel.app/"
    },
  
  ];




  
  export { services, experiences, projects , Frontend , backendd , tools  };