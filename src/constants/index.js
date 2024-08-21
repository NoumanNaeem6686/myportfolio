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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  elevenpsychic,
  tripguide,
  trivia,
  rivelio,
  threejs,
  weticket,
  bft,
  devontix,
  devstring,
  bazaar,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Devontix Solutions",
    icon: devontix,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Collaborated with senior developers to design, develop, and deploy full-stack web applications, ensuring high performance and scalability",
      "Implemented RESTful APIs and integrated third-party services to enhance application functionality",
      "Assisted in debugging and resolving issues in existing applications, contributing to faster release cycles and improved code quality.",
      "Participated in code reviews and adhered to best practices in software development, including version control with Git",
      "Engaged in continuous learning to stay updated with the latest industry trends and technologies, contributing to the team’s innovation and development efficiency.",
    ],
  },
  {
    title: "Mern Stack Intern",
    company_name: "DevString Solutions",
    icon: devstring,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Assisted in the development and maintenance of web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) under the guidance of senior developers.",
      "Contributed to front-end development using React.js, building reusable components and ensuring responsive design across multiple devices.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Inventory Executive",
    company_name: "Bazaar Technologies",
    icon: bazaar,
    iconBg: "#383E56",
    date: "Oct 2021 - Aug 2023",
    points: [
      "Manage warehouse space for easier movement.",
      "Keep track of lots and serial numbers",
      "Focus on cycle counting.",
      "Knowledge of Process of Picking, QA and Loading.",
      "Strong coordination between Inbound and Picking team and also Outbond.",
      "Hands on experience with warehouse management software and databases.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "SoYummy Trivia",
    description:
      "Developed a dynamic Trivia Web Application with an Admin Dashboard for managing tournaments, questions, and customizable themes. Integrated secure authentication, points calculation, and protected routes, using Appwrite for the backend and Next.js for the responsive frontend.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AppWrite",
        color: "green-text-gradient",
      },
    ],
    image: trivia,
    source_code_link: "https://soyummy.com/trivia/",
  },
  {
    name: "Eleven Psychics",
    description:
      "Developed the Eleven Psychics Web App with Next.js, Node.js, MongoDB, and Redux Toolkit, featuring an Admin Dashboard for managing psychics and a User Frontend for astrology services. Integrated secure chat and voice call functionality, Stripe payments, and personalized user interaction tracking.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: elevenpsychic,
    source_code_link: "https://eleven-psychics-user-frontend.vercel.app/",
  },
  {
    name: "We Ticket",
    description:
      "Developed a ticket marketplace with an admin panel for managing event listings, categories, and transactions. Integrated seller ticket uploads, 5-minute purchase reservations, and secure payments via Stripe, with comprehensive admin controls for event and transaction management.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: weticket,
    source_code_link: "https://we-ticket-user-frontend.vercel.app/",
  },
  {
    name: "Rivelio",
    description:
      "Developed the Portoel website featuring a fully designed, responsive UI with advanced API integration for dynamic content and functionality. Implemented intuitive navigation, optimized loading speeds, and cross-browser compatibility to enhance user experience.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      // {
      //   name: "NodeJs",
      //   color: "pink-text-gradient",
      // },
    ],
    image: rivelio,
    source_code_link: "https://rivelio.it/",
  },
  {
    name: "Baby First Tv",
    description:
      "Developed the BabyFirst subscription platform using the Cleeng API, enabling seamless user authentication, plan selection, and secure payment processing. Optimized for usability and security, ensuring a smooth subscription experience for users",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Cleeng",
        color: "green-text-gradient",
      },
      // {
      //   name: "NodeJs",
      //   color: "pink-text-gradient",
      // },
    ],
    image: bft,
    source_code_link: "https://app.babyfirsttv.com/register/choose-plan/",
  },
];

export { services, technologies, experiences, testimonials, projects };
