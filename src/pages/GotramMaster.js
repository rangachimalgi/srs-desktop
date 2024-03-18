import React from 'react';
import { useNavigate } from "react-router-dom";

const GotramMaster = () => {
    let navigate = useNavigate();
  return (
    <div>
      <h1>Gotram Master</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default GotramMaster;
