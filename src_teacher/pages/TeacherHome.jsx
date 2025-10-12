import React from 'react';
import { Link } from 'react-router-dom';
import { teacherData } from '../teacher-data';

const TeacherHome = () => {
  const teacher = teacherData.teacher;
  const classes = teacherData.classes;
  const students = teacherData.students;

  return (
    <div className="page-container">
      <div className="home-welcome">
        <h1 className="welcome-title">Welcome back, {teacher.name}!</h1>
        <p className="welcome-subtitle">Ready to inspire minds and shape the future?</p>
      </div>

      <div className="home-stats">
        <div className="stat-card teacher-stat">
          <div className="stat-number">{classes.length}</div>
          <div className="stat-label">Subjects Teaching</div>
        </div>
        <div className="stat-card teacher-stat">
          <div className="stat-number">{classes.reduce((total, cls) => total + cls.students, 0)}</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card teacher-stat">
          <div className="stat-number">{teacher.experience}</div>
          <div className="stat-label">Experience</div>
        </div>
        <Link to="/attendance" className="stat-card teacher-stat attendance-card">
          <div className="stat-number">📷</div>
          <div className="stat-label">Auto Attendance</div>
          <div className="stat-subtitle">Click to start</div>
        </Link>
      </div>

      <div className="teacher-quick-info">
        <div className="detail-card">
          <h4>Today's Classes</h4>
          <div className="today-classes">
            <div className="class-item">
              <div className="class-time">10:00 - 11:00</div>
              <div className="class-details">
                <div className="class-subject">Data Structures</div>
                <div className="class-info">Sem III • IT-103 • 42 Students</div>
              </div>
            </div>
            <div className="class-item">
              <div className="class-time">02:00 - 04:00</div>
              <div className="class-details">
                <div className="class-subject">Machine Learning Lab</div>
                <div className="class-info">Sem V • IT-Lab 2 • 35 Students</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <h4>Recent Students Performance</h4>
          <div className="recent-students">
            {students.slice(0, 3).map((student, index) => (
              <div key={index} className="student-item">
                <div className="student-info">
                  <div className="student-name">{student.name}</div>
                  <div className="student-details">{student.rollNo} • Sem {student.semester}</div>
                </div>
                <div className="student-attendance">
                  <span className={`attendance-badge ${student.attendance >= 90 ? 'good' : student.attendance >= 75 ? 'average' : 'poor'}`}>
                    {student.attendance}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-card">
        <h4>Quick Actions</h4>
        <p>Access your teaching tools and student management features from the navigation menu above.</p>
        <div style={{ marginTop: 'var(--space-16)', display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap' }}>
          <Link to="/dashboard" className="btn btn--primary">
            View Dashboard
          </Link>
          <Link to="/attendance" className="btn btn--secondary">
            📷 Start Auto Attendance
          </Link>
          <Link to="/notifications" className="btn btn--outline">
            Check Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;