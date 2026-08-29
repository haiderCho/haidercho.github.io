import { contactInfo } from '../data/contactInfo';
import { workspaceInfo } from '../data/techStack';
import SectionHeading from '../components/SectionHeading';
import { 
  FiCompass, FiMonitor, FiCoffee, FiLayers, FiSearch, FiSliders, 
  FiDatabase, FiPackage, FiRefreshCw, FiBookOpen, FiBookmark, FiFilm,
  FiClock, FiCheckCircle, FiAward
} from 'react-icons/fi';
import { FaWindows, FaMemory, FaHdd } from 'react-icons/fa';
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
      <h2 className="page-title">Who I Am</h2>
      <div className="page-underline" />

      {/* The Narrative */}
      <p className="bio-text">
        I&apos;m {contactInfo.name}, a {contactInfo.title} based in {contactInfo.location}. 
        I build and deploy applied ML systems — from automated data pipelines and model training workflows to semantic search engines and recommendation backends.
      </p>
      <p className="bio-text">
        My work centers on bridging models in notebooks to reliable systems in production: data validation, low-latency inference, drift monitoring, and building pipelines that scale.
      </p>

      {/* Polished Stats Metric Cards Grid */}
      <div className="about-stats-grid">
        <div className="about-stat-card">
          <div className="stat-icon-wrap"><FiClock /></div>
          <div className="stat-text">
            <span className="stat-num">+{yearsExp}</span>
            <span className="stat-title">Years Experience</span>
          </div>
        </div>

        <div className="about-stat-card">
          <div className="stat-icon-wrap"><FiCheckCircle /></div>
          <div className="stat-text">
            <span className="stat-num">+6</span>
            <span className="stat-title">Systems Shipped</span>
          </div>
        </div>

        <div className="about-stat-card">
          <div className="stat-icon-wrap"><FiAward /></div>
          <div className="stat-text">
            <span className="stat-num">BSc</span>
            <span className="stat-title">Computer Science & Eng.</span>
          </div>
        </div>
      </div>

      {/* Core Principles - Clean 3-Item Layout */}
      <SectionHeading 
        title="Core Principles" 
        style={{ marginTop: 36 }}
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

      <div className="principles-list">
        <div className="principle-row">
          <div className="principle-icon-wrapper"><FiDatabase /></div>
          <div>
            <span className="principle-name">Data quality over model complexity</span>
            <p className="principle-summary">A simple baseline trained on clean data beats a complex architecture on noisy labels.</p>
          </div>
        </div>

        <div className="principle-row">
          <div className="principle-icon-wrapper"><FiPackage /></div>
          <div>
            <span className="principle-name">Ship a dumb baseline first</span>
            <p className="principle-summary">Deploy a heuristic on day one to stress-test pipelines and set a real performance floor.</p>
          </div>
        </div>

        <div className="principle-row">
          <div className="principle-icon-wrapper"><FiRefreshCw /></div>
          <div>
            <span className="principle-name">Reproducibility is non-negotiable</span>
            <p className="principle-summary">Configs, seeds, data splits, and weights must be versioned so runs reproduce identically.</p>
          </div>
        </div>
      </div>

      {/* Current Focus & Interests in a 2-Column Clean Layout */}
      <div className="about-split-grid">
        <div>
          <SectionHeading 
            title="Currently Exploring" 
            icon={<FiCompass size={20} />}
          />
          <div className="compact-list" style={{ marginTop: 16 }}>
            <div className="compact-item">
              <FiLayers className="compact-icon" />
              <div>
                <strong>Retrieval-Augmented Generation</strong>
                <p>Hybrid retrieval (dense + sparse) for anchored LLM answers.</p>
              </div>
            </div>
            <div className="compact-item">
              <FiSearch className="compact-icon" />
              <div>
                <strong>Vector Search & Embeddings</strong>
                <p>Reciprocal rank fusion (RRF) & indexing for fast semantic discovery.</p>
              </div>
            </div>
            <div className="compact-item">
              <FiSliders className="compact-icon" />
              <div>
                <strong>Efficient LLM Fine-Tuning</strong>
                <p>LoRA / QLoRA adapters for domain adaptation on constrained compute.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading 
            title="Beyond the Code" 
            icon={<FiCoffee size={20} />}
          />
          <div className="compact-list" style={{ marginTop: 16 }}>
            <div className="compact-item">
              <FiBookOpen className="compact-icon" />
              <div>
                <strong>Literature & Philosophy</strong>
                <p>Humayun Ahmed, Tagore, Nazrul, Dostoevsky, Nietzsche, Tolkien.</p>
              </div>
            </div>
            <div className="compact-item">
              <FiBookmark className="compact-icon" />
              <div>
                <strong>Manga, Comics & Light Novels</strong>
                <p>170k+ chapters across manga/manhwa and 15k+ comic issues.</p>
              </div>
            </div>
            <div className="compact-item">
              <FiFilm className="compact-icon" />
              <div>
                <strong>Film, Anime & Gaming</strong>
                <p>3k+ films, 1.9k+ anime, and story-driven RPGs (Witcher, Batman).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Workspace - Streamlined Inline Spec Bar with Icons */}
      <div className="workspace-strip">
        <div className="workspace-strip-label">
          <FiMonitor />
          <span>The Setup</span>
        </div>
        <div className="workspace-strip-specs">
          <span className="workspace-spec"><FaWindows /> <strong>OS:</strong> {workspaceInfo.os}</span>
          <span className="workspace-spec"><SiIntel /> <strong>CPU:</strong> {workspaceInfo.cpu}</span>
          <span className="workspace-spec"><FaMemory /> <strong>RAM:</strong> {workspaceInfo.ram}</span>
          <span className="workspace-spec"><FaHdd /> <strong>Storage:</strong> {workspaceInfo.storage}</span>
          <span className="workspace-spec"><SiNvidia /> <strong>GPU:</strong> {workspaceInfo.gpu}</span>
        </div>
      </div>

    </div>
  );
}
