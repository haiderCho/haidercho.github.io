import { 
  SiPython, SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, 
  SiHuggingface, SiOpencv, SiNumpy, SiPandas, SiR, SiLatex,
  SiWeightsandbiases, SiDocker, SiJupyter, SiRoboflow, SiAnaconda, SiGit, SiGitbook, SiDocsify, SiPydantic,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiLaravel, SiDjango, SiFlask, SiVite, SiFlutter, SiStreamlit, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiPostman, SiNetlify, SiVercel,
  SiC, SiCplusplus, SiDotnet, SiRust, SiOpenjdk, SiKotlin, SiPhp, SiQt, SiArduino, SiRaspberrypi, SiAndroid,
  SiLinux, SiUbuntu, SiDebian, SiFedora, SiArchlinux, SiAlpinelinux, SiApple,
  SiNpm, SiPnpm
} from 'react-icons/si';

export const techStack = [

  {
    category: "Engineering Core & AI/ML Systems",
    skills: [
      { name: "Python", icon: SiPython, proficiency: "Expert", experience: "3+ Years", libraries: ["PyTorch", "TensorFlow", "FastAPI"], isAI: true },
      { name: "PyTorch", icon: SiPytorch, proficiency: "Advanced", experience: "2+ Years", libraries: ["TorchVision", "Deep Learning"], isAI: true },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: "Advanced", experience: "2+ Years", libraries: ["Keras", "Model Hub"], isAI: true },
      { name: "YOLOv8", icon: SiPython, proficiency: "Expert", experience: "2+ Years", libraries: ["Computer Vision", "Object Detection"], isAI: true },
      { name: "Hugging Face", icon: SiHuggingface, proficiency: "Advanced", experience: "2+ Years", libraries: ["Transformers", "NLP"], isAI: true },
      { name: "Scikit-Learn", icon: SiScikitlearn, proficiency: "Expert", experience: "3+ Years", libraries: ["ML Algorithms", "Preprocessing"], isAI: true },
      { name: "OpenCV", icon: SiOpencv, proficiency: "Advanced", experience: "2+ Years", libraries: ["Image Processing", "Vision"], isAI: true },
      { name: "NumPy / Pandas", icon: SiNumpy, proficiency: "Expert", experience: "3+ Years", libraries: ["Data Analysis", "Numerical Computing"], isAI: true },
      { name: "R & Stat", icon: SiR, proficiency: "Intermediate", experience: "1+ Year", libraries: ["Statistical Analysis", "Data Mining"], isAI: true }
    ]
  },

  {
    category: "AI/ML Lifecycle (MLOps)",
    skills: [
      { name: "Docker", icon: SiDocker, proficiency: "Advanced", experience: "1+ Year", libraries: ["Containerization", "Scaling"] },
      { name: "Weights & Biases", icon: SiWeightsandbiases, proficiency: "Advanced", experience: "1+ Year", libraries: ["Experiment Tracking", "Hyperparameters"] },
      { name: "Git / GitHub", icon: SiGit, proficiency: "Expert", experience: "4+ Years", libraries: ["Version Control", "CI/CD"] },
      { name: "Jupyter", icon: SiJupyter, proficiency: "Expert", experience: "3+ Years", libraries: ["Notebooks", "Data Viz"] },
      { name: "Roboflow", icon: SiRoboflow, proficiency: "Advanced", experience: "1+ Year", libraries: ["Dataset Management", "Annotation"] },
      { name: "Anaconda", icon: SiAnaconda, proficiency: "Advanced", experience: "3+ Years", libraries: ["Environment Management", "Conda"] },
      { name: "Pydantic", icon: SiPydantic, proficiency: "Advanced", experience: "2+ Years", libraries: ["Data Validation", "FastAPI"] },
      { name: "Documentation", icon: SiGitbook, proficiency: "Advanced", experience: "2+ Years", libraries: ["GitBook", "Docsify", "LaTeX"] }
    ]
  },
  {
    category: "Modern Product & Web Stack",
    skills: [
      { name: "Web Systems", icon: SiReact, proficiency: "Expert", experience: "3+ Years", libraries: ["React", "Next.js", "Vue.js", "Vite"] },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Advanced", experience: "2+ Years", libraries: ["Type Safety", "Scalability"] },
      { name: "App Development", icon: SiFlutter, proficiency: "Advanced", experience: "2+ Years", libraries: ["Flutter", "Streamlit", "Interface Design"] },
      { name: "Backend Engines", icon: SiNodedotjs, proficiency: "Advanced", experience: "2+ Years", libraries: ["Node.js", "Laravel", "Django", "Flask"] },
      { name: "Styling", icon: SiTailwindcss, proficiency: "Expert", experience: "3+ Years", libraries: ["Tailwind", "Bootstrap", "Design Systems"] },
      { name: "Data Persistence", icon: SiPostgresql, proficiency: "Advanced", experience: "2+ Years", libraries: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
      { name: "Cloud & API", icon: SiVercel, proficiency: "Advanced", experience: "2+ Years", libraries: ["Vercel", "Netlify", "Postman", "REST"] }
    ]
  },
  {
    category: "Low-Level & Hardware Ecosystem",
    skills: [
      { name: "C / C++", icon: SiCplusplus, proficiency: "Advanced", experience: "3+ Years", libraries: ["Qt", "Systems Programming"] },
      { name: "Rust", icon: SiRust, proficiency: "Intermediate", experience: "1+ Year", libraries: ["Safety", "Concurrent Systems"] },
      { name: "Mobile Core", icon: SiKotlin, proficiency: "Advanced", experience: "2+ Years", libraries: ["Kotlin", "Android Development"] },
      { name: "Hardware", icon: SiArduino, proficiency: "Advanced", experience: "2+ Years", libraries: ["Arduino", "Raspberry Pi", "Embedded C"] },
      { name: "Legacy & Enterprise", icon: SiDotnet, proficiency: "Intermediate", experience: "2+ Years", libraries: ["C#", "Java", "PHP"] }

    ]
  },
  {
    category: "Environment & Workstation",
    skills: [
      { name: "Linux / Unix", icon: SiLinux, proficiency: "Expert", experience: "4+ Years", libraries: ["Ubuntu", "Arch", "Debian", "Fedora"] },
      { name: "Windows Core", icon: SiPython, proficiency: "Expert", experience: "10+ Years", libraries: ["Optimization", "Shell"] },

      { name: "Build Tools", icon: SiNpm, proficiency: "Advanced", experience: "3+ Years", libraries: ["npm", "pnpm", "Chocolatey"] },
      { name: "OS Experience", icon: SiApple, proficiency: "Intermediate", experience: "1+ Year", libraries: ["macOS", "Alpine Linux"] }
    ]
  }
];

export const workspaceInfo = {
  os: "Windows 11 Pro (64-bit Architecture)",
  cpu: "Intel Core i7 (11th Gen)",
  ram: "32 GB RAM",
  gpu: "NVIDIA RTX 3060"
};

