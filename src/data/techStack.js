import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, 
  SiHuggingface, SiOpencv, SiNumpy, SiR,
  SiWeightsandbiases, SiDocker, SiJupyter, SiRoboflow, SiAnaconda, SiGit, SiPydantic,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiFlask, SiLaravel,
  SiTailwindcss, SiBootstrap,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiVercel, SiNetlify, SiPostman, SiCpanel, SiNginx,
  SiCplusplus, SiRust, SiKotlin, SiDotnet, SiArduino, SiRaspberrypi, SiOpenjdk, SiPhp,
  SiLinux, SiGithub,
  SiUltralytics, SiPandas, SiFastapi
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';

/** Auto-calculates "X+ Year(s)" from a start year */
const exp = (startYear) => {
  const years = Math.max(1, new Date().getFullYear() - startYear);
  return `${years}+ ${years === 1 ? 'Year' : 'Years'}`;
};

export const techStack = [
  {
    category: "Languages",
    description: "Core programming languages used across systems, AI research, and application development.",
    skills: [
      { name: "Python", icon: SiPython, proficiency: "Expert", experience: exp(2018), tags: ["Scripting", "Automation", "ML Pipelines"] },
      { name: "C++", icon: SiCplusplus, proficiency: "Advanced", experience: exp(2018), tags: ["Systems Programming", "Qt"] },
      { name: "Java", icon: SiOpenjdk, proficiency: "Intermediate", experience: exp(2018), tags: ["OOP", "Backend Development"] },
      { name: "Rust", icon: SiRust, proficiency: "Beginner", experience: exp(2025), tags: ["Memory Safety", "Concurrency"] },
      { name: "C#", icon: SiDotnet, proficiency: "Beginner", experience: exp(2024), tags: [".NET", "Unity"] },
      { name: "R", icon: SiR, proficiency: "Intermediate", experience: exp(2024), tags: ["Statistical Analysis", "Data Mining"] },
      { name: "JavaScript", icon: SiJavascript, proficiency: "Advanced", experience: exp(2022), tags: ["ES6+", "Async Programming", "DOM"] },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Advanced", experience: exp(2023), tags: ["Type Safety", "Strict Mode"] },
      { name: "PHP", icon: SiPhp, proficiency: "Intermediate", experience: exp(2022), tags: ["Laravel", "Backend"] },
      { name: "Kotlin", icon: SiKotlin, proficiency: "Beginner", experience: exp(2025), tags: ["Android", "JVM"] },
    ]
  },

  {
    category: "AI / Machine Learning",
    description: "Deep learning, computer vision, NLP, and data science frameworks.",
    skills: [
      { name: "Pandas", icon: SiPandas, proficiency: "Expert", experience: exp(2023), tags: ["Data Analysis", "Data Wrangling"], isAI: true },
      { name: "Scikit-Learn", icon: SiScikitlearn, proficiency: "Expert", experience: exp(2023), tags: ["Classification", "Feature Engineering"], isAI: true },
      { name: "NumPy", icon: SiNumpy, proficiency: "Expert", experience: exp(2023), tags: ["Numerical Computing"], isAI: true },
      { name: "PyTorch", icon: SiPytorch, proficiency: "Advanced", experience: exp(2024), tags: ["Deep Learning", "TorchVision"], isAI: true },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: "Advanced", experience: exp(2024), tags: ["Keras", "Model Training"], isAI: true },
      { name: "OpenCV", icon: SiOpencv, proficiency: "Advanced", experience: exp(2024), tags: ["Image Processing", "Computer Vision"], isAI: true },
      { name: "YOLOv8", icon: SiUltralytics, proficiency: "Expert", experience: exp(2024), tags: ["Object Detection", "Real-Time Vision"], isAI: true },
      { name: "Roboflow", icon: SiRoboflow, proficiency: "Advanced", experience: exp(2025), tags: ["Dataset Management", "Annotation"], isAI: true },
      { name: "Hugging Face", icon: SiHuggingface, proficiency: "Intermediate", experience: exp(2024), tags: ["Transformers", "NLP"], isAI: true },
      { name: "Weights & Biases", icon: SiWeightsandbiases, proficiency: "Intermediate", experience: exp(2025), tags: ["Experiment Tracking", "Model Monitoring"], isAI: true },
    ]
  },

  {
    category: "Frontend",
    description: "Modern web UI frameworks and styling systems.",
    skills: [
      { name: "React", icon: SiReact, proficiency: "Advanced", experience: exp(2023), tags: ["Hooks", "Component Architecture", "SPA"] },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Advanced", experience: exp(2024), tags: ["SSR", "App Router", "Server Components"] },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Advanced", experience: exp(2023), tags: ["Utility-First", "Design Systems"] },
      { name: "Bootstrap", icon: SiBootstrap, proficiency: "Advanced", experience: exp(2022), tags: ["Responsive Design", "UI Frameworks"] }
    ]
  },

  {
    category: "Backend & APIs",
    description: "Server frameworks, API development, and application backends.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: "Advanced", experience: exp(2023), tags: ["Express", "REST APIs"] },
      { name: "Django", icon: SiDjango, proficiency: "Intermediate", experience: exp(2024), tags: ["ORM", "REST APIs", "Admin"] },
      { name: "Flask", icon: SiFlask, proficiency: "Advanced", experience: exp(2023), tags: ["Microservices", "APIs"] },
      { name: "FastAPI", icon: SiFastapi, proficiency: "Advanced", experience: exp(2023), tags: ["Async APIs", "Pydantic"] },
      { name: "Laravel", icon: SiLaravel, proficiency: "Intermediate", experience: exp(2024), tags: ["MVC", "Eloquent"] }
    ]
  },

  {
    category: "Databases & Caching",
    description: "Relational DBs, NoSQL, and fast in-memory key-value stores.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Advanced", experience: exp(2023), tags: ["SQL", "Relational Databases"] },
      { name: "MySQL", icon: SiMysql, proficiency: "Advanced", experience: exp(2021), tags: ["SQL", "Relational Databases"] },
      { name: "MongoDB", icon: SiMongodb, proficiency: "Intermediate", experience: exp(2024), tags: ["NoSQL", "Document Databases"] },
      { name: "Redis", icon: SiRedis, proficiency: "Beginner", experience: exp(2025), tags: ["In-Memory", "Caching"] }
    ]
  },

  {
    category: "DevOps & Tooling",
    description: "Development infrastructure, containers, environments, and workflows.",
    skills: [
      { name: "Docker", icon: SiDocker, proficiency: "Intermediate", experience: exp(2025), tags: ["Containers", "Images", "Docker Compose"] },
      { name: "Git", icon: SiGit, proficiency: "Advanced", experience: exp(2023), tags: ["Version Control", "Branching"] },
      { name: "GitHub", icon: SiGithub, proficiency: "Expert", experience: exp(2018), tags: ["Pull Requests", "GitHub Actions"] },
      { name: "Postman", icon: SiPostman, proficiency: "Intermediate", experience: exp(2024), tags: ["API Testing", "Validation"] },
      { name: "Jupyter", icon: SiJupyter, proficiency: "Expert", experience: exp(2023), tags: ["Notebooks", "Data Exploration"] },
      { name: "Anaconda", icon: SiAnaconda, proficiency: "Intermediate", experience: exp(2024), tags: ["Conda Environments", "Dependency Management"] },
      { name: "Pydantic", icon: SiPydantic, proficiency: "Advanced", experience: exp(2024), tags: ["Data Validation", "Schemas"] }
    ]
  },

  {
    category: "Platforms & Systems",
    description: "Operating systems, embedded platforms, and hardware environments.",
    skills: [
      { name: "Linux", icon: SiLinux, proficiency: "Expert", experience: exp(2018), tags: ["Ubuntu", "Arch", "Debian", "Fedora", "Shell"] },
      { name: "Windows", icon: FaWindows, proficiency: "Expert", experience: exp(2006), tags: ["PowerShell", "System Optimization"] },
      { name: "Arduino", icon: SiArduino, proficiency: "Beginner", experience: exp(2024), tags: ["Embedded Systems", "IoT"] },
      { name: "Raspberry Pi", icon: SiRaspberrypi, proficiency: "Intermediate", experience: exp(2024), tags: ["Edge Computing", "Linux"] }
    ]
  },

  {
    category: "Cloud, Servers & Hosting",
    description: "Hosting platforms, web servers, and deployment infrastructure.",
    skills: [
      { name: "cPanel", icon: SiCpanel, proficiency: "Advanced", experience: exp(2024), tags: ["Web Hosting", "Server Management"] },
      { name: "Nginx", icon: SiNginx, proficiency: "Beginner", experience: exp(2025), tags: ["Web Server", "Reverse Proxy"] },
      { name: "Vercel", icon: SiVercel, proficiency: "Advanced", experience: exp(2023), tags: ["Edge Functions", "Frontend Hosting"] },
      { name: "Netlify", icon: SiNetlify, proficiency: "Advanced", experience: exp(2023), tags: ["Static Hosting", "CI/CD"] }
    ]
  }
];

export const workspaceInfo = {
  os: "Windows 11 Pro",
  cpu: "Intel Core i7 (11th Gen)",
  ram: "32 GB RAM",
  storage: "2TB SSD",
  gpu: "NVIDIA RTX 3060 (12GB)"
};
