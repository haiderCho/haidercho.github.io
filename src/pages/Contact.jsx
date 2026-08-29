import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { contactInfo } from '../data/contactInfo';
import SectionHeading from '../components/SectionHeading';
import { 
  SiGithub, SiX, SiTelegram, 
  SiLastdotfm, SiImdb, SiLetterboxd, 
  SiMyanimelist, SiGoodreads, SiAnilist 
} from 'react-icons/si';
import { FaLinkedin, FaBookOpen, FaGamepad } from 'react-icons/fa';
import { 
  FiMail, FiPhone, FiMapPin, FiExternalLink, 
  FiPaperclip, FiSend, FiShare2, FiActivity, FiMessageSquare 
} from 'react-icons/fi';

// Custom Sleek Radar Pin Marker Icon matching theme
const customIcon = L.divIcon({
  className: 'custom-map-marker',
  html: `
    <div class="marker-pulse"></div>
    <div class="marker-pin">
      <svg viewBox="0 0 24 24" fill="#FF995C" width="18" height="18">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 26],
  popupAnchor: [0, -26],
});

const getSocialIcon = (type) => {
  switch (type) {
    case 'github': return <SiGithub />;
    case 'linkedin': return <FaLinkedin />;
    case 'twitter': return <SiX />;
    case 'telegram': return <SiTelegram />;
    case 'goodreads': return <SiGoodreads />;
    case 'letterboxd': return <SiLetterboxd />;
    case 'imdb': return <SiImdb />;
    case 'myanimelist': return <SiMyanimelist />;
    case 'lastfm': return <SiLastdotfm />;
    case 'anilist': return <SiAnilist />;
    case 'comicgeeks': return <FaBookOpen />;
    case 'backloggd': return <FaGamepad />;
    default: return <FiExternalLink />;
  }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const position = [23.8103, 90.4125]; // Dhaka

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFileName('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const removeFile = () => {
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const { data, size, bgColor, fgColor } = contactInfo.qr;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&bgcolor=${bgColor}&color=${fgColor}`;

  return (
    <div className="page contact-page">
      <h2 className="page-title">Contact</h2>
      <div className="page-underline" />

      {/* 1. Full-Width Native Dark Map Banner */}
      <div className="contact-map-fullwidth">
        <div className="map-badge-overlay">
          <span className="map-live-dot" />
          <span>{contactInfo.location}</span>
        </div>
        <MapContainer 
          center={position} 
          zoom={12} 
          scrollWheelZoom={false} 
          zoomControl={false}
          attributionControl={false}
          className="contact-map-canvas"
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          />
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{contactInfo.name} · {contactInfo.location}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* 2. Direct Channels Strip */}
      <div className="contact-strip">
        <a href={`mailto:${contactInfo.email}`} className="contact-strip-item">
          <div className="strip-icon"><FiMail /></div>
          <div className="strip-text">
            <span className="strip-label">Email</span>
            <span className="strip-val">{contactInfo.email}</span>
          </div>
        </a>

        <div className="contact-strip-item">
          <div className="strip-icon"><FiPhone /></div>
          <div className="strip-text">
            <span className="strip-label">Mobile</span>
            <span className="strip-val">{contactInfo.mobile}</span>
          </div>
        </div>

        <div className="contact-strip-item">
          <div className="strip-icon"><FiMapPin /></div>
          <div className="strip-text">
            <span className="strip-label">Base</span>
            <span className="strip-val">{contactInfo.location}</span>
          </div>
        </div>

        <div className="contact-strip-qr">
          <img src={qrUrl} alt="vCard QR" className="strip-qr-img" />
          <span className="strip-qr-label">vCard</span>
        </div>
      </div>

      {/* 3. Links Section (Socials & Trackers) */}
      <div className="contact-links-section">
        {/* Social / Dev */}
        <div>
          <SectionHeading title="Profiles" icon={<FiShare2 size={18} />} />
          <div className="contact-pills-grid" style={{ marginTop: 14 }}>
            {contactInfo.socialLinks.map((item) => (
              <a 
                key={item.url} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-pill"
              >
                <div className="pill-icon">{getSocialIcon(item.type)}</div>
                <div className="pill-body">
                  <span className="pill-name">{item.name}</span>
                  <span className="pill-handle">{item.handle}</span>
                </div>
                <FiExternalLink className="pill-ext" />
              </a>
            ))}
          </div>
        </div>

        {/* Trackers */}
        <div style={{ marginTop: 24 }}>
          <SectionHeading title="Trackers" icon={<FiActivity size={18} />} />
          <div className="contact-pills-grid" style={{ marginTop: 14 }}>
            {contactInfo.trackerLinks.map((item) => (
              <a 
                key={item.url} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-pill tracker-pill"
              >
                <div className="pill-icon tracker-icon">{getSocialIcon(item.type)}</div>
                <div className="pill-body">
                  <span className="pill-name">{item.name}</span>
                  <span className="pill-handle">{item.handle}</span>
                </div>
                <FiExternalLink className="pill-ext" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Minimal Contact Form */}
      <div className="contact-form-card" style={{ marginTop: 28 }}>
        <SectionHeading title="Send Message" icon={<FiMessageSquare size={18} />} />
        
        <form onSubmit={handleSubmit} className="contact-form" style={{ marginTop: 16 }}>
          <div className="form-row">
            <input 
              type="text" 
              placeholder="Your Name" 
              aria-label="Your Name" 
              required 
              className="form-input" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              aria-label="Your Email" 
              required 
              className="form-input" 
            />
          </div>
          <textarea 
            placeholder="Your message..." 
            aria-label="Your Message" 
            required 
            rows="3" 
            className="form-textarea"
          ></textarea>
          
          <div className="form-bottom">
            <div className="form-attach-box">
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf"
                onChange={handleFileChange}
                aria-label="Attach PDF document"
                style={{ display: 'none' }}
              />
              <button 
                type="button" 
                className="attach-btn" 
                onClick={() => fileInputRef.current?.click()}
              >
                <FiPaperclip />
                <span>{fileName ? 'Change PDF' : 'Attach PDF'}</span>
              </button>
              {fileName && (
                <span className="attached-tag">
                  {fileName}
                  <button type="button" onClick={removeFile} aria-label="Remove attached file">×</button>
                </span>
              )}
            </div>

            <div className="form-submit-box">
              {submitted ? (
                <span className="sent-msg" role="status" aria-live="polite">
                  ✓ Message Sent!
                </span>
              ) : (
                <button type="submit" className="submit-btn">
                  <span>Send</span>
                  <FiSend />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
