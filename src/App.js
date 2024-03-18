import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MasterEntries from "./pages/MasterEntries.js";
import Ubhayam from "./pages/Ubhayam.js";
import Reports from "./pages/Reports.js";
import GotramMaster from "./pages/GotramMaster.js";
import SevaMaster from "./pages/SevaMaster.js";
import FloatingHomeButton from "./components/FloatingHomeButton.js";
import "./styles/Navigation.css";
import CreateReceipt from "./pages/CreateReceipt.js";
import DeleteReceipt from "./pages/DeleteReceipt.js";
import DuplicateReceipt from "./pages/DuplicateReceipt.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/master-entries" element={<MasterEntries />} />
          <Route
            path="/master-entries/gotram-master"
            element={<GotramMaster />}
          />
          <Route path="/master-entries/seva-master" element={<SevaMaster />} />
          <Route path="/ubhayam" element={<Ubhayam />} />
          <Route path="/ubhayam/create-receipt" element={<CreateReceipt />} />
          <Route path="/ubhayam/delete-receipt" element={<DeleteReceipt />} />
          <Route
            path="/ubhayam/duplicate-receipt"
            element={<DuplicateReceipt />}
          />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        <FloatingHomeButton />
      </div>
    </Router>
  );
};

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null); // null, 'masterEntries', 'ubhayam', 'reports'
  const location = useLocation();

  const showDropdown = (menuName) => {
    setActiveMenu(menuName);
  };

  const hideDropdown = () => {
    setActiveMenu(null);
  };

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <nav className="nav-bar">
      <ul>
        <li
          onMouseEnter={() => showDropdown("masterEntries")}
          onMouseLeave={hideDropdown}
        >
          <Link to="/master-entries">Master Entries</Link>
          {activeMenu === "masterEntries" && (
            <div className="dropdown">
              <Link to="/master-entries/gotram-master">Gotram Master</Link>
              <Link to="/master-entries/seva-master">Seva Master</Link>
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => showDropdown("ubhayam")}
          onMouseLeave={hideDropdown}
        >
          <Link to="/ubhayam">Ubhayam</Link>
          {activeMenu === "ubhayam" && (
            <div className="dropdown">
              <Link to="/ubhayam/create-receipt">Create Receipt</Link>
              <Link to="/ubhayam/delete-receipt">Delete Receipt</Link>
              <Link to="/ubhayam/duplicate-receipt">Duplicate Receipt</Link>
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => showDropdown("reports")}
          onMouseLeave={hideDropdown}
        >
          <Link to="/reports">Reports</Link>
          {activeMenu === "reports" && (
            <div className="dropdown">
              <Link to="/reports/ubhayam-sevas">Ubhayam Sevas</Link>
              <Link to="/reports/ubhayam-collections">Ubhayam Collections</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

const Home = () => (
  <>
    <h1>Welcome to the Home Page</h1>
    {/* Render any additional home page content here */}
  </>
);

export default App;
