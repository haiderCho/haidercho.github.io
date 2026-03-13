import { FaIdCard, FaUser, FaFileAlt, FaCode, FaBriefcase, FaRss, FaEnvelope, FaImages } from 'react-icons/fa';

const navItems = [
  { name: 'Profile', icon: <FaIdCard /> },
  { name: 'About', icon: <FaUser /> },
  { name: 'Resume', icon: <FaFileAlt /> },
  { name: 'Tech Stack', icon: <FaCode /> },
  { name: 'Portfolio', icon: <FaBriefcase /> },
  { name: 'Blog', icon: <FaRss /> },
  { name: 'Contact', icon: <FaEnvelope /> },
  { name: 'Gallery', icon: <FaImages /> }
];


export default function BottomNav({ activePage, setActivePage }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`bottom-nav-link${activePage === item.name ? ' active' : ''}`}
          onClick={() => setActivePage(item.name)}
        >
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.name}</span>
        </button>
      ))}
    </nav>
  );
}
