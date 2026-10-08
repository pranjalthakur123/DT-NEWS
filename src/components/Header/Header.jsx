import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header>

      {/* Topbar */}
      <div className="topbar">

        <div className="topbar-left">
          <span>{formattedDate}</span>
          <Link to="#">Advertise</Link>
          <Link to="/contact">Contact</Link>
          <Link to="#">Login</Link>
        </div>

        <div className="topbar-social">
          <Link to="#"><i className="fab fa-twitter"></i></Link>
          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-google-plus-g"></i></Link>
          <Link to="#"><i className="fab fa-youtube"></i></Link>
        </div>

      </div>

      {/* Logo + Advertisement */}
      <div className="brand-section">

        <Link to="/" className="brand-logo">
          <img
            src={logo}
            alt="DT News"
          />
        </Link>

        <a
          href="https://portfolio-seven-rose-40.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="header-ad"
        >
        </a>

      </div>

      {/* Navigation */}
      <nav className="main-nav">

        {/* Mobile Logo */}
        <Link to="/" className="mobile-logo">
          <img
            src="/src/assets/logo.jpg"
            alt="DT News"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/category" onClick={() => setMenuOpen(false)}>
            Sports
          </Link>

          <Link to="/category" onClick={() => setMenuOpen(false)}>
            Politics
          </Link>

          <Link to="/single" onClick={() => setMenuOpen(false)}>
            Single News
          </Link>

          <div className="nav-dropdown">
            <Link to="#">Dropdown</Link>

            <div className="dropdown-menu">
  <Link to="#">Politics</Link>
  <Link to="#">Business</Link>
  <Link to="#">Corporate Business</Link>
  <Link to="#">Health</Link>
  <Link to="#">Education</Link>
  <Link to="#">Science</Link>
  <Link to="#">Foods</Link>
  <Link to="#">Entertainment</Link>
  <Link to="#">Travel & Lifestyle</Link>
</div>
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>

        {/* Search */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Keyword"
          />

          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>

      </nav>

    </header>
  );
}

export default Header;