import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

const gallerySections = [
  {
    category: 'Landscape',
    description: 'Rivers, coastlines, and open horizons captured across Bangladesh.',
    photos: [
      { src: 'gallery/Mawa-June2021.png', title: 'Padma Riverbanks at Dusk', location: 'Mawa, Munshiganj', date: 'Jun 2021' },
      { src: 'gallery/SaintMartin-Sept2019-2.jpg', title: 'Coral Coast & Turquoise Waters', location: "Saint Martin's Island", date: 'Sep 2019' },
      { src: 'gallery/SaintMartin-Sept2019-3.jpg', title: 'Southern Island Horizon', location: "Saint Martin's Island", date: 'Sep 2019' },
      { src: 'gallery/BayOfBangle-Sept-2019.JPG', title: 'Open Ocean Swell', location: 'Bay of Bengal', date: 'Sep 2019' },
      { src: 'gallery/Meghna-Apr-2018.png', title: 'Meghna River Delta', location: 'Meghna Basin', date: 'Apr 2018' },
      { src: 'gallery/IMG_20180106_170832.jpg', title: 'Golden Hour in Coastal Plains', location: 'Noakhali', date: 'Jan 2018' },
    ]
  },
  {
    category: 'Travel',
    description: 'Journeys, transit routes, and regional landmarks.',
    photos: [
      { src: 'gallery/GopalGanj-Jul2025.jpg', title: 'Monsoon Countryside', location: 'Gopalganj', date: 'Jul 2025' },
      { src: 'gallery/GopalGanj-Jul2022.png', title: 'Rural Waterway & Reflections', location: 'Gopalganj', date: 'Jul 2022' },
      { src: 'gallery/PadmaBridge-June2021 (1).jpg', title: 'Padma Multipurpose Bridge', location: 'Padma Bridge', date: 'Jun 2021' },
      { src: 'gallery/PadmaBridge-June2021 (2).jpg', title: 'Bridge Span & River Crossing', location: 'Padma Bridge', date: 'Jun 2021' },
      { src: 'gallery/SaintMartin-Sept2019-1.jpg', title: 'Island Shoreline Approach', location: "Saint Martin's Island", date: 'Sep 2019' },
    ]
  },
  {
    category: 'Urban',
    description: 'Architecture, cityscape moods, and neighborhood geometry.',
    photos: [
      { src: 'gallery/Dhaka-June2021.jpg', title: 'Monsoon Skyline over North Dhaka', location: 'Uttara, Dhaka', date: 'Jun 2021' },
      { src: 'gallery/Peelkhana-Dec2013.png', title: 'Historical Campus Perimeter', location: 'Dhanmondi, Dhaka', date: 'Dec 2013' },
    ]
  },
  {
    category: 'Systems & Builds',
    description: 'Pipelines, telemetry dashboards, and architecture diagrams from active projects.',
    photos: [
      { src: 'gallery/MLcodeSnippet.png', title: 'Modular Training Pipeline Architecture', location: 'Applied ML Project', date: 'Dec 2025' },
      { src: 'gallery/llm-data.png', title: 'Dataset Ingestion & Tokenizer Pipeline', location: 'LLM Fine-Tuning Workflow', date: 'Mar 2024' },
      { src: 'gallery/llm-model.png', title: 'Transformer Model Layer Composition', location: 'Architecture Experiment', date: 'Mar 2024' },
      { src: 'gallery/llm-train.png', title: 'Gradient Accumulation & Training Loop', location: 'Training Pipeline', date: 'Mar 2024' },
      { src: 'gallery/llm-metrics.png', title: 'Loss Convergence & Latency Profiling', location: 'Evaluation Dashboard', date: 'Mar 2024' },
    ]
  },
];

// Flat list for prev/next navigation
const allPhotos = gallerySections.flatMap(s => s.photos);

/* ── Image Viewer (Portal) ── */
function ImageViewer({ photo, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const touchStart = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(() =>
    allPhotos.findIndex(p => p.src === photo.src)
  );

  const current = allPhotos[currentIndex];

  const resetView = useCallback(() => { setZoom(1); setPan({ x: 0, y: 0 }); }, []);

  const goNext = useCallback(() => {
    setCurrentIndex(i => (i + 1) % allPhotos.length);
    resetView();
  }, [resetView]);

  const goPrev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + allPhotos.length) % allPhotos.length);
    resetView();
  }, [resetView]);

  const zoomIn = useCallback(() => setZoom(z => Math.min(z + 0.5, 5)), []);
  const zoomOut = useCallback(() => {
    setZoom(z => {
      const next = Math.max(z - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetView();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, goNext, goPrev, zoomIn, zoomOut, resetView]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Mouse wheel zoom
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  }, [zoomIn, zoomOut]);

  // Drag to pan (only when zoomed)
  const handlePointerDown = (e) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!dragging) return;
    setPan({
      x: panStart.current.x + (e.clientX - dragStart.current.x),
      y: panStart.current.y + (e.clientY - dragStart.current.y),
    });
  };
  const handlePointerUp = () => setDragging(false);

  // Swipe navigation for mobile
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;

    if (zoom === 1) {
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
    }
    touchStart.current = null;
  };

  return createPortal(
    <div className="iv-backdrop" onClick={onClose}>
      <div className="iv-container" onClick={e => e.stopPropagation()}>

        {/* Top bar */}
        <div className="iv-topbar">
          <div className="iv-info">
            <span className="iv-title">{current.title}</span>
            <span className="iv-meta">
              {current.location}{current.date ? ` · ${current.date}` : ''}
            </span>
          </div>
          <div className="iv-counter">
            {currentIndex + 1} / {allPhotos.length}
          </div>
          <button className="iv-close" onClick={onClose} title="Close (Esc)">×</button>
        </div>

        {/* Image area */}
        <div
          className="iv-image-area"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            src={current.src}
            alt={current.title}
            className="iv-image"
            draggable={false}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transition: dragging ? 'none' : 'transform 200ms ease',
            }}
          />
        </div>

        {/* Prev / Next arrows */}
        <button className="iv-arrow iv-arrow-left" onClick={goPrev} title="Previous (←)">‹</button>
        <button className="iv-arrow iv-arrow-right" onClick={goNext} title="Next (→)">›</button>

        {/* Bottom zoom bar */}
        <div className="iv-toolbar">
          <button className="iv-tool-btn" onClick={zoomOut} title="Zoom Out (-)">−</button>
          <span className="iv-zoom-label">{Math.round(zoom * 100)}%</span>
          <button className="iv-tool-btn" onClick={zoomIn} title="Zoom In (+)">+</button>
          <button className="iv-tool-btn" onClick={resetView} title="Reset (0)">⌂</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ── Gallery Page ── */

export default function Gallery() {
  const [viewerPhoto, setViewerPhoto] = useState(null);

  return (
    <div className="page">
      <h2 className="page-title">Pixels & Passion</h2>
      <div className="page-underline" />

      <p className="section-subtext">
        Snapshots from travels, moments, and the everyday — captured through my lens.
      </p>

      <div className="gallery-sections">
        {gallerySections.map((section, idx) => (
          <section key={section.category} className="gallery-section">
            <div className="gallery-section-header">
              <span className="gallery-section-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="gallery-section-text">
                <h3 className="gallery-section-title">{section.category}</h3>
                <p className="gallery-section-desc">{section.description}</p>
              </div>
              <span className="gallery-section-count">{section.photos.length} photos</span>
            </div>

            <div className="gallery-masonry">
              {section.photos.map((photo, pIdx) => (
                <div
                  key={photo.src}
                  className="gallery-card"
                  onClick={() => setViewerPhoto(photo)}
                  style={{ animationDelay: `${pIdx * 60}ms` }}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    loading="lazy" 
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-title">{photo.title}</span>
                    <span className="gallery-card-meta">
                      {photo.location}{photo.date ? ` · ${photo.date}` : ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {viewerPhoto && (
        <ImageViewer photo={viewerPhoto} onClose={() => setViewerPhoto(null)} />
      )}
    </div>
  );
}
