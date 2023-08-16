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
  baeride,
  eco,
  a2z,
  themis,
  foodie,
  acedemia,
  jobit,
  tripguide,
  threejs,
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
    title: "UI-UX Designer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
    title: "React.js Developer",
    company_name: "Eko-Exchange",
    icon: starbucks,
    iconBg: "#fabed7",
    date: "June 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "BaeRide",
    icon: tesla,
    iconBg: "#fabed7",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Transferring the design from figma to flutter.",
      "Collaborating with cross-functional teams including designers, backend developers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "pushing the code to playstore for android users and to appstore for ios users",
    ],
  },
  {
    title: "Web Developer",
    company_name: "a2z",
    icon: shopify,
    iconBg: "#fabed7",
    date: "nov 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, Tailwind and Node.js",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality Website.",
      "Implementing responsive design and converting the app to a progressive web app (PWA)",
      "Hosting the applications and using feedback from customers to improve the application",
    ],
  },
  // {
  //   title: "UI/UX Designer",
  //   company_name: "Foodie",
  //   icon: meta,
  //   iconBg: "#fabed7",
  //   date: "June 2023 - Present",
  //   points: [
  //     "Using explanations from the client and a few sample to bring out the design.",
  //     "Showing the design to the client to get feedback from him so we can use the feedback to improve the design",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Colloborating with other designers when necessary.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful and functional as our product, but Omj proved me wrong.",
    name: "Martini Bricks",
    designation: "Manager",
    company: "BaeRide",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Omj does. Thumbs up Bro",
    name: "Mercy David",
    designation: "COO",
    company: "a2z",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After omj redesigned and optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "kelvin D kelvin",
    designation: "CT0",
    company: "Foodie",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BaeRide",
    description:
      "Web/Mobile-based platform that allows users to search, book, and order rides from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: baeride,
    source_code_link: "https://baeride.com/",
  },
  {
    name: "EkoExchange",
    description:
      "Web application that enables users to exchange, lend and swap cryptocurrency with very little or no charge. It has a p2p section where different users meet and intereact ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://eko-exchange.netlify.app/",
  },
  {
    name: "a2z",
    description:
      "a2z is a cutting-edge mobile application that brings the convenience and vast selection of products right to your fingertips. Discover a seemingly endless array of products ranging from food, gadgets, clothes. e.t.c. ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: a2z,
    source_code_link: "https://a2z.com.ng/",
  },
  {
    name: "Themis App",
    description:
      "Themis App is a revolutionary mobile application designed to streamline the process of connecting lawyers and clients. It provides a convenient and efficient platform for both parties to meet and collaborate.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: themis,
    source_code_link:
      "https://www.figma.com/file/la4X8mimMTE69xUDYPSHU6/Themis-app?type=design&node-id=0-1",
  },
  {
    name: "Foodie",
    description:
      "Foodie is a game-changing mobile app that brings a delectable variety of cuisines right to your doorstep Whether you're craving your favorite comfort food or simply seeking a quick and convenient meal.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link:
      "https://www.figma.com/file/krQd9boJerDweQEv0WCjP3/food-delivery-app?type=design&node-id=0-1",
  },
  {
    name: "Acedemia",
    description:
      "Acedemia is a revolutionary mobile application designed to enhance the learning experience for students. Students can access a vast library of lectures and course materials and interact with instructors",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: acedemia,
    source_code_link:
      "https://www.figma.com/file/tGWRTzxZ97CPaDSFPq2nXj/Academia-Team-work?type=design&node-id=0-286",
  },
];

export { services, technologies, experiences, testimonials, projects };
