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
  Python,
  R,
  SAS,
  QGIS,
  Flask,
  EyeLevel,
  Mahogani,
  CuppaTwo,
  twoStar,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
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
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DataScientist",
    icon: backend,
  },
  {
    title: "Backend Dev",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flask",
    icon: Flask,
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
    name: "github",
    icon: github,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "python",
    icon: Python,
  },
  {
    name: "SAS",
    icon: SAS,
  },
  {
    name: "QGIS",
    icon: QGIS,
  }
];

const experiences = [
  {
    title: "Internship",
    company_name: "Waiting for your company impeccable offer :D",
    icon: twoStar,
    iconBg: "#e0e0e0",
    date: "April 2024 - August 2024 (Expected)",
    points: [
    ],
  },
  {
    title: "Mathematics Teacher",
    company_name: "Eye Level Learning",
    icon: EyeLevel,
    iconBg: "#e0e0e0",
    date: "Jan 2021 - Dec 2023",
    points: [
      "Teach students from ages 4-14 in math.",
      "Guidance and Patience to students.",
    ],
  },
  {
    title: "Waiter",
    company_name: "Mahogani Roastery Coffee",
    icon: Mahogani,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2022",
    points: [
      "Greeting customers and taking orders.",
      "Collaborating with colleagues to maintan situation in the restaurant.",
      "Providing excellent customer service to ensure satisfaction.",
      "Preparing bills and processing payments.",
    ],
  },
  {
    title: "Waiter",
    company_name: "Cuppa Two Cafe",
    icon: CuppaTwo,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Greeting customers and taking orders.",
      "Collaborating with colleagues to maintan situation in the restaurant.",
      "Providing excellent customer service to ensure satisfaction.",
      "Preparing bills and processing payments.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "In progress",
    name: "SHINE",
    designation: "",
    company: "",
    image: twoStar,
  },
  {
    testimonial:
      "In progress",
    name: "SHINE",
    designation: "",
    company: "",
    image: twoStar,
  },
  {
    testimonial:
      "In progress",
    name: "SHINE",
    designation: "",
    company: "",
    image: twoStar,
  }
];

const projects = [
  {
    name: "Geostatistical Analysis + prediction of Air Pollution Index in West Malaysia",
    description:
      "Collect multiple data from different sources and perform data integration. Perform data cleaning and data transformation. Perform data analysis and data visualization. Perform geostatistical analysis and prediction modelling of air pollution index in West Malaysia.",
    tags: [
      {
        name: "QGIS",
        color: "blue-text-gradient",
      },
      {
        name: "SAS",
        color: "green-text-gradient",
      },
      {
        name: "R",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: twoStar,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Healthcare onestop platform app",
    description:
      "An prototype app that compose of health related news, AI-generated article, integrated emergency room reservation.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "PalmAI",
        color: "pink-text-gradient",
      },
      {
        name: "Webscrapping",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
    ],
    image: twoStar,
    source_code_link: "https://github.com/",
  },
  {
    name: "Upcoming",
    description:
      "Let's connect and develop something cool together!",
    tags: [
      {
        name: "data analyst",
        color: "blue-text-gradient",
      },
      {
        name: "data science",
        color: "green-text-gradient",
      },
      {
        name: "fullstack web dev",
        color: "pink-text-gradient",
      },
    ],
    image: twoStar,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };