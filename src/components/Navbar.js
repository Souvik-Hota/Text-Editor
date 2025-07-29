import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
    setInterval(() => {
      document.title = 'Spy28';           /* Spy28 Upper */
    },2000);   
    // setInterval(() => {
    //   document.title = 'Loading...';           /* Spy28 Upper */ ------><-------
    // },1500); 
   
  };

  return (
    <nav className={`navbar navbar-expand-md ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navbar-word">
          Spy28
        </Link>

        <div className="d-flex">
          <Link to="/about" className="btn btn-outline-info me-3">
            About
          </Link>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkNativeSwitch"
              onChange={handleToggle}
              checked={darkMode}
            />
            <label
               className={`form-check-label ${darkMode ? 'text-light' : 'text-dark'}`} htmlFor="checkNativeSwitch"> {darkMode ? 'Dark Mode' : 'Light Mode'}
          </label>

          </div>
        </div>
      </div>
    </nav>
  );
}
