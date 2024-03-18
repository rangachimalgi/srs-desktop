import React from 'react';
import { useNavigate } from 'react-router-dom';

function Ubhayam() {
    let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Go Back</button>
      <h1>Ubhayam</h1>
    </div>
  );
}

export default Ubhayam;
