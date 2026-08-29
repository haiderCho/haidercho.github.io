import { resumeData } from '../data/resumeData';
import SectionHeading from '../components/SectionHeading';

export default function Resume() {
  return (
    <div className="page">
      <h2 className="page-title">Career Snapshot</h2>
      <div className="page-underline" />

      {/* Experience */}
      <SectionHeading
        title="Experience"
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" />
            <path d="M16 7V5h-8v2" />
          </svg>
        }
      />

      <div className="timeline resume-timeline">
        {resumeData.experience.map((job, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{job.title}</div>
            <div className="timeline-company">{job.company}{job.type ? ` · ${job.type}` : ''}</div>
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-desc">{job.description}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeading
        title="Education"
        style={{ marginTop: 36 }}
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" fill="none" stroke="currentColor">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5l6 3 6-3v-5" />
          </svg>
        }
      />

      <div className="timeline resume-timeline">
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-title">{edu.title}</div>
            <div className="timeline-company">{edu.company}</div>
          </div>
        ))}
      </div>

      {/* Skills & Languages Grid */}
      <div className="resume-grid">
        {/* Technical Competencies */}
        <div className="resume-col">
          <SectionHeading
            title="Technical Competencies"
            style={{ marginBottom: 20 }}
            icon={
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" fill="none" stroke="currentColor">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
          />
          <div className="competency-list">
            {resumeData.skillsRow1.map((skill, idx) => (
              <CompetencyItem key={idx} name={skill.name} focus={skill.focus} />
            ))}
          </div>
        </div>

        {/* Language Proficiency */}
        <div className="resume-col">
          <SectionHeading
            title="Language Proficiency"
            style={{ marginBottom: 20 }}
            icon={
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" fill="none" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            }
          />
          <div className="language-list">
            {resumeData.skillsRow2.map((lang, idx) => (
              <LanguageItem key={idx} language={lang.language} level={lang.level} tag={lang.tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetencyItem({ name, focus }) {
  return (
    <div className="competency-card">
      <div className="competency-name">{name}</div>
      <div className="competency-focus">{focus}</div>
    </div>
  );
}

function LanguageItem({ language, level, tag }) {
  return (
    <div className="language-item">
      <div>
        <div className="language-name">{language}</div>
        <div className="language-level">{level}</div>
      </div>
      <span className="language-tag">{tag}</span>
    </div>
  );
}
