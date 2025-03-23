/**
 * Site Configuration
 *
 * This file contains all the configurable settings for the website.
 * Edit these values to update the website content without changing code.
 */

export const siteConfig = {
  // Website information
  name: "Raol Mukarrozi",
  title: "Raol Mukarrozi - Personal Portfolio",
  description: "Tech Enthusiast skilled in HTML, CSS, JavaScript, Tailwind, Node.js, and Laravel",

  // Social media links
  social: {
    github: "https://github.com/latesturl",
    email: "latesturltech@gmail.com",
  },

  // Location information
  location: "Banjarbaru, Indonesia",

  // Professional roles
  roles: ["Full Stack Developer", "Tech Educator", "Open Source Contributor"],

  // Typing animation text
  typingTexts: ["Full-Stack Engineer", "Web Developer", "UI/UX Enthusiast"],

  // Media settings
  media: {
    backgroundMusic: "https://files.catbox.moe/kxu767.mp3",
    profileImage: "https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/my-profile.jpg",
    portfolioImage: "https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/my-portofolio.jpg",
  },

  // Skills configuration - simplified for easy editing
  skills: {
    // Tech skills (frontend, backend, etc.)
    techStack: [
      {
        name: "HTML",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=512",
        category: "frontend",
        level: "expert",
        needsWhiteBackground: false,
      },
      {
        name: "CSS",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png?f=webp&w=512",
        category: "frontend",
        level: "expert",
        needsWhiteBackground: false,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512",
        category: "frontend",
        level: "advanced",
        needsWhiteBackground: false,
      },
    ],

    // Development tools
    tools: [
      {
        name: "Git",
        icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
        category: "tools",
        level: "advanced",
        needsWhiteBackground: true,
      },
      {
        name: "GitHub",
        icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
        category: "tools",
        level: "advanced",
        needsWhiteBackground: true,
      },
    ],
  },

  // Projects information - removed personal portfolio project
  projects: [],
}

