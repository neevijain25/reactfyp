import React from 'react';
import { Link } from 'react-router-dom';
import { sampleData } from '../App';

const Home = () => {
  const student = sampleData.student;
  const attendance = sampleData.attendance;

  return (
    <div className="page-container">
      <div className="home-welcome">
        <h1 className="welcome-title">Welcome back, {student.name}!</h1>
        <p className="welcome-subtitle">Ready to continue your learning journey?</p>
      </div>

      <div className="home-stats">
        <div className="stat-card">
          <div className="stat-number">{student.semester}</div>
          <div className="stat-label">Current Semester</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{attendance.percentage}%</div>
          <div className="stat-label">Attendance Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-label">Subjects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-label">Pending Assignments</div>
        </div>
      </div>

      <div className="detail-card">
        <h4>Quick Access</h4>
        <p>Navigate through your academic information using the menu above. Check your attendance, view your timetable, or update your profile information.</p>
        <div style={{ marginTop: 'var(--space-16)' }}>
          <Link to="/academic" className="btn btn--primary" style={{ marginRight: 'var(--space-16)' }}>
            View Academic Details
          </Link>
          <Link to="/notifications" className="btn btn--outline">
            Check Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;