import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Sample data with updated college name
const sampleData = {
  student: {
    name: "Vanshika Yadav",
    rollNo: "T034",
    sapId: "57498230037",
    semester: "V",
    department: "I.T.",
    dateOfBirth: "30-09-2007",
    religion: "HINDU",
    bloodGroup: "B+",
    motherTongue: "GUJARATI",
    email: "yadavvanshika3097@gmail.com",
    phone: "877939XXXX",
    address: "Borivali",
    profileImage: null
  },
  college: {
    name: "SHRI VILE PARLE KELAVANI MANDAL'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING",
    fullName: "SHRI VILE PARLE KELAVANI MANDAL'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING"
  }
};

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="college-info">
          {/* SVKM logo on the left */}
          <div className="left-logo">
            <img
              src="/svkm.png" /* Your SVKM logo in public folder */
              alt="SVKM Logo"
              className="header-logo-img svkm-logo"
            />
          </div>
          
          {/* College name in the center */}
          <div className="college-name">
            <h1>{sampleData.college.name}</h1>
          </div>
          
          {/* Bhagubhai logo on the right */}
          <div className="right-logo">
            <img
              src="/bhagubhai.png" /* Your Bhagubhai logo in public folder */
              alt="Bhagubhai Mafatlal Logo"
              className="header-logo-img bhagubhai-logo"
            />
          </div>
        </div>
        
        {/* Navigation menu */}
        <nav className="nav-menu">
          <Link to="/" className={isActive('/')}>HOME</Link>
          <Link to="/account" className={isActive('/account')}>ACCOUNT</Link>
          <Link to="/academic" className={isActive('/academic')}>ACADEMIC</Link>
          <Link to="/notifications" className={isActive('/notifications')}>NOTIFICATIONS</Link>
          <button className="logout-btn" onClick={() => alert('Logout clicked!')}>LOGOUT</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;