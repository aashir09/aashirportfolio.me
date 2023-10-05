import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    Android,
    reactjs,
    redux,
    php,
    java,
    tailwind,
    dtx,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    web2,
    tesla,
    shopify,
    carrent,
    jobit,
    github,
    stackoverflow,
    facebook,
    linkedin,
    flipkart,
    tripguide,
    threejs,
    clang,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: creator,
    },
  ];
  
  const social = [
    {
      name:"Linked In",
      icon:linkedin,
      link: "https://www.linkedin.com/in/aashir-mansuri-83254b1a1/",
    },
    {
      name:"Github",
      icon:github,
      link: "https://github.com/aashir09",
    },
    {
      name:"Stack Overflow",
      icon:stackoverflow,
      link: "https://stackoverflow.com/users/22471643/aashir",
    }
  ];

  const technologies = [
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
      name: "C",
      icon: clang,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Android",
      icon: Android,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Angular.js Developer",
      company_name: "Digital Transformation Expert (DTX Services)",
      icon: dtx,
      iconBg: "#ffffff",
      date: "July 2022 - Sep 2022",
      points: [
        "Developing and maintaining web applications using Angular.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Integrating APIs into the frontend to enhance website functionality and user experience.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Krypt - Web 3.0 Blockchain Application",
      description:
        "With a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and much more, .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: web2,
      source_code_link: "https://github.com/aashir09/Web3.0",
    },
    {
      name: "Flipkart_clone",
      description:
        "Create  feature-rich web application that  users to explore an extensive array of product categories, including Electronics, Fashion, Mobile, and more. This dynamic platform should  allowing users to  add their desired items to their shopping cart.",       
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },  
      ],
      image:flipkart,
      source_code_link: "https://github.com/aashir09/Flipkart-clone-api",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects,social };