import React, { useState } from 'react';
import { teacherData } from '../teacher-data';

// Teacher Profile Component
const TeacherProfile = () => {
  const teacher = teacherData.teacher;
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="teacher-profile">
      <div className="profile-image">
        {getInitials(teacher.name)}
      </div>
      <div className="profile-info">
        <h2 className="teacher-name">{teacher.name}</h2>
        <p className="teacher-designation">{teacher.designation}</p>
      </div>
      <div className="teacher-details">
        <div className="detail-row">
          <span className="detail-label">Employee ID:</span>
          <span className="detail-value">{teacher.employeeId}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Department:</span>
          <span className="detail-value">{teacher.department}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{teacher.experience}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Qualification:</span>
          <span className="detail-value">{teacher.qualification}</span>
        </div>
      </div>
    </div>
  );
};

// Basic Details Component
const BasicDetails = () => {
  const teacher = teacherData.teacher;

  return (
    <div className="basic-details">
      <div className="detail-card">
        <h4>Personal Information</h4>
        <div className="detail-item">
          <span className="label">Full Name:</span>
          <span className="value">{teacher.name}</span>
        </div>
        <div className="detail-item">
          <span className="label">Date of Birth:</span>
          <span className="value">{teacher.dateOfBirth}</span>
        </div>
        <div className="detail-item">
          <span className="label">Employee ID:</span>
          <span className="value">{teacher.employeeId}</span>
        </div>
        <div className="detail-item">
          <span className="label">Joining Date:</span>
          <span className="value">{teacher.joiningDate}</span>
        </div>
      </div>
      
      <div className="detail-card">
        <h4>Contact Information</h4>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">{teacher.email}</span>
        </div>
        <div className="detail-item">
          <span className="label">Phone:</span>
          <span className="value">{teacher.phone}</span>
        </div>
        <div className="detail-item">
          <span className="label">Address:</span>
          <span className="value">{teacher.address}</span>
        </div>
      </div>

      <div className="detail-card">
        <h4>Professional Information</h4>
        <div className="detail-item">
          <span className="label">Designation:</span>
          <span className="value">{teacher.designation}</span>
        </div>
        <div className="detail-item">
          <span className="label">Department:</span>
          <span className="value">{teacher.department}</span>
        </div>
        <div className="detail-item">
          <span className="label">Qualification:</span>
          <span className="value">{teacher.qualification}</span>
        </div>
        <div className="detail-item">
          <span className="label">Experience:</span>
          <span className="value">{teacher.experience}</span>
        </div>
        <div className="detail-item">
          <span className="label">Specialization:</span>
          <span className="value">{teacher.specialization}</span>
        </div>
      </div>
    </div>
  );
};

// My Classes Component
const MyClasses = () => {
  const classes = teacherData.classes;

  return (
    <div>
      <div className="classes-summary">
        <div className="class-stat-card">
          <div className="stat-number">{classes.length}</div>
          <div className="stat-label">Total Subjects</div>
        </div>
        <div className="class-stat-card">
          <div className="stat-number">{classes.reduce((total, cls) => total + cls.students, 0)}</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="class-stat-card">
          <div className="stat-number">{classes.filter(cls => cls.semester === "V").length}</div>
          <div className="stat-label">Sem V Classes</div>
        </div>
      </div>

      <div className="classes-list">
        {classes.map((classItem, index) => (
          <div key={index} className="class-card">
            <div className="class-header">
              <h4 className="class-subject">{classItem.subject}</h4>
              <span className="class-code">{classItem.code}</span>
            </div>
            <div className="class-details">
              <div className="class-info">
                <span className="class-semester">Semester {classItem.semester}</span>
                <span className="class-students">{classItem.students} Students</span>
              </div>
              <div className="class-schedule">
                <div className="schedule-item">
                  <span className="schedule-label">Room:</span>
                  <span className="schedule-value">{classItem.room}</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Schedule:</span>
                  <span className="schedule-value">{classItem.schedule}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Schedule Component
const Schedule = () => {
  const schedule = teacherData.schedule;

  const getTypeColor = (type) => {
    switch (type) {
      case 'Theory': return '#4CAF50';
      case 'Lab': return '#2196F3';
      case 'Break': return '#FF9800';
      case 'Free': return '#9E9E9E';
      case 'Meeting': return '#9C27B0';
      case 'Research': return '#607D8B';
      case 'Administrative': return '#795548';
      default: return '#666666';
    }
  };

  return (
    <div className="schedule-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject/Activity</th>
            <th>Semester</th>
            <th>Room</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, dayIndex) =>
            day.classes.map((classItem, classIndex) => (
              <tr key={`${dayIndex}-${classIndex}`}>
                {classIndex === 0 && (
                  <td rowSpan={day.classes.length} style={{
                    verticalAlign: 'middle',
                    fontWeight: 'bold',
                    backgroundColor: '#f8f9fa'
                  }}>
                    {day.day}
                  </td>
                )}
                <td>{classItem.time}</td>
                <td className="subject-cell">{classItem.subject}</td>
                <td className="semester-cell">{classItem.semester || '-'}</td>
                <td className="room-cell">{classItem.room || '-'}</td>
                <td className="type-cell">
                  <span 
                    className="type-badge" 
                    style={{ 
                      backgroundColor: getTypeColor(classItem.type),
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {classItem.type}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// Student Management Component
const StudentManagement = () => {
  const students = teacherData.students;
  const classes = teacherData.classes;

  return (
    <div>
      <div className="student-stats">
        <div className="stat-card">
          <div className="stat-number">{students.length}</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{Math.round(students.reduce((total, student) => total + student.attendance, 0) / students.length)}%</div>
          <div className="stat-label">Avg Attendance</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{students.filter(s => s.attendance >= 90).length}</div>
          <div className="stat-label">Good Attendance</div>
        </div>
      </div>

      <div className="detail-card">
        <h4>Student List</h4>
        <div className="students-table">
          <table className="table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Semester</th>
                <th>Subject</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>Sem {student.semester}</td>
                  <td>{student.subject}</td>
                  <td>{student.attendance}%</td>
                  <td>
                    <span 
                      className={`status-badge ${student.attendance >= 90 ? 'status-good' : student.attendance >= 75 ? 'status-average' : 'status-poor'}`}
                    >
                      {student.attendance >= 90 ? 'Excellent' : student.attendance >= 75 ? 'Good' : 'Poor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Teacher Dashboard Component
const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('basic-details');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic-details':
        return <BasicDetails />;
      case 'classes':
        return <MyClasses />;
      case 'schedule':
        return <Schedule />;
      case 'students':
        return <StudentManagement />;
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="dashboard-horizontal">
      <div className="profile-panel">
        <TeacherProfile />
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
            className={`tab-btn${activeTab === 'classes' ? ' active' : ''}`}
            onClick={() => setActiveTab('classes')}
          >
            My Classes
          </button>
          <button
            className={`tab-btn${activeTab === 'schedule' ? ' active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button
            className={`tab-btn${activeTab === 'students' ? ' active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            Student Management
          </button>
        </div>
        <div className="tab-content-area">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;