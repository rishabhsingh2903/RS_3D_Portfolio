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
    docker,
    Campify,
    Shoptaki,
    CabAnalysis,
    PennyCart,
    threejs,
    Jobstack,

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
      id:"resume",
      title:"Resume"
    }
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
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
      title: "Data Scientist",
      icon: creator,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer Intern",
      company_name: "Shoptaki",
      icon: Shoptaki,
      iconBg: "#383E56",
      date: "Oct 2023 - Mar 2024",
      points: [
        "Developed: Created API endpoints using Node.js and ArangoDB for the backend. Designed and developed the application’s front end using React Native, ensuring a smooth and intuitive user experience. Worked on the payment gateway integration for secure monetary transactions.",
        "Built: Engineered APIs to authenticate and authorize users, enhancing security and user management. Developed a robust payment gateway to facilitate secure transactions.",
        "Deployed: Utilized Docker for containerization, deploying the application on a Linux environment. Ensured efficient deployment of the entire application stack, including front end, back end, database, and OTP mailing server."
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Crayons Advertising PVT Ltd",
      icon:web,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Developed: Architected and executed highly effective targeted advertising campaigns, elevating the company’s brand recognition by an impressive 11% in the fiercely competitive Indian Subcontinent market.",
        "Built: Efficient data extraction and processing pipelines using Selenium and pandas, leading to a 25% reduction in data processing time and facilitating more accurate and timely decision-making.",
        "Deployed: Tableau for data visualization, creating visually compelling reports and interactive dashboards that allowed clients to gain valuable insights, resulting in a 40% increase in client engagement and retention."
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
      name: "JobStack",
      description:
        "Produced a user-friendly application to track job applications, integrating authentication and authorization using JSON Web Tokens (JWT) for secure user management.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: Jobstack,
      source_code_link: "https://rishabhsingh2903.github.io/JobStack_Frontend/",
    },
    {
      name: "PennyCart",
      description:
        "Created an innovative web platform to simplify grocery shopping, budgeting, and calorie monitoring. Spearheaded an impactful initiative that provided hands-on guidance to nearly 2000 university-going students, resulting in a substantial 24% decrease in grocery expenses by implementing effective budgeting strategies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: PennyCart,
      source_code_link: "https://github.com/rishabhsingh2903/PennyCart",
    },
    {
      name: "Campify",
      description:
        "Innovated a web application offering users access to over 50 camping locations in local area. Personalized accounts for 100+ users, and a search functionality leading to a 35% increase in camping bookings.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: Campify,
      source_code_link: "https://github.com/rishabhsingh2903/CAMPIFY",
    },
    {
      name: "Cab Analysis",
      description:
        "Analyzed geographical and cab-related information using Python and Tableau to address 10 research questions about pricing surges and consumer behavior in ride-sharing services.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tableau",
          color: "green-text-gradient",
        },
      ],
      image: CabAnalysis,
      source_code_link: "https://public.tableau.com/app/profile/rishabh.singh6026/viz/CabAnalysis_16823004881390/Dashboard1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
