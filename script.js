// Create floating particles
const particlesContainer = document.querySelector(".floating-particles");
const particleCount = 60;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.width = `${Math.random() * 10 + 5}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
  particlesContainer.appendChild(particle);
}

// Create network lines
const networkContainer = document.querySelector(".network-lines");
const lineCount = 20;

for (let i = 0; i < lineCount; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.width = `${Math.random() * 200 + 100}px`;
  line.style.height = "1px";
  line.style.left = `${Math.random() * 100}%`;
  line.style.top = `${Math.random() * 100}%`;
  line.style.transform = `rotate(${Math.random() * 360}deg)`;
  line.style.animation = `pulse-opacity ${Math.random() * 3 + 2}s infinite`;
  networkContainer.appendChild(line);
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li a");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
    });
  });
});

// Generic renderer: takes an array of strings and container ID
function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  skills.forEach((skill) => {
    const span = document.createElement("span");
    span.className = "skill-item";
    span.textContent = skill;
    container.appendChild(span);
  });
}

// 1. Define your skills
const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Next.js",
  "Redux",
  "UI/UX Design",
  "API Integration",
  "State Management",
  "Responsive Design",
  "Cross-Browser Compatibility",
];
const backendSkills = [
  "Node.js",
  "Express.js",
  "Mongoose",
  "JWT",
  "Multer",
  "Nodemailer",
  "Bcrypt",
  "Helmet",
  "Third-Party API Integration",
  "AI Integration",
  "WebSockets",
  "Socket.IO",
  "Redis",
];

const databaseSkills = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "NoSQL Databases",
  "Database Design",
  "Data Modeling",
  "ORMs (e.g., Sequelize, Mongoose)",
  "Database Optimization",
  "Data Migration",
  "Indexing",
  "Query Optimization",
];

const languageSkills = ["C", "Python", "Java", "C++"];

const otherSkills = [
  "Nginx",
  "Apache",
  "Data Structures",
  "Git/GitHub",
  "REST API",
  "API Integration",
  "State Management",
  "Postman",
  "MVC",
  "Problem Solving",
  "AWS-EC2",
  "AWS-S3",
];

// 2. Render each list
renderSkills(frontendSkills, "frontend-skill-list");
renderSkills(backendSkills, "backend-skill-list");
renderSkills(databaseSkills, "database-skill-list");
renderSkills(languageSkills, "language-skill-list");
renderSkills(otherSkills, "other-skill-list");

// Define your projects as an array of objects
const projects = [
  {
    title: "Hinjewadi Bike Website",
    imgSrc: "hinjawadibikeHeroSection.png",
    imgAlt: "Rental Bike Website",
    description: `This is a static website for a rental bike service in Hinjawadi, Pune.
• Developed using HTML, CSS, JavaScript, React, etc.
• Implemented a responsive design for optimal viewing on various devices.`,
    link: "https://hinjawadibike.com/",
    ctaText: "Visit Live Link",
    disabled: false,
  },
  {
    title: "Imaginaria 3D Printing Service Website",
    imgSrc: "imaginariaHeroSection.png",
    imgAlt: "Imaginaria 3D Printing Service Website",
    description: `This is a static website for a 3D printing service in Pune.
• Developed using HTML, CSS, JavaScript, React, etc.
• Implemented a responsive design for optimal viewing on various devices.`,
    link: "http://imaginaria.co.in/",
    ctaText: "Visit Live Link",
    disabled: false,
  },
  {
    title: "Real Estate High Quality Lead Generation System",
    imgSrc: "queensTower.png",
    imgAlt: "Real Estate High Quality Lead Generation System",
    description: `This is a full-stack web application for collecting the real estate high quality leads.
• Developed using HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, etc.
• Features include admin access, login, website management, and SEO optimization.
• Collecting the leads into CRM System.
`,
link: "https://queenstowernibmannex.com/",
ctaText: "Visit Live Link",
disabled: false,
},
{
  title: "Employee Management System",
  imgSrc: "employeeManagement.png",
  imgAlt: "Imaginaria 3D Printing Service Website",
  description: `This is a full-stack web application for managing employee data.
• Developed using HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, etc.
• Features include employee registration, login, profile management, and data visualization.
• Export employee data to Excel and PDF formats.
`,
  link: "https://imaginaria.hinjawadibike.com/",
  ctaText: "Visit Live Link",
  disabled: false,
},
{
    title: "Social Media and E-Commerce Home Page",
    imgSrc: "Social_Media.jpeg",
    imgAlt: "Social Media and E-Commerce Home Page",
    description: `In this I used HTML, CSS, JavaScript, React, Firebase, etc.
• Developed a Social Media + E-Commerce Home/Landing page.
• Registration and Login with Firebase API.`,
    link: "https://relu.vercel.app/",
    ctaText: "Visit Live Link",
    disabled: false,
  },
  {
    title: "Blog-Quote Web Application",
    imgSrc: "BlogQuotes.jpeg",
    imgAlt: "Blog-Quote Web Application",
    description: `• MERN Stack Project for sharing Motivational or Other Quotes.
• REST API using Node.js, Express.js, MongoDB.
• MongoDB database with Mongoose ORM.
• HTML, CSS, JavaScript, React, Tailwind CSS.
• Sign Up, Sign In, Create/Update/Read/Delete & Like Quotes.`,
    link: "https://github.com/samirdhoran2000/blog-app",
    ctaText: "View on GitHub",
    disabled: false,
  },
  {
    title: "Matrimony Web Application",
    imgSrc: "Matrimony.jpeg",
    imgAlt: "Matrimony Web Application",
    description: `➢ Handling form data, JSON data, error handling, APIs, HTTP protocol.
➢ Validations, authorization, authentication.
➢ Built with HTML, CSS, JavaScript/TypeScript, Angular.
➢ Thrived in dynamic, challenging environment.`,
    link: "#",
    ctaText: "Visit Live Link",
    disabled: true,
  },
  {
    title: "Cosmo Enterprises",
    imgSrc: "cosmo.jpeg",
    imgAlt: "Cosmo Enterprises",
    description: `Designed, developed, and deployed Cosmo Enterprises company website.`,
    link: "#",
    // link: "https://cosmo-enterprises.com/",
    ctaText: "Visit Live Link",
    disabled: true,
  },
  {
    title: "Curamatix Healthcare Pvt. Ltd., Pune",
    imgSrc: "curamatix.jpeg",
    imgAlt: "Curamatix Healthcare Pvt. Ltd. Pune.",
    description: `Designed, developed, and deployed Curamatix Healthcare Pvt. Ltd. company website.`,
    link: "#",
    // link: "https://www.curamatix.com/",
    ctaText: "Visit Live Link",
    disabled: true,
  },
  {
    title: "Commodity Trading Data Analysis",
    imgSrc: "Trading_Dashboard.jpeg",
    imgAlt: "Commodity Trading Data Analysis",
    description: `• Data cleaning and preprocessing.
• Analysis of export-import data using Pandas, NumPy.
• Designed and built complex algorithms for categorization and segregation.`,
    link: "#",
    ctaText: "Visit Live Link",
    disabled: true,
  },
];

// 2. Rendering function
function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear any existing children
  container.innerHTML = "";

  projects.forEach((proj) => {
    // Create card wrapper
    const card = document.createElement("div");
    card.className = "project-card";

    // Image
    const img = document.createElement("img");
    img.src = proj.imgSrc;
    img.alt = proj.imgAlt;
    img.className = "project-card-img";
    card.appendChild(img);

    // Content wrapper
    const content = document.createElement("div");
    content.className = "project-card-content";

    // Title + description
    const textBlock = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = proj.title;
    const p = document.createElement("p");
    // preserve line‐breaks
    p.innerHTML = proj.description.replace(/\n/g, "<br>");
    textBlock.appendChild(h3);
    textBlock.appendChild(p);

    // CTA link
    const a = document.createElement("a");
    a.textContent = proj.ctaText;
    a.href = proj.link;
    a.target = "_blank";
    a.className = "cta-button-card" + (proj.disabled ? " disabled" : "");
    if (proj.disabled) a.setAttribute("disabled", "");

    // assemble
    content.appendChild(textBlock);
    content.appendChild(a);
    card.appendChild(content);
    container.appendChild(card);
  });
}

// 3. Kick off rendering
renderProjects(projects, "project-grid");
