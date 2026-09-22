import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineDocumentText, 
  HiOutlineCodeBracket, 
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlinePhoto,
  HiOutlineEnvelope,
  HiOutlineXMark,
  HiOutlineChevronRight
} from 'react-icons/hi2';

const mainNavItems = [
  { name: 'Portfolio', icon: <HiOutlineBriefcase /> },
  { name: 'Resume', icon: <HiOutlineDocumentText /> },
  { name: 'About', icon: <HiOutlineUser /> },
  { name: 'Tech Stack', icon: <HiOutlineCodeBracket /> }
];

const secondaryNavItems = [
  { name: 'Blog', icon: <HiOutlineBookOpen />, desc: 'Articles & Writeups' },
  { name: 'Gallery', icon: <HiOutlinePhoto />, desc: 'Photographs & Visuals' },
  { name: 'Contact', icon: <HiOutlineEnvelope />, desc: 'Get in Touch' }
];

/**
 * Generates an SVG path for the navigation dock with a fluid scooped notch
 * and elevated wave shoulders around the active item.
 */
function getFluidDockPath(width, height, radius, notchX) {
  if (notchX == null || width <= 0) {
    return `M ${radius} 0 L ${width - radius} 0 Q ${width} 0 ${width} ${radius} L ${width} ${height - radius} Q ${width} ${height} ${width - radius} ${height} L ${radius} ${height} Q 0 ${height} 0 ${height - radius} L 0 ${radius} Q 0 0 ${radius} 0 Z`;
  }

  const p1x = notchX - 42;
  const c1x = notchX - 26;
  const c1y = -6; // raised shoulder crest
  const botX = notchX;
  const botY = 28; // scoop depth under the floating circle
  const c2x = notchX + 26;
  const c2y = -6;
  const p2x = notchX + 42;

  const leftX = Math.max(radius, p1x);
  const rightX = Math.min(width - radius, p2x);

  return [
    `M ${radius} 0`,
    `L ${leftX} 0`,
    `C ${notchX - 34} 0, ${notchX - 30} ${c1y}, ${c1x} ${c1y}`,
    `C ${notchX - 16} ${c1y}, ${notchX - 16} ${botY}, ${botX} ${botY}`,
    `C ${notchX + 16} ${botY}, ${notchX + 16} ${c2y}, ${c2x} ${c2y}`,
    `C ${notchX + 30} ${c2y}, ${notchX + 34} 0, ${rightX} 0`,
    `L ${width - radius} 0`,
    `Q ${width} 0 ${width} ${radius}`,
    `L ${width} ${height - radius}`,
    `Q ${width} ${height} ${width - radius} ${height}`,
    `L ${radius} ${height}`,
    `Q 0 ${height} 0 ${height - radius}`,
    `L 0 ${radius}`,
    `Q 0 0 ${radius} 0`,
    `Z`
  ].join(' ');
}

export default function BottomNav({ activePage, setActivePage }) {
  const [showMore, setShowMore] = useState(false);
  const activeSecondaryItem = secondaryNavItems.find(item => item.name === activePage);
  const isSecondaryActive = Boolean(activeSecondaryItem);

  const activeIndex = useMemo(() => {
    const mainIndex = mainNavItems.findIndex(item => item.name === activePage);
    if (mainIndex !== -1) return mainIndex;
    return 4; // Slot 5 for 'More' or active secondary page
  }, [activePage]);

  const navRef = useRef(null);
  const [dockWidth, setDockWidth] = useState(390);

  // Measure dock width dynamically
  useEffect(() => {
    if (!navRef.current) return;
    const updateSize = () => {
      const w = navRef.current.offsetWidth;
      if (w > 0) setDockWidth(w);
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  const dockHeight = 68;
  const dockRadius = 22;
  const padding = 12;
  const innerWidth = dockWidth - (padding * 2);
  const itemWidth = innerWidth / 5;

  const targetX = padding + (activeIndex + 0.5) * itemWidth;
  const [animatedX, setAnimatedX] = useState(targetX);
  const currentXRef = useRef(targetX);

  // Animate the scoop and floating circle with smooth cubic ease
  useEffect(() => {
    const startX = currentXRef.current;
    if (Math.abs(targetX - startX) < 0.5) {
      setAnimatedX(targetX);
      currentXRef.current = targetX;
      return;
    }

    let animId;
    const startTime = performance.now();
    const duration = 380;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextX = startX + (targetX - startX) * easeOutCubic(progress);
      setAnimatedX(nextX);
      currentXRef.current = nextX;

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [targetX]);

  // Close drawer on scroll
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

  const handleMoreClick = () => {
    setShowMore(prev => !prev);
  };

  const activeItemData = useMemo(() => {
    if (activeIndex < 4) {
      return mainNavItems[activeIndex];
    }
    return {
      name: isSecondaryActive ? activePage : 'More',
      icon: activeSecondaryItem ? activeSecondaryItem.icon : <HiOutlineSquares2X2 />
    };
  }, [activeIndex, activePage, activeSecondaryItem, isSecondaryActive]);

  return (
    <>
      {/* Backdrop for the drawer */}
      <div 
        className={`bottom-nav-backdrop ${showMore ? 'active' : ''}`} 
        onClick={() => setShowMore(false)}
        aria-hidden={!showMore}
      />

      {/* Modern Popover Drawer matching the liquid dock */}
      <div 
        className={`bottom-more-drawer ${showMore ? 'active' : ''}`} 
        role="dialog" 
        aria-label="More navigation links"
      >
        <div className="drawer-drag-handle" aria-hidden="true" />
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-title">More Pages</span>
            <span className="drawer-subtitle">Explore articles, photos & contact</span>
          </div>
          <button 
            className="drawer-close" 
            onClick={() => setShowMore(false)} 
            aria-label="Close menu"
          >
            <HiOutlineXMark />
          </button>
        </div>
        <div className="drawer-grid">
          {secondaryNavItems.map((item) => {
            const isItemActive = activePage === item.name;
            return (
              <button
                key={item.name}
                className={`drawer-link ${isItemActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.name)}
              >
                <div className="drawer-icon-wrap">
                  {item.icon}
                </div>
                <div className="drawer-text">
                  <span className="drawer-name">{item.name}</span>
                  <span className="drawer-desc">{item.desc}</span>
                </div>
                <HiOutlineChevronRight className="drawer-chevron" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Curved Fluid Bottom Navigation Dock */}
      <nav 
        ref={navRef}
        className="curved-bottom-nav" 
        aria-label="Mobile Navigation"
      >
        {/* The True Hollow Cutout SVG Dock */}
        <svg 
          className="curved-dock-svg" 
          width={dockWidth} 
          height={dockHeight} 
          viewBox={`0 0 ${dockWidth} ${dockHeight}`}
          aria-hidden="true"
        >
          <path 
            d={getFluidDockPath(dockWidth, dockHeight, dockRadius, animatedX)} 
            fill="#111116" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1.2"
          />
        </svg>

        {/* Elevated Floating White Circular Badge */}
        <div 
          className="curved-floating-badge" 
          style={{ left: `${animatedX}px` }}
          aria-hidden="true"
        >
          <span className="curved-badge-icon" key={activeItemData.name}>
            {activeItemData.icon}
          </span>
        </div>

        {/* Active Label inside the scoop dip */}
        <span 
          className="curved-active-label" 
          style={{ left: `${animatedX}px` }}
          aria-hidden="true"
        >
          {activeItemData.name}
        </span>

        {/* Slot Buttons */}
        <ul className="curved-nav-list">
          {mainNavItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li 
                key={item.name} 
                className={`curved-nav-item ${isActive ? 'active' : ''}`}
              >
                <button
                  className="curved-nav-link"
                  onClick={() => handleNavClick(item.name)}
                  aria-label={item.name}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="curved-slot-icon">{item.icon}</span>
                </button>
              </li>
            );
          })}

          {/* Slot 5: More / Active Secondary Page */}
          <li className={`curved-nav-item ${activeIndex === 4 ? 'active' : ''}`}>
            <button 
              className={`curved-nav-link more-trigger ${showMore ? 'open' : ''}`}
              onClick={handleMoreClick}
              aria-label={isSecondaryActive ? activePage : 'More pages'}
              aria-expanded={showMore}
              aria-current={activeIndex === 4 ? 'page' : undefined}
            >
              <span className="curved-slot-icon">
                {activeSecondaryItem ? activeSecondaryItem.icon : <HiOutlineSquares2X2 />}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
