import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TechStack from './pages/TechStack';

const PAGES_CONFIG = {
  'About': About,
  'Resume': Resume,
  'Tech Stack': TechStack,
  'Portfolio': Portfolio,
  'Blog': Blog,
  'Contact': Contact,
  'Gallery': Gallery,
};

const pages = Object.keys(PAGES_CONFIG);

export default function App() {
  const [activePage, setActivePage] = useState('About');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update document title when page changes
  useEffect(() => {
    document.title = `${activePage} | Nafiz Haider Chowdhury`;
  }, [activePage]);

  // Track window width for mobile layout
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    const PageComponent = PAGES_CONFIG[activePage];

    if (activePage === 'About' && windowWidth <= 768) {
      return (
        <>
          <div className="mobile-profile-view"><Sidebar /></div>
          <PageComponent />
        </>
      );
    }

    return <PageComponent />;
  };

  return (
    <div className={`app-layout ${activePage === 'About' && windowWidth <= 768 ? 'profile-active' : ''}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <main className="main-content" id="main-content" tabIndex="-1">
        <nav className="nav" aria-label="Main Navigation" role="tablist">
          {pages.map((page) => {
            const isSelected = activePage === page;
            const tabId = `tab-${page.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <button
                key={page}
                id={tabId}
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                className={`nav-link${isSelected ? ' active' : ''}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            );
          })}
        </nav>
        <div className="page-wrapper" role="tabpanel" aria-labelledby={`tab-${activePage.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="page-transition-wrapper" key={activePage}>
            {renderPage()}
          </div>
        </div>
        <footer className="footer">
          © 2026 Nafiz Haider Chowdhury | All Rights Reserved
        </footer>
      </main>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
