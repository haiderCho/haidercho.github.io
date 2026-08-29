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
    skills: [
      { name: "Python",     icon: SiPython,     proficiency: "Core",       experience: exp(2020), tags: ["Scripting", "Automation", "ML Pipelines"] },
      { name: "JavaScript", icon: SiJavascript, proficiency: "Proficient",     experience: exp(2022), tags: ["ES6+", "Async", "DOM"] },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Proficient",     experience: exp(2023), tags: ["Type Safety", "Strict Mode"] },
      { name: "C++",        icon: SiCplusplus,  proficiency: "Familiar", experience: exp(2023), tags: ["Systems", "Algorithms"] },
      { name: "Java",       icon: SiOpenjdk,    proficiency: "Familiar", experience: exp(2023), tags: ["OOP", "Backend"] },
      { name: "R",          icon: SiR,          proficiency: "Familiar", experience: exp(2024), tags: ["Statistical Analysis"] },
      { name: "PHP",        icon: SiPhp,        proficiency: "Familiar", experience: exp(2022), tags: ["Laravel", "Backend"] },
      { name: "Rust",       icon: SiRust,       proficiency: "Exploring",     experience: exp(2025), tags: ["Memory Safety", "Concurrency"] },
      { name: "C# / .NET",  icon: SiDotnet,     proficiency: "Exploring",     experience: exp(2024), tags: [".NET", "Desktop"] },
      { name: "Kotlin",     icon: SiKotlin,     proficiency: "Exploring",     experience: exp(2025), tags: ["Android", "JVM"] },
    ]
  },

  {
    category: "AI / Machine Learning",
    skills: [
      { name: "Pandas",          icon: SiPandas,          proficiency: "Core",       experience: exp(2023), tags: ["Data Wrangling", "ETL"], isAI: true },
      { name: "NumPy",           icon: SiNumpy,           proficiency: "Core",       experience: exp(2023), tags: ["Numerical Computing"], isAI: true },
      { name: "Scikit-Learn",    icon: SiScikitlearn,     proficiency: "Core",       experience: exp(2023), tags: ["Classification", "Feature Engineering"], isAI: true },
      { name: "YOLOv8",          icon: SiUltralytics,     proficiency: "Core",       experience: exp(2024), tags: ["Object Detection", "Real-Time Vision"], isAI: true },
      { name: "PyTorch",         icon: SiPytorch,         proficiency: "Proficient",     experience: exp(2024), tags: ["Deep Learning", "TorchVision"], isAI: true },
      { name: "TensorFlow",      icon: SiTensorflow,      proficiency: "Proficient",     experience: exp(2024), tags: ["Keras", "Model Training"], isAI: true },
      { name: "OpenCV",          icon: SiOpencv,          proficiency: "Proficient",     experience: exp(2024), tags: ["Image Processing", "CV"], isAI: true },
      { name: "Roboflow",        icon: SiRoboflow,        proficiency: "Proficient",     experience: exp(2025), tags: ["Dataset Mgmt", "Annotation"], isAI: true },
      { name: "Hugging Face",    icon: SiHuggingface,     proficiency: "Familiar", experience: exp(2024), tags: ["Transformers", "NLP"], isAI: true },
      { name: "Weights & Biases",icon: SiWeightsandbiases,proficiency: "Familiar", experience: exp(2025), tags: ["Experiment Tracking"], isAI: true },
    ]
  },

  {
    category: "Frontend",
    skills: [
      { name: "React",       icon: SiReact,      proficiency: "Proficient", experience: exp(2023), tags: ["Hooks", "SPA"] },
      { name: "Next.js",     icon: SiNextdotjs,  proficiency: "Proficient", experience: exp(2024), tags: ["SSR", "App Router"] },
      { name: "Tailwind CSS",icon: SiTailwindcss,proficiency: "Proficient", experience: exp(2023), tags: ["Utility-First"] },
      { name: "Bootstrap",   icon: SiBootstrap,  proficiency: "Proficient", experience: exp(2022), tags: ["Responsive UI"] },
    ]
  },

  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: SiFastapi,  proficiency: "Proficient",     experience: exp(2023), tags: ["Async APIs", "Pydantic"] },
      { name: "Flask",   icon: SiFlask,    proficiency: "Proficient",     experience: exp(2023), tags: ["Microservices", "REST"] },
      { name: "Node.js", icon: SiNodedotjs,proficiency: "Proficient",     experience: exp(2023), tags: ["Express", "REST APIs"] },
      { name: "Django",  icon: SiDjango,   proficiency: "Familiar", experience: exp(2024), tags: ["ORM", "Admin"] },
      { name: "Laravel", icon: SiLaravel,  proficiency: "Familiar", experience: exp(2022), tags: ["MVC", "Eloquent"] },
    ]
  },

  {
    category: "Databases & Caching",
    skills: [
      { name: "PostgreSQL",icon: SiPostgresql,proficiency: "Proficient",     experience: exp(2023), tags: ["SQL", "pgvector"] },
      { name: "MySQL",     icon: SiMysql,     proficiency: "Proficient",     experience: exp(2021), tags: ["SQL", "Relational"] },
      { name: "MongoDB",   icon: SiMongodb,   proficiency: "Familiar", experience: exp(2024), tags: ["NoSQL", "Documents"] },
      { name: "Redis",     icon: SiRedis,     proficiency: "Exploring",     experience: exp(2025), tags: ["Caching", "Queues"] },
    ]
  },

  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Git",      icon: SiGit,     proficiency: "Proficient",     experience: exp(2022), tags: ["Version Control"] },
      { name: "GitHub",   icon: SiGithub,  proficiency: "Core",       experience: exp(2022), tags: ["CI/CD Actions"] },
      { name: "Docker",   icon: SiDocker,  proficiency: "Familiar", experience: exp(2025), tags: ["Containers"] },
      { name: "Jupyter",  icon: SiJupyter, proficiency: "Core",       experience: exp(2023), tags: ["Notebooks"] },
      { name: "Pydantic", icon: SiPydantic,proficiency: "Proficient",     experience: exp(2024), tags: ["Validation", "Schemas"] },
      { name: "Anaconda", icon: SiAnaconda,proficiency: "Familiar", experience: exp(2024), tags: ["Environments"] },
      { name: "Postman",  icon: SiPostman, proficiency: "Familiar", experience: exp(2024), tags: ["API Testing"] },
    ]
  },

  {
    category: "Platforms & Systems",
    skills: [
      { name: "Linux",        icon: SiLinux,      proficiency: "Core",       experience: exp(2022), tags: ["Ubuntu", "Arch", "Shell"] },
      { name: "Windows",      icon: FaWindows,    proficiency: "Core",       experience: exp(2010), tags: ["PowerShell", "Admin"] },
      { name: "Raspberry Pi", icon: SiRaspberrypi,proficiency: "Familiar", experience: exp(2024), tags: ["Edge Computing", "IoT"] },
      { name: "Arduino",      icon: SiArduino,    proficiency: "Exploring",     experience: exp(2024), tags: ["Embedded", "IoT"] },
    ]
  },

  {
    category: "Cloud & Hosting",
    skills: [
      { name: "Vercel",  icon: SiVercel,  proficiency: "Proficient",     experience: exp(2023), tags: ["Edge Deploy", "Frontend"] },
      { name: "Netlify", icon: SiNetlify, proficiency: "Proficient",     experience: exp(2023), tags: ["Static Hosting", "CI/CD"] },
      { name: "Nginx",   icon: SiNginx,   proficiency: "Exploring",     experience: exp(2025), tags: ["Reverse Proxy"] },
      { name: "cPanel",  icon: SiCpanel,  proficiency: "Proficient",     experience: exp(2024), tags: ["Web Hosting"] },
    ]
  },
];

export const workspaceInfo = {
  os: "Windows 11 Pro",
  cpu: "Intel Core i7 (11th Gen)",
  ram: "32 GB RAM",
  storage: "2TB SSD",
  gpu: "NVIDIA RTX 3060 (12GB)"
};
