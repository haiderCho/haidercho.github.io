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

const pages = ['About', 'Resume', 'Tech Stack', 'Portfolio', 'Blog', 'Contact', 'Gallery'];

export default function App() {
  const [activePage, setActivePage] = useState('About');

  useEffect(() => {
    document.title = `${activePage} | Nafiz Haider Chowdhury`;
    
    const handleResize = () => {
      // Logic for cross-platform state sync if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePage]);


  const renderPage = () => {
    switch (activePage) {
      case 'About': 
        return (
          <>
            {window.innerWidth <= 768 && <div className="mobile-profile-view"><Sidebar /></div>}
            <About />
          </>
        );
      case 'Resume': return <Resume />;
      case 'Portfolio': return <Portfolio />;
      case 'Blog': return <Blog />;
      case 'Contact': return <Contact />;
      case 'Gallery': return <Gallery />;
      case 'Tech Stack': return <TechStack />;
      default: return <About />;
    }
  };

  return (
    <div className={`app-layout ${activePage === 'About' && window.innerWidth <= 768 ? 'profile-active' : ''}`}>
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

