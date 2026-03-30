import { portfolioData } from '../data/portfolioData';
import { FiExternalLink } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <div className="page">
      <h2 className="page-title">Creative Showcase</h2>
      <div className="page-underline" />

      <div className="portfolio-grid">
        {portfolioData.map((project, idx) => (
          <a
            key={project.title}
            className="portfolio-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="portfolio-card-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-card-image"
              />
            </div>
            
            <div className="portfolio-card-body">
              <div className="portfolio-card-header">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <FiExternalLink className="portfolio-card-icon" />
              </div>
              
              <p className="portfolio-card-desc">{project.desc}</p>
              
              {project.tags && (
                <div className="portfolio-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
