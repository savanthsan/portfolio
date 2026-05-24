// portfolio.js - Centralized configuration file for the portfolio contents.
// Easy for a beginner to edit without modifying page code.

export const portfolioConfig = {
  personalInfo: {
    name: "Savanth Sanju",
    title: "B.Tech IT Student at CUSAT | Web Developer | AI Enthusiast",
    shortDescription: "I build beginner-friendly, useful web applications using modern technologies and AI.",
    aboutText: "I am a B.Tech Information Technology student at Cochin University of Science and Technology (CUSAT), passionate about web development, artificial intelligence, and solving real-world problems through technology. I enjoy creating practical projects that help people in daily life, while continuously improving my coding and development skills.",
  },
  education: {
    degree: "B.Tech Information Technology",
    university: "Cochin University College of Engineering Kuttanad (CUCEK)",
    location: "Kuttanad, Alappuzha, Kerala, India",
    interests: ["Web Development", "AI", "Full-Stack Development"],
    period: "2024 - Present"
  },
  skills: [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "C++", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "Supabase", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Canva", category: "Tools" },
    { name: "AI Integration", category: "Specialties" }
  ],
  projects: [
    {
      id: 1,
      name: "Savan",
      description: "An AI planner and expense tracking website that helps users manage tasks, track spending, get reminders, and receive smart productivity and money advice.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "AI API"],
      category: "Fullstack / AI",
      link: "https://github.com/savanthsan/savan-tracker.git",
      demoLink: "https://savan-tracker.vercel.app/"
    },
    {
      id: 2,
      name: "Airline Management System",
      description: "An Apache server-hosted RDBMS system for airline flight scheduling, passenger booking administration, and database record management.",
      tech: ["PHP", "MySQL", "Apache", "RDBMS"],
      category: "Fullstack / AI",
      link: "https://github.com/savanthsan/Airline.git",
      demoLink: "#"
    },
    {
      id: 3,
      name: "Saga Jewellery Website",
      description: "An elegant e-commerce jewelry showcase website featuring product categories, shopping cart systems, and responsive design styles.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend Dev",
      link: "https://github.com/savanthsan/saga.git",
      demoLink: "#"
    },
    {
      id: 4,
      name: "CloudCast India",
      description: "A beginner-friendly, full-stack AI cloud motion prediction web application. It calculates cloud movements and predicts the next satellite frame using OpenCV Dense Optical Flow (Farneback method) on geostationary weather imagery from India's meteorological satellites (INSAT-3D/3DR).",
      tech: ["Next.js", "FastAPI", "OpenCV", "Python", "SQLite", "Tailwind CSS"],
      category: "Fullstack / AI",
      link: "https://github.com/savanthsan/CloudCast-India",
      demoLink: "https://cloud-cast-india.vercel.app/"
    }
  ],
  currentlyLearning: [
    { name: "Next.js", level: "Intermediate" },
    { name: "Supabase", level: "Intermediate" },
    { name: "AI API integration", level: "Intermediate" },
    { name: "Full-stack development", level: "Intermediate" },
    { name: "React", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Backend basics", level: "Beginner" }
  ],
  contact: {
    // 💡 INSERT YOUR EMAIL ADDRESS HERE
    email: "savanths408@gmail.com",
    
    // 💡 INSERT YOUR GITHUB URL HERE
    github: "https://github.com/savanthsan",
    
    // 💡 INSERT YOUR LINKEDIN URL HERE
    linkedin: "https://linkedin.com/in/savanthsanju"
  },
  achievements: [
    {
      id: 1,
      title: "Youth Ideathon 2024 – Top 100 Finalist",
      provider: "Youth Ideathon / ThinkStartup",
      description: "Selected among the Top 100 participants/teams in Youth Ideathon for presenting an innovative idea and solution.",
      certificateLink: "https://portal.itscredible.com/qr/346591335906?src=qr"
    }
  ]
};
