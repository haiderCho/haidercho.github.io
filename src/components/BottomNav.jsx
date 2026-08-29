import { useState, useEffect, useRef } from 'react';
import { 
  HiOutlineUserCircle, 
  HiOutlineDocumentText, 
  HiOutlineCommandLine, 
  HiOutlineSparkles, 
  HiOutlineSquares2X2,
  HiOutlineRss,
  HiOutlinePhoto,
  HiOutlineEnvelope,
  HiOutlineXMark
} from 'react-icons/hi2';

const mainNavItems = [
  { name: 'About', icon: <HiOutlineUserCircle /> },
  { name: 'Resume', icon: <HiOutlineDocumentText /> },
  { name: 'Tech Stack', icon: <HiOutlineCommandLine /> },
  { name: 'Portfolio', icon: <HiOutlineSparkles /> }
];

const secondaryNavItems = [
  { name: 'Blog', icon: <HiOutlineRss />, desc: 'Articles & Writeups' },
  { name: 'Gallery', icon: <HiOutlinePhoto />, desc: 'Photographs & Shots' },
  { name: 'Contact', icon: <HiOutlineEnvelope />, desc: 'Get in Touch' }
];

export default function BottomNav({ activePage, setActivePage }) {
  const [showMore, setShowMore] = useState(false);
  const isSecondaryActive = secondaryNavItems.some(item => item.name === activePage);

  useEffect(() => {
    const handleScroll = () => {
      if (showMore) setShowMore(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMore]);

  const handleNavClick = (pageName) => {
    setActivePage(pageName);
    setShowMore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Backdrop for the drawer */}
      <div 
        className={`bottom-nav-backdrop ${showMore ? 'active' : ''}`} 
        onClick={() => setShowMore(false)}
        aria-hidden={!showMore}
      />

      {/* More Menu Popover Drawer */}
      <div className={`bottom-more-drawer ${showMore ? 'active' : ''}`} role="dialog" aria-label="More navigation links">
        <div className="drawer-header">
          <span className="drawer-title">More Pages</span>
          <button className="drawer-close" onClick={() => setShowMore(false)} aria-label="Close menu">
            <HiOutlineXMark />
          </button>
        </div>
        <div className="drawer-grid">
          {secondaryNavItems.map((item) => (
            <button
              key={item.name}
              className={`drawer-link ${activePage === item.name ? 'active' : ''}`}
              onClick={() => handleNavClick(item.name)}
            >
              <span className="drawer-icon">{item.icon}</span>
              <div className="drawer-text">
                <span className="drawer-name">{item.name}</span>
                <span className="drawer-desc">{item.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Floating Dock */}
      <nav className={`bottom-nav theme-${activePage.toLowerCase().replace(' ', '-')}`} aria-label="Mobile Navigation">
        {mainNavItems.map((item) => (
          <button
            key={item.name}
            className={`bottom-nav-link ${activePage === item.name ? 'active' : ''}`}
            onClick={() => handleNavClick(item.name)}
            aria-label={item.name}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.name}</span>
          </button>
        ))}
        
        <button 
          className={`bottom-nav-link more-trigger ${showMore || isSecondaryActive ? 'active' : ''}`}
          onClick={() => setShowMore(!showMore)}
          aria-label="More navigation options"
          aria-expanded={showMore}
        >
          <span className="bottom-nav-icon"><HiOutlineSquares2X2 /></span>
          <span className="bottom-nav-label">{isSecondaryActive ? activePage : 'More'}</span>
        </button>
      </nav>
    </>
  );
}
