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
