import './css/top.css';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <Link to="#home" smooth={true} duration={1000}>
      <button className={`back-to-top-btn ${isVisible ? 'visible' : ''}`} title="Go to top">
        ↑
      </button>
    </Link>
  );
}
