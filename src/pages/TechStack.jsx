import { techStack, workspaceInfo } from '../data/techStack';
import { FaDesktop, FaMemory, FaWindows } from 'react-icons/fa';
import { SiIntel, SiNvidia } from 'react-icons/si';



export default function TechStack() {
  return (
    <div className="page">
      <h2 className="page-title">Tech Stack</h2>
      <div className="page-underline" />

      <p className="section-subtext">
        Bridging the gap between research and production with a focus on the full ML lifecycle.
      </p>

      <div className="tech-stack-container">
        {techStack.map((category, idx) => (
          <div key={idx} className="tech-category animate-enter" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 className="category-title">{category.category}</h3>
            <div className="tech-grid">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className={`tech-card ${skill.isAI ? 'is-ai' : ''}`}
                >
                  <div className="tech-icon-wrapper">
                    <skill.icon className="tech-icon" />
                  </div>
                  <span className="tech-name">{skill.name}</span>
                  
                  {/* Hover Details Card */}
                  <div className="tech-details-overlay">
                    <div className="details-header">
                      <span className="details-proficiency">{skill.proficiency}</span>
                      <span className="details-exp">{skill.experience}</span>
                    </div>
                    <div className="details-divider" />
                    <div className="details-libraries">
                      {skill.libraries.map((lib, lIdx) => (
                        <span key={lIdx} className="lib-tag">{lib}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Workspace Section */}
        <div className="workspace-section animate-enter" style={{ animationDelay: '0.6s' }}>
          <div className="workspace-header">
            <FaDesktop />
            <h3>Current Workspace</h3>
          </div>
          <div className="workspace-grid">
            <div className="workspace-item">
              <FaWindows />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Operating System</span>
                <span className="workspace-item-value">{workspaceInfo.os}</span>
              </div>
            </div>
            <div className="workspace-item">
              <SiIntel />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Processor</span>
                <span className="workspace-item-value">{workspaceInfo.cpu}</span>
              </div>
            </div>
            <div className="workspace-item">
              <FaMemory />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Memory</span>
                <span className="workspace-item-value">{workspaceInfo.ram}</span>
              </div>
            </div>
            <div className="workspace-item">
              <SiNvidia />
              <div className="workspace-item-info">
                <span className="workspace-item-label">Graphics Card</span>
                <span className="workspace-item-value">{workspaceInfo.gpu}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

