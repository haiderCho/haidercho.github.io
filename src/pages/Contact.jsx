import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { contactInfo } from '../data/contactInfo';

// Custom Marker Icon to match the theme
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const position = [23.8103, 90.4125]; // Dhaka, Bangladesh

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Dynamic QR Code Params
  const qrColor = contactInfo.themeColors.primary;
  const qrBg = "ffffff"; // Keeping it white for scannability but can be bg color if requested
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:${contactInfo.email}&bgcolor=${qrBg}&color=${qrColor}`;

  return (
    <div className="page">
      <h2 className="page-title">Let's Connect</h2>
      <div className="page-underline" />

      {/* Interactive Map with Overlay */}
      <div className="contact-map-container" style={{ position: 'relative', height: '400px', zIndex: 1 }}>
        <div className="contact-map-overlay">
          <h4>{contactInfo.name}</h4>
          <p>
            {contactInfo.location}<br />
            {contactInfo.title} @ {contactInfo.company}
          </p>
          <div className="contact-map-rating">
            <span>★</span> 5.0 (Active)
          </div>
        </div>
        
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false} 
          attributionControl={false}
          style={{ height: '100%', width: '100%', borderRadius: 'var(--radius)' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              {contactInfo.name} <br /> {contactInfo.location}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="contact-details-section" style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Contact info</h3>
        
        <div className="contact-info-row">
          <div className="contact-details-list">
            {/* Location Row */}
            <div className="contact-info-tile">
              <div className="contact-tile-icon">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-tile-content">
                <div className="contact-tile-label">Location</div>
                <div className="contact-tile-value">{contactInfo.location}</div>
              </div>
            </div>

            {/* Email Row */}
            <div className="contact-info-tile">
              <div className="contact-tile-icon">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
              <div className="contact-tile-content">
                <div className="contact-tile-label">Email</div>
                <div className="contact-tile-value">{contactInfo.email}</div>
              </div>
            </div>

            {/* Follow Me Row */}
            <div className="contact-info-tile">
              <div className="contact-tile-icon">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="contact-tile-content">
                <div className="contact-tile-label">Follow me</div>
                <div className="contact-social-icons">
                  <a href={contactInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={contactInfo.socials.github} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-qr-code">
            <img src={qrUrl} alt="Contact QR Code" />
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="form-field" style={{ marginBottom: 16 }}>
            <textarea
              className="form-textarea"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="form-actions">
            {submitted ? (
              <span style={{ color: 'var(--accent)', fontSize: 14 }}>
                Message sent successfully!
              </span>
            ) : (
              <button type="submit" className="form-submit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
