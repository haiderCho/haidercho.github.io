const projects = [
  {
    title: 'Resume-JRS',
    url: 'github.com/haiderCho/Resume-JRS',
    link: 'https://github.com/haiderCho/Resume-JRS',
    image: 'https://opengraph.githubassets.com/1/haiderCho/Resume-JRS',
    desc: 'Hybrid search engine for job recommendations using semantic matching, skill taxonomy, and ensemble scoring.',
  },
  {
    title: 'MediaSage',
    url: 'github.com/haiderCho/MediaSage',
    link: 'https://github.com/haiderCho/MediaSage',
    image: 'https://opengraph.githubassets.com/1/haiderCho/MediaSage',
    desc: 'A semantic search engine built with Next.js and vector embeddings for intelligent media discovery.',
  },
  {
    title: 'AgroSense',
    url: 'github.com/haiderCho/AgroSense',
    link: 'https://github.com/haiderCho/AgroSense',
    image: 'https://opengraph.githubassets.com/1/haiderCho/AgroSense',
    desc: 'AI-powered crop recommendation system that predicts the most suitable crops using ML models.',
  },
  {
    title: 'HandyPy',
    url: 'github.com/haiderCho/HandyPy',
    link: 'https://github.com/haiderCho/HandyPy',
    image: 'https://opengraph.githubassets.com/1/haiderCho/HandyPy',
    desc: 'A comprehensive collection of Python GUI applications built with Tkinter and PyQt6.',
  },
  {
    title: 'USB Access Control',
    url: 'github.com/haiderCho/CSE323-Project-UAC',
    link: 'https://github.com/haiderCho/CSE323-Project-UAC',
    image: 'https://opengraph.githubassets.com/1/haiderCho/CSE323-Project-UAC',
    desc: 'USB Access Control system built with C# for managing and restricting USB device access.',
  },
  {
    title: 'Phishing URL Detection',
    url: 'github.com/haiderCho/CSE445-Project-MLPUD',
    link: 'https://github.com/haiderCho/CSE445-Project-MLPUD',
    image: 'https://opengraph.githubassets.com/1/haiderCho/CSE445-Project-MLPUD',
    desc: 'Machine Learning-based Phishing URL Detection system using classification algorithms.',
  },
];

export default function Portfolio() {
  return (
    <div className="page">
      <h2 className="page-title">Creative Showcase</h2>
      <div className="page-underline" />

      <div className="portfolio-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            className="portfolio-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-card-image"
            />
            <div className="portfolio-card-body">
              <div className="portfolio-card-url">URL : {project.url}</div>
              <div className="portfolio-card-title">{project.title}</div>
              <div className="portfolio-card-desc">{project.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
