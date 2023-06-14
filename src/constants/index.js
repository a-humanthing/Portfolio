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
  tripguide,
  leen,
  airwork,
  threejs,
  surf,
  hash,
  broto,
} from "../assets"

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
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
  {
    title: "SEO Analyst",
    icon: mobile,
  },
]

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
]

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Hash It Solutions",
    icon: hash,
    iconBg: "#fff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Brototype",
    icon: broto,
    iconBg: "#fff",
    date: "Jul 2022 - Jan 2023",
    points: [
      "By Self Learning Method Started Learning Mongodb, Node and React.",
      "Improved English Communication By Adding Speaking into Daily Routine",
      "Data Structures And Algorithms",
      "Learned How to Deploy a Full Projects from Scratch. ",
    ],
  },
]

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
]

const projects = [
  {
    name: "Leen Coffee",
    description:
      "Implemented Pixel Perfect UI for Leen coffee shop.Collaborated The Developement With UI/UX and Delivered Site With As Per Clients Wish",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "netlify",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: leen,
    source_code_link: "https://leencoffee.netlify.app/",
  },
  {
    name: "Airwork",
    description:
      "Web application that Designed for client Employee and Service Management.Made Easy by using Global States and Reusable Components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: airwork,
    source_code_link: "https://github.com/Hash-It-Solutions/Airwork_frontend/",
  },
  {
    name: "Surf",
    description:
      "Developed A Social Media Application with features like Chat,Post,Follower,Following etc.And Implementing a Local Service Search Engine In It.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: surf,
    source_code_link: "https://surf-7vpx.onrender.com",
  },
]

export { services, technologies, experiences, testimonials, projects }
