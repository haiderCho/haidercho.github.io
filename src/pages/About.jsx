import { contactInfo } from '../data/contactInfo';

export default function About() {
  return (
    <div className="page">
      <h2 className="page-title">Digital Identity</h2>
      <div className="page-underline" />

      <p className="bio-text">
        I'm {contactInfo.name}, a {contactInfo.title} based in {contactInfo.location}. 
        I build intelligent systems that bridge the gap between research and production — from 
        automated training pipelines and model monitoring to semantic search engines and 
        recommendation systems.
      </p>
      <p className="bio-text">
        With hands-on experience across the full ML lifecycle — data preprocessing, model 
        development, deployment, and drift detection — I work at the intersection of software 
        engineering and applied AI. My projects range from NLP-powered job matching systems to 
        AI-driven crop recommendation platforms, all built with a focus on real-world impact 
        and scalable architecture.
      </p>

      <div className="highlights-heading">
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        Highlights & Successes
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-number">+2</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">+6</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">BS</div>
          <div className="stat-label">Computer Science & Eng.</div>
        </div>
      </div>

      <div className="section-heading">
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        Featured Projects
      </div>
      <p className="section-subtext">A glimpse into my professional journey.</p>

      <div className="projects-grid">
        <a className="project-card" href="https://github.com/haiderCho/Resume-JRS" target="_blank" rel="noopener noreferrer">
          <img
            src="https://opengraph.githubassets.com/1/haiderCho/Resume-JRS"
            alt="Resume"
            className="project-card-image"
          />
          <div className="project-card-body">
            <div className="project-card-url">github.com/haiderCho/Resume-JRS</div>
            <div className="project-card-title">Resume</div>
            <div className="project-card-desc">
              Hybrid search engine for job recommendations using semantic matching, skill taxonomy, and ensemble scoring.
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/haiderCho/AgroSense" target="_blank" rel="noopener noreferrer">
          <img
            src="https://opengraph.githubassets.com/1/haiderCho/AgroSense"
            alt="AgroSense"
            className="project-card-image"
          />
          <div className="project-card-body">
            <div className="project-card-url">github.com/haiderCho/AgroSense</div>
            <div className="project-card-title">AgroSense</div>
            <div className="project-card-desc">
              AI-powered crop recommendation system that predicts the most suitable crops using ML models.
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
