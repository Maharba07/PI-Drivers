import React from 'react';
import { Link } from 'react-router-dom';
import './landing.styles.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>WELCOME TO MY PAGE</h1>
      <Link to="/home">
        <button className="landing-button">READY TO DRIVE?</button>
      </Link>
    </div>
  );
}

export default LandingPage;