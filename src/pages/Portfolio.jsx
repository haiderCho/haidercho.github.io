import { portfolioData } from '../data/portfolioData';
import { FiArrowRight } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <div className="page portfolio-fragment-page">
      <h2 className="page-title brutalist-title">Portfolio</h2>
      <div className="page-underline" />

      <div className="fragment-canvas">
        {portfolioData.map((project, idx) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`fragment-card fragment-pos-${idx + 1}`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Raw Image */}
            <div className="fragment-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="fragment-image"
                loading="lazy"
              />
              <div className="fragment-overlay"></div>
            </div>

            {/* Brutalist Info Block (Fuses text and anchors to image) */}
            <div className="fragment-info-block">
              <div className="fragment-title-box">
                <span className="fragment-category">{project.category}</span>
                <h3 className="fragment-title">{project.title}</h3>
              </div>
              
              <div className="fragment-data-box">
                <p className="fragment-desc">{project.desc}</p>
                <div className="fragment-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="fragment-tag">{tag}</span>
                  ))}
                </div>
                <div className="fragment-cta">
                  EXPLORE <FiArrowRight />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
