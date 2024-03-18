import React from 'react';
import { useNavigate } from "react-router-dom";

const SevaMaster = () => {
    let navigate = useNavigate();
  return (
    <div>
      <h1>Seva Master</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default SevaMaster;
