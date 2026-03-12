import { useState } from 'react';
import Sidebar from './components/Sidebar';
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

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <About />;
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
    <div className="app-layout">
      <Sidebar />
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
        <div key={activePage} className="animate-enter">
          {renderPage()}
        </div>
        <footer className="footer">
          © 2026 Nafiz Haider Chowdhury | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
