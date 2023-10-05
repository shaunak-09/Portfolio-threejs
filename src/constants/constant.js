import {
    mobile,
    backend,
    creator,
    web,
    chatbot,
    javascript,
    typescript,
    html,
    css,
    ca,
    lth,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    ps,
    sql,
    tripguide,
    threejs,
    sf,
    nwp,
    spotify,
    profile,
    bookstore,
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
      title: "Content Creator",
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
      name: "Photoshop",
      icon: reactjs,
    },
    {
      name: "React JS",
      icon: ps,
    },
    {
      name: "SQL",
      icon: sql,
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
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  const expedu=[
  {
    title:"IIT KHARAGPUR",
    date:"2021-Present",
    subtitle:"Kharagpur, WB",
    body:"I am a third year undergrad student pursuing Mechanical Engineering at IIT KHARAGPUR",
  },
  {
    title:"HEMSHEELA",
    date:"2018-2020",
    subtitle:"Durgapur, WB",
    body:"I completed my plus 2 from Hemsheela Model School",
  },
  {
    title:"ST.VINCENTS ",
    date:"2007-2018",
    subtitle:"Asansol, WB",
    body:"I completed my primary schooling from St.Vincent's High and Technical School",
  }

  ]
  const expwork=[
    {
      title:"SEARCH-IN",
      subtitle:"Full Stack Intern",
      date:"Jun'23 - Aug'23",
      body1:"• Contributed to the seamless integration of an Admin Dashboard using ReactJS",
      body2:"• Contributed to the Frontend of Shopify Vendor, through seamless integration of Shopify API"

    },

    {
      title:"PEPCORNS",
      subtitle:"Full Stack Intern",
      date:"Mar'23 - Apr'23",
      body1:"• Developed NodeJS and SQL-based referral module, incorporating APIs, database schemas, and frontend integration",
      body2:"• Collaborated on AWS live server, using SSH for remote access",
    },
    {
      title:"SPRING FEST, IIT KHARAGPUR",
      subtitle:"Full Stack Developer",
      date:"Jul'22 - Apr'23",
      body1:"• Worked in a team of 14 members and built a Full-Stack game and 5 Frontend web apps, attracting 10K+ users for event registrations",
    }
  ]

  
  

  
  const projects = [
    {
      name: "Labyrinth",
      type:"Fullstack",
      description:
        "Treasure Hunt Game where you have to reach the correct location and scan the QR code to get the successive quesion",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "blue-yellow-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: lth,
      source_code_link: "https://github.com/shaunak-09/Labyrinth-backend",
    },
    {
      name: "Spring Fest",
      type:"Frontend",
      description:
       "Main Website of Spring Fest, IIT Kharagpur that was used by 10000+ users and received 8000+ registrations from all over India",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: sf,
      source_code_link: "http://sf-main-mobile.vercel.app/",
    },
    {
      name: "NWP ",
      type:"Frontend",
      description:
      "Website of the Nation Wide Prelims event that received 5000+ registrations and was held in 15+ cities in India",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nwp,
      source_code_link: "http://nwp-sigma.vercel.app/",
    },
    {
      name: "Camous Ambassador",
      type:"Frontend",
      description:
      "Website of Spring Fest to select campus ambassadors from colleges across India",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ca,
      source_code_link: "http://campus-ambassador.vercel.app/",
    },
    {
      name: "Spotify Clone ",
      type:"Frontend",
      description:
      "Clone Website of Spotify where you can play songs and filter them by top songs, top charts, artists and genres",

      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "blue-yellow-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/shaunak-09/Spotify-clone",
    },
    {
      name: "Profile",
      type:"Fullstack",
      description:
      "A website where user has to first login/signup to view the profile then the user can also update the profile. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },

        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: profile,
      source_code_link: "https://github.com/shaunak-09/clipher_school",
    },
    {
      name: "Chat-App",
      type:"Fullstack",
      description:
      "A website where user has to first login/signup, then it can chat with other active users. It can convert speech to text messages and received messages to speech",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },

        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/shaunak-09/Chatbot",
    },
    {
      name: "Blog-App",
      type:"Fullstack",
      description:
      "A blog website where user have to first login/signup and then create, read, update and delete blogs ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "blue-yellow-gradient",
        },

        {
          name: "scss",
          color: "pink-text-gradient",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Bookstore",
      type:"Frontend",
      description:
        "A bookstore website where you can search for any book and also select books by different Genre, with a Cart section where you can add and remove books ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Google Api",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/shaunak-09/bookstore-react",
    },
  ];
  
  export { services, technologies, projects, expedu, expwork };
  