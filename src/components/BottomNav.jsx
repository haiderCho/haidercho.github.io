import { useState, useEffect, useRef } from 'react';
import { 
  HiOutlineUserCircle, 
  HiOutlineDocumentText, 
  HiOutlineCommandLine, 
  HiOutlineSparkles, 
  HiOutlineSquares2X2,
  HiOutlineRss,
  HiOutlinePhoto,
  HiOutlineEnvelope
} from 'react-icons/hi2';

const mainNavItems = [
  { name: 'About', icon: <HiOutlineUserCircle /> },
  { name: 'Resume', icon: <HiOutlineDocumentText /> },
  { name: 'Tech Stack', icon: <HiOutlineCommandLine /> },
  { name: 'Portfolio', icon: <HiOutlineSparkles /> }
];

const secondaryNavItems = [
  { name: 'Blog', icon: <HiOutlineRss /> },
  { name: 'Gallery', icon: <HiOutlinePhoto /> },
  { name: 'Contact', icon: <HiOutlineEnvelope /> }
];

export default function BottomNav({ activePage, setActivePage }) {
  const [showMore, setShowMore] = useState(false);
  const [isShrunken, setIsShrunken] = useState(false);
  
  // Performance optimization: Use refs for scroll position and state inside scroll listener
  // to avoid tearing down and re-binding the window scroll event listener on every scroll frame.
  const lastScrollY = useRef(0);
  const showMoreRef = useRef(showMore);
  showMoreRef.current = showMore;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only shrink if we've scrolled more than 50px
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling Down -> Shrink
          setIsShrunken(true);
        } else {
          // Scrolling Up -> Expand
          setIsShrunken(false);
        }
      } else {
        // At the top -> Always Expand
        setIsShrunken(false);
      }
      
      lastScrollY.current = currentScrollY;
      
      // Close more menu on scroll
      if (showMoreRef.current) setShowMore(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageName) => {
    setActivePage(pageName);
    setShowMore(false);
    setIsShrunken(false); // Expand when navigating
  };

  return (
    <>
      {/* More Menu Overlay */}
      <div className={`bottom-more-menu ${showMore ? 'active' : ''}`}>
        {secondaryNavItems.map((item) => (
          <button
            key={item.name}
            className={`more-nav-link${activePage === item.name ? ' active' : ''}`}
            onClick={() => handleNavClick(item.name)}
          >
            <span className="more-nav-icon">{item.icon}</span>
            <span className="more-nav-label">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Main Dock (Interactive Island) */}
      <nav className={`bottom-nav theme-${activePage.toLowerCase().replace(' ', '-')} ${isShrunken ? 'shrunken' : ''}`} aria-label="Mobile Navigation">
        {isShrunken ? (
          /* In shrunken mode, find and show the active icon from either list */
          <button className="bottom-nav-link active" aria-label={`Current active page: ${activePage}`}>
            <span className="bottom-nav-icon">
              {[...mainNavItems, ...secondaryNavItems].find(item => item.name === activePage)?.icon || <HiOutlineUserCircle />}
            </span>
          </button>
        ) : (
          /* In expanded mode, show main items + more trigger */
          <>
            {mainNavItems.map((item) => (
              <button
                key={item.name}
                className={`bottom-nav-link${activePage === item.name ? ' active' : ''}`}
                onClick={() => handleNavClick(item.name)}
                aria-label={item.name}
              >
                <span className="bottom-nav-icon">{item.icon}</span>
                <span className="bottom-nav-label">{item.name}</span>
              </button>
            ))}
            
            <button 
              className={`bottom-nav-link more-trigger${showMore ? ' active' : ''}`}
              onClick={() => setShowMore(!showMore)}
              aria-label="More navigation options"
              aria-expanded={showMore}
            >
              <span className="bottom-nav-icon"><HiOutlineSquares2X2 /></span>
              <span className="bottom-nav-label">More</span>
            </button>
          </>
        )}
      </nav>

      {/* Backdrop for the menu */}
      {showMore && <div className="bottom-nav-backdrop" onClick={() => setShowMore(false)}></div>}
    </>
  );
}
