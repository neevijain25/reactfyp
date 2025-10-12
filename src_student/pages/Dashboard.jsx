import React, { useState } from 'react';
import { sampleData,timetables } from '../App';

// Student Profile Component
const StudentProfile = () => {
  const student = sampleData.student;
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="student-profile">
      <div className="profile-image">
        {getInitials(student.name)}
      </div>
      <div className="profile-info">
        <h2 className="student-name">{student.name}</h2>
      </div>
      <div className="student-details">
        <div className="detail-row">
          <span className="detail-label">Roll No:</span>
          <span className="detail-value">{student.rollNo}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">SAP ID:</span>
          <span className="detail-value">{student.sapId}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Semester:</span>
          <span className="detail-value">{student.semester}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Department:</span>
          <span className="detail-value">{student.department}</span>
        </div>
      </div>
    </div>
  );
};

// Basic Details Component
const BasicDetails = () => {
  const student = sampleData.student;

  return (
    <div className="basic-details">
      <div className="detail-card">
        <h4>Personal Information</h4>
        <div className="detail-item">
          <span className="label">Full Name:</span>
          <span className="value">{student.name}</span>
        </div>
        <div className="detail-item">
          <span className="label">Date of Birth:</span>
          <span className="value">{student.dateOfBirth}</span>
        </div>
        <div className="detail-item">
          <span className="label">Religion:</span>
          <span className="value">{student.religion}</span>
        </div>
        <div className="detail-item">
          <span className="label">Blood Group:</span>
          <span className="value">{student.bloodGroup}</span>
        </div>
        <div className="detail-item">
          <span className="label">Mother Tongue:</span>
          <span className="value">{student.motherTongue}</span>
        </div>
      </div>
      
      <div className="detail-card">
        <h4>Contact Information</h4>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">{student.email}</span>
        </div>
        <div className="detail-item">
          <span className="label">Phone:</span>
          <span className="value">{student.phone}</span>
        </div>
        <div className="detail-item">
          <span className="label">Address:</span>
          <span className="value">{student.address}</span>
        </div>
      </div>

      <div className="detail-card">
        <h4>Academic Information</h4>
        <div className="detail-item">
          <span className="label">Roll Number:</span>
          <span className="value">{student.rollNo}</span>
        </div>
        <div className="detail-item">
          <span className="label">SAP ID:</span>
          <span className="value">{student.sapId}</span>
        </div>
        <div className="detail-item">
          <span className="label">Current Semester:</span>
          <span className="value">{student.semester}</span>
        </div>
        <div className="detail-item">
          <span className="label">Department:</span>
          <span className="value">{student.department}</span>
        </div>
      </div>
    </div>
  );
};

// Attendance Component
const Attendance = () => {
  const attendance = sampleData.attendance;
  const subjects = sampleData.subjects;

  return (
    <div>
      <div className="attendance-summary">
        <div className="attendance-card">
          <div className="attendance-number">{attendance.totalClasses}</div>
          <div className="attendance-label">Total Classes</div>
        </div>
        <div className="attendance-card">
          <div className="attendance-number">{attendance.attendedClasses}</div>
          <div className="attendance-label">Classes Attended</div>
        </div>
        <div className="attendance-card percentage-display">
          <div className="attendance-number">{attendance.percentage}%</div>
          <div className="attendance-label">Attendance Percentage</div>
        </div>
      </div>

      <div className="detail-card">
        <h4>Subject-wise Attendance</h4>
        {subjects.map((subject, index) => (
          <div key={index} className="detail-item">
            <span className="label">{subject.name}:</span>
            <span className="value">{subject.attendance}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Timetable Component
const Timetable = () => {
  const semesterKey = (sampleData.student.semester === "1" || sampleData.student.semester === "I") ? "I"
                    : (sampleData.student.semester === "3" || sampleData.student.semester === "III") ? "III" : "V";
  const timetable = timetables[semesterKey] || [];

  return (
    <div className="timetable-container">
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Faculty</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((day, dayIndex) =>
            day.subjects.map((subject, subjectIndex) => (
              <tr key={`${dayIndex}-${subjectIndex}`}>
                {subjectIndex === 0 && (
                  <td rowSpan={day.subjects.length} style={{
                    verticalAlign: 'middle',
                    fontWeight: 'bold',
                    backgroundColor: '#f5faff'
                  }}>
                    {day.day}
                  </td>
                )}
                <td>{subject.time || '-'}</td>
                <td>{subject.subject}</td>
                <td>{subject.faculty || '-'}</td>
                <td>{subject.room || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// Feedback Component
const Feedback = () => {
  return (
    <div className="detail-card">
      <h4>Student Feedback</h4>
      <div className="detail-item">
        <span className="label">Overall Rating:</span>
        <span className="value">4.5/5.0</span>
      </div>
      <div className="detail-item">
        <span className="label">Teaching Quality:</span>
        <span className="value">Excellent</span>
      </div>
      <div className="detail-item">
        <span className="label">Course Content:</span>
        <span className="value">Very Good</span>
      </div>
      <div className="detail-item">
        <span className="label">Lab Facilities:</span>
        <span className="value">Good</span>
      </div>
      <div className="detail-item">
        <span className="label">Library Resources:</span>
        <span className="value">Excellent</span>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('basic-details');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic-details':
        return <BasicDetails />;
      case 'attendance':
        return <Attendance />;
      case 'timetable':
        return <Timetable />;
      case 'feedback':
        return <Feedback />;
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="dashboard-horizontal">
      <div className="profile-panel">
        <StudentProfile />
      </div>
      <div className="main-section">
        <div className="horizontal-tabs">
          <button
            className={`tab-btn${activeTab === 'basic-details' ? ' active' : ''}`}
            onClick={() => setActiveTab('basic-details')}
          >
            Basic Details
          </button>
          <button
            className={`tab-btn${activeTab === 'attendance' ? ' active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            Attendance
          </button>
          <button
            className={`tab-btn${activeTab === 'timetable' ? ' active' : ''}`}
            onClick={() => setActiveTab('timetable')}
          >
            Time Table
          </button>
          <button
            className={`tab-btn${activeTab === 'feedback' ? ' active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            Feedback
          </button>
        </div>
        <div className="tab-content-area">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
