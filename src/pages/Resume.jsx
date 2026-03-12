import { contactInfo } from '../data/contactInfo';

export default function Resume() {
  return (
    <div className="page">
      <h2 className="page-title">Career Snapshot</h2>
      <div className="page-underline" />

      {/* Experience */}
      <div className="section-heading">
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
        Experience
      </div>

      <div className="timeline" style={{ marginTop: 16 }}>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">Machine Learning Engineer</div>
          <div className="timeline-company">{contactInfo.company} · Full-time · Hybrid</div>
          <div className="timeline-date">May 2025 — Present</div>
          <div className="timeline-desc">
            MLOps & Model Deployment: Built automated training pipelines with CI/CD, 
            implemented model monitoring and drift detection, and deployed ML systems at 
            cloud scale.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">Junior Software Engineer</div>
          <div className="timeline-company">{contactInfo.company} · Full-time · Hybrid</div>
          <div className="timeline-date">Sep 2024 — Apr 2025</div>
          <div className="timeline-desc">
            Full-Stack Development (CRM System): Developed backend APIs, database schemas, 
            and frontend integrations; implemented authentication and handled deployment for 
            internal and customer-facing CRM platform.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">Data Scientist</div>
          <div className="timeline-company">Internship · On-site</div>
          <div className="timeline-date">Mar 2024 — Aug 2024</div>
          <div className="timeline-desc">
            Data Cleaning & Preprocessing, NumPy, statistical analysis, and building 
            data pipelines for ML model training.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">User Interface Designer</div>
          <div className="timeline-company">Samurai System Ltd. · Freelance</div>
          <div className="timeline-date">2017 — 2020</div>
          <div className="timeline-desc">
            Figma-based UI design, user interface prototyping, and design handoff 
            for web and mobile applications.
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="section-heading" style={{ marginTop: 36 }}>
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
        </svg>
        Education
      </div>

      <div className="timeline" style={{ marginTop: 16 }}>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">B.Sc. in Computer Science & Engineering</div>
          <div className="timeline-company">North South University, Dhaka, Bangladesh</div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">Higher Secondary Certificate (HSC)</div>
          <div className="timeline-company">Birshreshtha Noor Mohammad Public College</div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-title">Secondary School Certificate (SSC)</div>
          <div className="timeline-company">Birshreshtha Noor Mohammad Public College</div>
        </div>
      </div>

      {/* Skills & Languages Grid */}
      <div className="resume-grid" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Technical Mastery */}
        <div className="skills-section">
          <div className="section-heading" style={{ marginBottom: 20 }}>
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Technical Mastery
          </div>
          <SkillBar name="AI & Machine Learning" percent={85} />
          <SkillBar name="Full-Stack Systems" percent={78} />
          <SkillBar name="Cloud & MLOps" percent={72} />
          <SkillBar name="Software Architecture" percent={75} />
          <SkillBar name="Database Design" percent={70} />
        </div>

        {/* Language Proficiency */}
        <div className="languages-section">
          <div className="section-heading" style={{ marginBottom: 20 }}>
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            Language Proficiency
          </div>
          
          <div className="language-grid" style={{ display: 'grid', gap: 12 }}>
            <LanguageItem language="Bangla" level="Native Speaker" percent={100} />
            <LanguageItem language="English" level="Advanced / Fluid" percent={90} />
            <LanguageItem language="Japanese" level="Beginner (N5 Level)" percent={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div className="skill-item" style={{ marginBottom: 16 }}>
      <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="skill-name" style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{name}</span>
        <span className="skill-percent" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{percent}%</span>
      </div>
      <div className="skill-bar" style={{ height: 6, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 3, overflow: 'hidden' }}>
        <div className="skill-fill" style={{ width: `${percent}%`, height: '100%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary-low-alpha)' }} />
      </div>
    </div>
  );
}

function LanguageItem({ language, level, percent }) {
  return (
    <div className="language-item" style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--surface-border)', borderRadius: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{language}</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{level}</div>
        </div>
        <div className="lang-indicator" style={{ position: 'relative', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ transform: 'rotate(-90deg)', width: 36, height: 36 }}>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="var(--accent)" strokeWidth="3" strokeDasharray={100} strokeDashoffset={100 - percent} />
          </svg>
          <span style={{ position: 'absolute', fontSize: 9, fontWeight: 700, color: 'var(--text)' }}>{percent}%</span>
        </div>
      </div>
    </div>
  );
}

