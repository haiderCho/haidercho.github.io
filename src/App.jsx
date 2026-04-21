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
  'About': <About />,
  'Resume': <Resume />,
  'Tech Stack': <TechStack />,
  'Portfolio': <Portfolio />,
  'Blog': <Blog />,
  'Contact': <Contact />,
  'Gallery': <Gallery />
};

const pages = Object.keys(PAGES_CONFIG);

export default function App() {
  const [activePage, setActivePage] = useState('About');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = `${activePage} | Nafiz Haider Chowdhury`;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePage]);


  const renderPage = () => {
    const Component = PAGES_CONFIG[activePage] || <About />;
    
    if (activePage === 'About' && windowWidth <= 768) {
      return (
        <>
          <div className="mobile-profile-view"><Sidebar /></div>
          {Component}
        </>
      );
    }
    
    return Component;
  };

  return (
    <div className={`app-layout ${activePage === 'About' && windowWidth <= 768 ? 'profile-active' : ''}`}>
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-content">
        <nav className="nav">
          {pages.map((page) => (
            <button
              key={page}
              className={`nav-link${activePage === page ? ' active' : ''}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </nav>
        <div className="page-wrapper">
          <div className="page-transition-wrapper" key={activePage}>
            {renderPage()}
          </div>
        </div>
        <footer className="footer">
          © 2026 Nafiz Haider Chowdhury | All Rights Reserved
        </footer>
      </div>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

