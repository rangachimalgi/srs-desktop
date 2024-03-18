import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/FloatingHomeButton.css";

const FloatingHomeButton = () => {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')} className="home-button">
      Home
    </button>
  );
};

export default FloatingHomeButton;
