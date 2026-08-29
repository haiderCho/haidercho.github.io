import { techStack } from '../data/techStack';

const proficiencyClass = (level) => {
  switch (level) {
    case 'Core':      return 'prof-expert';
    case 'Proficient':return 'prof-advanced';
    case 'Familiar':  return 'prof-intermediate';
    case 'Exploring': return 'prof-beginner';
    default:          return 'prof-intermediate';
  }
};

export default function TechStack() {
  return (
    <div className="page">
      <h2 className="page-title">Tech Stack</h2>
      <div className="page-underline" />

      <p className="section-subtext">
        Bridging the gap between research and production — across the full ML lifecycle.
      </p>

      <div className="ts-container">
        {techStack.map((category, idx) => (
          <section key={idx} className="ts-section">
            <div className="ts-section-header">
              <span className="ts-section-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="ts-section-text">
                <h3 className="ts-section-title">{category.category}</h3>
              </div>
            </div>

            <div className="ts-skills">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`ts-skill-row ${skill.isAI ? 'ts-ai' : ''}`}
                  style={{ animationDelay: `${sIdx * 60}ms` }}
                >
                  <div className="ts-skill-icon">
                    <skill.icon />
                  </div>

                  <div className="ts-skill-body">
                    <div className="ts-skill-top">
                      <span className="ts-skill-name">{skill.name}</span>
                      <span className={`ts-prof-badge ${proficiencyClass(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                      <span className="ts-skill-exp">{skill.experience}</span>
                    </div>
                    <div className="ts-skill-tags">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="ts-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
