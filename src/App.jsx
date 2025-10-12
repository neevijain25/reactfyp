import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import teacher components only
import TeacherHome from './pages/TeacherHome';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherNotifications from './pages/TeacherNotifications';
import TeacherAccount from './pages/TeacherAccount';
import AutomatedAttendance from './pages/AutomatedAttendance';

// Teacher Header Component - Now with real images
const TeacherHeader = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="college-info">
          {/* SVKM logo on the left */}
          <div className="left-logo">
            <img
              src="/svkm.png"
              alt="SVKM Logo"
              className="header-logo-img svkm-logo"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-placeholder svkm-logo" style={{ display: 'none' }}>SVKM</div>
          </div>
          
          {/* College name in the center */}
          <div className="college-name">
            <h1>SHRI VILE PARLE KELAVANI MANDAL'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING</h1>
          </div>
          
          {/* Bhagubhai logo on the right */}
          <div className="right-logo">
            <img
              src="/bhagubhai.png"
              alt="Bhagubhai Mafatlal Logo"
              className="header-logo-img bhagubhai-logo"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-placeholder bhagubhai-logo" style={{ display: 'none' }}>BMPCE</div>
          </div>
        </div>
        
        {/* Navigation menu */}
        <nav className="nav-menu">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/dashboard" className="nav-item">DASHBOARD</Link>
          <Link to="/attendance" className="nav-item">AUTO ATTENDANCE</Link>
          <Link to="/account" className="nav-item">ACCOUNT</Link>
          <Link to="/notifications" className="nav-item">NOTIFICATIONS</Link>
          <button className="logout-btn" onClick={() => alert('Logout clicked!')}>LOGOUT</button>
        </nav>
      </div>
    </header>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <TeacherHeader />
        <Routes>
          <Route path="/" element={<TeacherHome />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/attendance" element={<AutomatedAttendance />} />
          <Route path="/account" element={<TeacherAccount />} />
          <Route path="/notifications" element={<TeacherNotifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;