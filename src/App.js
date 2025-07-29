import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import './components/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    // Auto dismiss alert after 1.5 seconds
    if (window.alertTimeout) clearTimeout(window.alertTimeout);
    window.alertTimeout = setTimeout(() => setAlert(null), 1500);
  };

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<TextForm darkMode={darkMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
