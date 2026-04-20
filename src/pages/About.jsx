import { contactInfo } from '../data/contactInfo';
import { workspaceInfo } from '../data/techStack';
import SectionHeading from '../components/SectionHeading';
import { FiCpu, FiCompass, FiMonitor, FiBookOpen, FiBookmark, FiFilm, FiCoffee, FiHeadphones, FiGlobe, FiLayers, FiSearch, FiSliders, FiRefreshCw, FiDatabase, FiPackage, FiShield, FiTarget, FiUsers } from 'react-icons/fi';
import { FaWindows, FaMemory, FaGamepad, FaHdd } from 'react-icons/fa';
import { SiIntel, SiNvidia } from 'react-icons/si';

export default function About() {
  const calculateYears = () => {
    const start = new Date('2024-03-01');
    const now = new Date();
    const diffTime = Math.abs(now - start);
    return Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)));
  };
  const yearsExp = calculateYears();

  return (
    <div className="page">
      <h2 className="page-title">Digital Identity</h2>
      <div className="page-underline" />

      {/* The Narrative */}
      <p className="bio-text">
        I&apos;m {contactInfo.name}, a {contactInfo.title} based in {contactInfo.location}. 
        I build intelligent systems that bridge the gap between research and production, from 
        automated training pipelines and model monitoring to semantic search engines and 
        recommendation systems.
      </p>
      <p className="bio-text">
        With hands-on experience across the full ML lifecycle, data preprocessing, model 
        development, deployment, and drift detection, my projects range from NLP-powered job 
        matching systems to AI-driven crop recommendation platforms, all built with a focus 
        on real-world impact and scalable architecture.
      </p>

      {/* Sleek Highlight Ribbon */}
      <div className="highlight-ribbon">
        <div className="ribbon-item" style={{ animationDelay: '100ms' }}>
          <span className="ribbon-value primary-gradient">+{yearsExp}</span>
          <span className="ribbon-label">Years Experience</span>
        </div>
        <div className="ribbon-divider" />
        <div className="ribbon-item" style={{ animationDelay: '200ms' }}>
          <span className="ribbon-value secondary-gradient">+6</span>
          <span className="ribbon-label">Systems Shipped</span>
        </div>
        <div className="ribbon-divider" />
        <div className="ribbon-item" style={{ animationDelay: '300ms' }}>
          <span className="ribbon-value accent-gradient">BSc</span>
          <span className="ribbon-label">Computer Science & Eng.</span>
        </div>
      </div>

      {/* Operating Principles */}
      <SectionHeading 
        title="Operating Principles" 
        style={{ marginTop: 40 }}
        icon={
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" y1="2" x2="12" y2="8.5" />
          </svg>
        }
      />

      <p className="section-subtitle">
        Convictions shaped by both research and production experience with enough on-call time to consistently prioritize resilience over hype.      
      </p>
      
      <div className="principles-grid">
        <div className="principle-card" style={{ animationDelay: '100ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiRefreshCw /></div>
            <h4 className="principle-title">Reproducibility is non-negotiable</h4>
          </div>
          <p className="principle-desc">If it can&apos;t be rerun in 6 months, it didn&apos;t happen — data, code, config, seed, all versioned.</p>
        </div>

        <div className="principle-card" style={{ animationDelay: '175ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiDatabase /></div>
            <h4 className="principle-title">Data quality over model complexity</h4>
          </div>
          <p className="principle-desc">A logistic regression on clean data beats a transformer trained on garbage. The ceiling is always the data.</p>
        </div>

        <div className="principle-card" style={{ animationDelay: '250ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiPackage /></div>
            <h4 className="principle-title">Ship a baseline first</h4>
          </div>
          <p className="principle-desc">A heuristic goes live before anything clever — it flushes out every assumption and sets a real performance floor.</p>
        </div>

        <div className="principle-card" style={{ animationDelay: '325ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiShield /></div>
            <h4 className="principle-title">Deploy with epistemic humility</h4>
          </div>
          <p className="principle-desc">Every deployment is a hypothesis — shadow modes, canaries, and kill switches are how you test it without burning production.</p>
        </div>

        <div className="principle-card" style={{ animationDelay: '400ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiTarget /></div>
            <h4 className="principle-title">Optimize for the outcome</h4>
          </div>
          <p className="principle-desc">Loss curves and F1 are proxies — the downstream business metric is what stays on the dashboard.</p>
        </div>

        <div className="principle-card" style={{ animationDelay: '475ms' }}>
          <div className="card-header-inline">
            <div className="principle-icon-wrapper"><FiUsers /></div>
            <h4 className="principle-title">The system includes the users</h4>
          </div>
          <p className="principle-desc">The model is 20% of the system. The UI, feedback loops, and user behavior that drifts back into training — that&apos;s the rest.</p>
        </div>
      </div>

      {/* The Workspace */}
      <SectionHeading 
        title="The Workspace" 
        style={{ marginTop: 40 }}
        icon={<FiMonitor size={20} />}
      />

      <p className="section-subtitle">
        The hardware stack powering local inference and aggressive prototyping. Because waiting on cloud compute to test a hypothesis is a waste of time.
      </p>

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
          <FaHdd />
          <div className="workspace-item-info">
            <span className="workspace-item-label">Storage</span>
            <span className="workspace-item-value">{workspaceInfo.storage}</span>
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

      {/* Current Trajectory */}
      <SectionHeading 
        title="Currently Exploring" 
        style={{ marginTop: 40 }}
        icon={<FiCompass size={20} />}
      />

      <p className="section-subtitle">
        Active research areas. Stress-testing new paradigms to see if they hold up outside of toy examples and vendor benchmarks.
      </p>

      <div className="trajectory-grid">
        <div className="trajectory-card" style={{ animationDelay: '100ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiLayers /></div>
            <h4 className="trajectory-title">Retrieval-Augmented Generation</h4>
          </div>
          <p className="trajectory-desc">Grounding generative outputs with retrieval so the model answers from facts, not vibes.</p>
        </div>
        <div className="trajectory-card" style={{ animationDelay: '200ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiSearch /></div>
            <h4 className="trajectory-title">Vector Search & Embeddings</h4>
          </div>
          <p className="trajectory-desc">Embedding models and vector databases that make search understand meaning, not just keywords.</p>
        </div>
        <div className="trajectory-card" style={{ animationDelay: '300ms' }}>
          <div className="card-header-inline">
            <div className="trajectory-icon-wrapper"><FiSliders /></div>
            <h4 className="trajectory-title">LLM Fine-Tuning</h4>
          </div>
          <p className="trajectory-desc">LoRA and QLoRA to bend large models toward specific domains without retraining from scratch.</p>
        </div>
      </div>

      {/* Beyond the Code */}
      <SectionHeading 
        title="Beyond the Code" 
        style={{ marginTop: 40 }}
        icon={<FiCoffee size={20} />}
      />

      <p className="section-subtitle">
        Off the clock. The stories, music, and hardware tangents that keep me balanced when the laptop is finally closed.
      </p>

      <div className="hobbies-grid">
        <div className="hobby-card" style={{ animationDelay: '100ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper"><FiBookOpen /></div>
            <h4 className="hobby-title">Books &amp; Literature</h4>
          </div>
          <p className="hobby-desc">Humayun Ahmed is a 150+ book obsession. Beyond that Tagore, Nazrul, Dostoevsky, Nietzsche, Tolkien, GRRM — Bangla classics to philosophy to high fantasy.</p>
        </div>

        <div className="hobby-card" style={{ animationDelay: '175ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper hobby-icon-secondary"><FiBookmark /></div>
            <h4 className="hobby-title">Manga, Comics &amp; Light Novels</h4>
          </div>
          <p className="hobby-desc">170k+ chapters across manga, manhwa, & manhua. 15k+ comic issues. Light novels for when the panels run out.</p>
        </div>

        <div className="hobby-card" style={{ animationDelay: '275ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper hobby-icon-accent"><FiFilm /></div>
            <h4 className="hobby-title">Film, TV &amp; Anime</h4>
          </div>
          <p className="hobby-desc">3,000+ films, 1,500+ shows, 1,900+ anime. A sucker for rich world-building and fantasy, equally drawn to brilliant, unhinged protagonists and great storytelling.</p>
        </div>

        <div className="hobby-card" style={{ animationDelay: '350ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper"><FaGamepad /></div>
            <h4 className="hobby-title">Gaming</h4>
          </div>
          <p className="hobby-desc">Witcher 3, Arkham City, AC2. Plus an unapologetic gacha habit for every IP I love — One Piece, DBZ, Bleach.</p>
        </div>

        <div className="hobby-card" style={{ animationDelay: '425ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper hobby-icon-accent"><FiHeadphones /></div>
            <h4 className="hobby-title">Music</h4>
          </div>
          <p className="hobby-desc">Bangla rock to American metal, with Japanese, Hindi, and Urdu in between. One rule: it has to hit.</p>
        </div>

        <div className="hobby-card" style={{ animationDelay: '500ms' }}>
          <div className="card-header-inline">
            <div className="hobby-icon-wrapper hobby-icon-secondary"><FiGlobe /></div>
            <h4 className="hobby-title">Language Learning</h4>
          </div>
          <p className="hobby-desc">Currently learning Japanese — partly to read manga raws before the scanlation catches up, partly because I love learning new languages.</p>
        </div>
      </div>

    </div>
  );
}
