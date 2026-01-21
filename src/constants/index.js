import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  backend as dxc,
  web as employee,
  creator as banking,
  threejs,
  vjaygroups,
  jsrmgroup,
  employeeImg,
  snowflakeproject,
  onlinebankingsystem,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const languages = [
  { name: "English", proficiency: "Professional Proficiency" },
  { name: "Hindi", proficiency: "Native/Bilingual" },
  { name: "Marathi", proficiency: "Native/Bilingual" },
];

const services = [
  { title: "Java Developer", icon: backend },
  { title: "Backend Developer", icon: web },
  { title: "Spring & Hibernate Developer", icon: mobile },
  { title: "Database Specialist", icon: creator },
];

const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const workExperiences = [
  {
    title: "Apprentice - Java Developer",
    company_name: "DXC Technology India Pvt. Ltd. (via TeamLease)",
    icon: dxc,
    iconBg: "#383E56",
    date: "Mar 2025 - Present",
    points: [
      "Completed structured training in Core Java, SQL, Spring, and Hibernate.",
      "Built GUI-based desktop applications using Java Swing.",
      "Developed backend logic in Java for CRUD operations, validation, and business rules.",
      "Integrated Java applications with MySQL using JDBC and ORM.",
      "Optimized SQL queries for data retrieval and updates.",
      "Collaborated with team members to follow clean coding standards and best practices.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Engineering - Computer Engineering",
    company_name: "Indira College of Engineering and Management, Pune",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2020 - 2023",
    points: [
      "Graduated with a CGPA of 7.94.",
      "Focused on software development, database systems, and object-oriented programming.",
      "Developed multiple academic projects using Java and MySQL.",
    ],
  },
  {
    title: "Diploma in Computer Engineering",
    company_name: "Gramin Polytechnic, Vishnupuri, Nanded",
    icon: mobile,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Graduated with 87.54%.",
      "Gained foundational knowledge in programming, networking, and database management.",
      "Developed interest in backend development and Java programming.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Chandramani consistently delivers clean, efficient Java code and demonstrates strong backend problem-solving skills. His dedication to learning and attention to detail are commendable.",
    name: "Mentor",
    designation: "Java Training Program",
    company: "DXC Technology India Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "He has a solid understanding of Core Java, SQL, Spring, and Hibernate, and applies best practices in every project. A reliable team member who completes tasks efficiently.",
    name: "Team Lead",
    designation: "Backend Development",
    company: "DXC Technology India Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Chandramani's commitment to crafting well-structured, maintainable code and his ability to solve complex database problems make him a valuable asset to any development team.",
    name: "Senior Developer",
    designation: "Code Review Team",
    company: "DXC Technology India Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const projects = [
  {
    name: "VJay Groups Landing Page",
    description:
      "A professional landing page for Hyderabad-based company VJay Groups, completely built from scratch using HTML, CSS, and JavaScript. Features responsive design, smooth animations, and optimized user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: vjaygroups,
    source_code_link: "https://www.vjaygroups.com/",
  },
  {
    name: "JSRM Group LLC Website",
    description:
      "Company website for San Antonio, Texas-based JSRM Group LLC with complete UI redesign and modernization. Implemented comprehensive UI changes and updated the entire interface for better user engagement and conversion.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "WordPress", color: "pink-text-gradient" },
    ],
    image: jsrmgroup,
    source_code_link: "https://www.jsrmgroupllc.com/",
  },
  {
    name: "Snowflake Data Migration Project",
    description:
      "Architected and executed enterprise data migration from legacy systems to Snowflake using GitHub Actions for CI/CD automation. Implemented multi-layer data architecture (Bronze, Silver, Gold layers) with incremental data processing, transformations, and validation at each stage. Integrated data visualization from multiple source locations with streamlined ETL pipelines. (Live company project with restricted access to source code.)",
    tags: [
      { name: "Snowflake", color: "blue-text-gradient" },
      { name: "GitHub Actions", color: "green-text-gradient" },
      { name: "Data Engineering", color: "pink-text-gradient" },
    ],
    image: snowflakeproject,
    source_code_link: "#",
  },
  {
    name: "Employee Management System",
    description:
      "A desktop-based application built using Java Swing and JDBC for managing employee records with secure authentication, CRUD operations, and MySQL integration.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Swing", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: employeeImg,
    source_code_link:
      "https://github.com/G-Chandramani/Employee-Management-System",
  },
  {
    name: "Online Banking Management System",
    description:
      "A console-based banking application developed with Core Java and Hibernate (JPA), supporting account creation, login, transactions, and fund transfers with MySQL persistence.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Hibernate", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: onlinebankingsystem,
    source_code_link:
      "https://github.com/G-Chandramani/Online-Banking-Management-System",
  },
];

export { services, technologies, workExperiences, education, testimonials, projects, languages };