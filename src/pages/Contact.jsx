import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { contactInfo } from '../data/contactInfo';

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

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
    <div className="page contact-page-v2">
      <h2 className="page-title">Let's Connect</h2>
      <div className="page-underline" />

      {/* Map Section */}
      <div className="contact-map-wrapper">
        <div className="contact-map-card">
          <div className="map-card-header">
            <div className="map-card-title">{contactInfo.name}</div>
            <div className="map-card-actions">
              <svg viewBox="0 0 24 24" className="icon-sm"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
          </div>
          <div className="map-card-address">
            Dhaka, Bangladesh
          </div>
        </div>
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false} 
          attributionControl={false}
          className="contact-map-v2"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{contactInfo.company}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact Details Box */}
      <div className="contact-box contact-details-box">
        <div className="contact-box-content">
          <div className="contact-info-items">
            <div className="contact-info-item-row">
              <div className="info-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <div className="info-text-group">
                <span className="info-label">Mobile</span>
                <span className="info-value">{contactInfo.mobile}</span>
              </div>
            </div>
            <div className="contact-info-item-row">
              <div className="info-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="info-text-group">
                <span className="info-label">Email</span>
                <span className="info-value">{contactInfo.email}</span>
              </div>
            </div>
          </div>
          <div className="contact-qr-wrapper">
            <div className="qr-card">
              <img src={qrUrl} alt="Contact QR" />
              <div className="qr-logo-overlay">{contactInfo.qr.logoLetter}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Box */}
      <div className="contact-box contact-form-box">
        <form onSubmit={handleSubmit} className="contact-form-v2">
          <div className="form-grid-v2">
            <input type="text" placeholder="Full Name" aria-label="Full Name" required className="form-input-v2" />
            <input type="email" placeholder="Email Address" aria-label="Email Address" required className="form-input-v2" />
          </div>
          <textarea placeholder="Your Message" aria-label="Your Message" required className="form-textarea-v2"></textarea>
          
          <div className="form-footer-v2">
            <div className="attach-area">
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf"
                onChange={handleFileChange}
                aria-label="Attach PDF document"
                style={{ display: 'none' }}
              />
              <button type="button" className="attach-button" onClick={() => fileInputRef.current?.click()}>
                <svg viewBox="0 0 24 24" className="icon-sm" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                {fileName ? 'Change PDF' : 'Attach PDF (Optional)'}
              </button>
              {fileName && (
                <span className="attached-file">
                  {fileName}
                  <button type="button" className="remove-file" onClick={removeFile} aria-label="Remove attached file">×</button>
                </span>
              )}
            </div>
            <div className="form-submit-wrapper">
              {submitted ? (
                <span className="success-msg" role="status" aria-live="polite">Message Sent!</span>
              ) : (
                <button type="submit" className="submit-btn-v2">
                  Send Message
                  <svg viewBox="0 0 24 24" className="icon-sm" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
