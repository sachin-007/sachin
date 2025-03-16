import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  makedreams,
  cofastudio,
  hashinteractive,
  AtulNaik,
  mayuryeole,
  nikhilsuryawanshi,
  rajfartale,
  vaibhavnagare,
  MK,
  Farm,
  Tmesocial,
  InvoiceGen,
  tododragdrop,
  laravel,
  java,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Integration Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "laravel",
    icon: laravel,
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
    name: "java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full stack developer",
    companyName: "",
    icon: makedreams,
    iconBg: "#ffffff",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining the backend of the CRM platform using Laravel technology.",
      "Integrating Mokapen with third-party platforms like Shopify, MailerLite, MailChimp, Brevo, Google Calendar, and Meet using webhooks for real-time data sync.",
      "Collaborating with cross-functional teams including designers, clients, managers, and other developers to implement seamless integrations and enhance the platform's functionality.",
      "Building and managing dashboards and reports for data visualization to track orders, deals, tasks, appointments, and more.",
      "Participating in code reviews and providing constructive feedback to improve code quality and performance."
    ],    
  },
  {
    title: "Backend Developer",
    companyName: "",
    icon: cofastudio,
    iconBg: "#383E56",
    date: "May 2023 - July 2024",
    points: [
      "Developing and maintaining Android applications using Java.",
      "Participating in daily stand-ups and code reviews to improve code quality.",
      "Preparing app layout and designing intuitive UI for a seamless user experience.",
      "Connecting activities with the database and performing database operations.",
      "Collaborating with cross-functional teams to deliver high-quality applications."
    ],    
  },
  {
    title: "Frontend Developer",
    companyName: "",
    icon: hashinteractive,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Crafting dynamic and interactive user interfaces with React.js to enhance user experience.",
      "Translating UI/UX designs into pixel-perfect, high-performance web components.",
      "Optimizing application performance and ensuring smooth navigation across all devices and screen sizes.",
      "Collaborating closely with backend developers to manage API integration and data flow.",
      "Staying up-to-date with modern frontend technologies and best practices to continuously improve code quality."
    ],    
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
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

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "He played a key role in integrating Google Calendar and Meet for seamless appointment scheduling. Highly recommend his skills in Laravel and API integrations.",
    name: "Raj Fartale",
    designation: "CTO",
    company: "Makedreams",
    image: rajfartale,
  },
  {
    testimonial:
      "Working with him was an incredible experience. His expertise in integrating platforms like Shopify and Mailchimp made our CRM more powerful and efficient.",
    name: "Atul Naik",
    designation: "Project Manager",
    company: "Makedreams",
    image: AtulNaik,
  },
  {
    testimonial:
      "His ability to handle real-time data sync and webhooks was exceptional. Our team saw a huge improvement in data management.",
    name: "Nikhil Suryavanshi",
    designation: "Lead Developer",
    company: "Makedreams",
    image: nikhilsuryawanshi,
  },
  {
    testimonial:
      "His expertise in development was outstanding. From designing intuitive UI to managing database operations, he handled everything flawlessly.",
    name: "Mayur Yeole",
    designation: "CEO",
    company: "Cofa Studio",
    image: mayuryeole,
  },
  {
    testimonial:
      "As a Frontend Developer, his attention to detail and ability to create smooth, responsive UI with React.js was exceptional. He played a vital role in improving our product's user experience.",
    name: "Vaibhav Nagare",
    designation: "Project Manager",
    company: "Hash Interactive",
    image: vaibhavnagare,
  },
];

const projects: TProject[] = [
  {
    name: "CRM",
    description:
      "it is a cloud-based customer relationship management (CRM) platform designed to help businesses manage tasks, projects, contacts, and sales pipelines efficiently. It offers collaboration tools, team management features, and data analytics to streamline customer interactions and improve productivity. Mokapen is known for its user-friendly interface and affordability, making it ideal for small to medium-sized businesses.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: MK,
    sourceCodeLink: "https://mokapen.com/",
  },
  {
    name: "TmeSocial Bot",
    description:
      "is a unified social media management platform that allows businesses, creators, and individuals to efficiently manage their Twitter (X) accounts along with other platforms. We use Twitter’s API for key features like tweet scheduling, performance analytics, managing DMs, real-time monitoring, and multi-account collaboration. Our platform ensures secure authentication via OAuth 2.0 and strictly complies with Twitter's Developer Agreement to protect user data and privacy",
      // "is a unified social media management platform that allows businesses, creators, and individuals to efficiently manage their Twitter (X) accounts along with other platforms. We use Twitter’s API for key features like tweet scheduling, performance analytics, managing DMs, real-time monitoring, and multi-account collaboration. Our platform ensures secure authentication via OAuth 2.0 and strictly complies with Twitter's Developer Agreement to protect user data and privacy",
    tags: [
      {
        name: "Node Express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Tmesocial,
    sourceCodeLink: "https://github.com/sachin-007/telegram-to-threads-bot",
    // sourceCodeLink: "https://tmethreadbot.onrender.com",
  },
  {
    name: "Invoice Generator",
    description:
      "The Invoice Generator Web App is a simple and efficient tool for creating, managing, and editing invoices using the NinjaInvoice API. It allows users to generate professional invoices with client details, itemized billing, taxes, and discounts. The app includes a live preview, PDF download, and print functionality. Built with React.js, Next.js, Node.js, and Express, it ensures smooth API integration and data handling.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: InvoiceGen,
    sourceCodeLink: "https://github.com/sachin-007/Invoice-gen-backend",
    // sourceCodeLink: "https://invoice-generator-ninjainvoice.vercel.app",
  },
  {
    name: "Todo Drag and Drop",
    description:
      "A dynamic MERN-based calendar application designed to help users manage daily tasks efficiently. This interactive planner features a monthly calendar with daily note sections, visual task completion tracking using green (completed) and red (incomplete) indicators, and dedicated areas for important tasks and notes. Users can navigate between months and maintain a comprehensive record of their productivity over time. Perfect for anyone looking to organize their workflow, track progress, and increase productivity through visual task management.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: tododragdrop,
    sourceCodeLink: "https://github.com/sachin-007/sachtodo",
    // sourceCodeLink: "https://sachtodo.vercel.app/",
  },
  {
    name: "My Farm",
    description:
      "It’s a Android Based application which is capable of storing and managing Farm data along with users can login, add, update and delete, the Farm and get feed-back and give feed-back according to that",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "API Developement",
        color: "blue-text-gradient",
      },
    ],
    image: Farm,
    sourceCodeLink: "https://github.com/sachin-007/sachtodo",
    // sourceCodeLink: "https://sachtodo.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
