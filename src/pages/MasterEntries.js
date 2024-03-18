import React from "react";
import { useNavigate, Link } from "react-router-dom";

function MasterEntries() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Master Entries</h1>
      <nav>
        <ul>
          <li>
            <Link to="/master-entries/gotram-master">Gotram Master (Add Gotras)</Link>
          </li>
          <li>
            <Link to="/master-entries/seva-master">Seva Master (Add Seva)</Link>
          </li>
        </ul>
      </nav>
      {/* Your content for Master Entries */}
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default MasterEntries;
