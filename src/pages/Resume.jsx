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

      {/* Skills */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <SkillBar name="Python" percent={90} />
        <SkillBar name="Machine Learning" percent={85} />
        <SkillBar name="TypeScript" percent={80} />
        <SkillBar name="NLP" percent={80} />
        <SkillBar name="REST APIs" percent={80} />
        <SkillBar name="Git / GitHub" percent={90} />
        <SkillBar name="Next.js" percent={75} />
        <SkillBar name="Data Analysis" percent={75} />
        <SkillBar name="Docker" percent={70} />
        <SkillBar name="SQL" percent={70} />
        <SkillBar name="Figma" percent={70} />
        <SkillBar name="C#" percent={65} />
      </div>
    </div>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
