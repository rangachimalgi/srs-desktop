import React from 'react';
import { useNavigate } from 'react-router-dom';

function Reports() {
    let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Go Back</button>
      <h1>Reports</h1>
    </div>
  );
}

export default Reports;
