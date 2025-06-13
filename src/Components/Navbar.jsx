import { useState, useEffect } from 'react';
import '../CssPage/Navbar.css';
import Logo from '../assets/Logo.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="Navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="brand">ProVital</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <div className="mobile-logo">
            <img src={Logo} alt="Logo" className="logo" />
            <span className="brand">ProVital</span>
          </div>
          <div className="close-btn" onClick={() => setMenuOpen(false)}>&times;</div>
        </div>

        <div className="auth-row">
          <span><strong>Doctor</strong></span>
          <span>
            <a href="#">Login</a> | <a href="#">Signup</a>
          </span>
        </div>

        <div className="auth-row">
          <span><strong>Patients</strong></span>
          <span>
            <a href="#">Login</a> | <a href="#">Signup</a>
          </span>
        </div>

        <hr />

        <li>List your practice <span className="arrow">→</span></li>
        <li>For Employers<span className="arrow">→</span></li>
        <li>Courses  <span className="arrow">→</span></li>
        <li>Books  <span className="arrow">→</span></li>
        <li>Speakers <span className="arrow">→</span></li>


        <li className="dropdown">
          Login / Signup <RiArrowDropDownLine className="dropdown-logo" />
          <div className="dropdown-content">
            <div><strong style={{ color: 'black' }}>Doctor</strong> <a href="#">Login</a> | <a href="#">Signup</a></div>
            <hr style={{ color: 'gray' }} />
            <div><strong style={{ color: 'black' }}>Patients</strong> <a href="#">Login</a> | <a href="#">Signup</a></div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
