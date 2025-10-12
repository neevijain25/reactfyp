import React from 'react';
import { teacherData } from '../teacher-data';

const TeacherAccount = () => {
  const teacher = teacherData.teacher;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Faculty Account Settings</h1>
        <p className="page-subtitle">Manage your professional profile and account preferences</p>
      </div>

      <div className="account-sections">
        <div className="account-section">
          <h3 className="section-title">Profile Information</h3>
          <div className="detail-item">
            <span className="label">Full Name:</span>
            <span className="value">{teacher.name}</span>
          </div>
          <div className="detail-item">
            <span className="label">Employee ID:</span>
            <span className="value">{teacher.employeeId}</span>
          </div>
          <div className="detail-item">
            <span className="label">Designation:</span>
            <span className="value">{teacher.designation}</span>
          </div>
          <div className="detail-item">
            <span className="label">Department:</span>
            <span className="value">{teacher.department}</span>
          </div>
          <button className="btn btn--primary" style={{ marginTop: 'var(--space-16)' }}>
            Edit Profile
          </button>
        </div>

        <div className="account-section">
          <h3 className="section-title">Contact Information</h3>
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
          <button className="btn btn--outline" style={{ marginTop: 'var(--space-16)' }}>
            Update Contact Details
          </button>
        </div>

        <div className="account-section">
          <h3 className="section-title">Professional Details</h3>
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
          <div className="detail-item">
            <span className="label">Joining Date:</span>
            <span className="value">{teacher.joiningDate}</span>
          </div>
        </div>

        <div className="account-section">
          <h3 className="section-title">Settings</h3>
          <div className="detail-item">
            <span className="label">Email Notifications:</span>
            <span className="value">Enabled</span>
          </div>
          <div className="detail-item">
            <span className="label">SMS Alerts:</span>
            <span className="value">Enabled</span>
          </div>
          <div className="detail-item">
            <span className="label">Language:</span>
            <span className="value">English</span>
          </div>
          <div className="detail-item">
            <span className="label">Time Zone:</span>
            <span className="value">IST (UTC+5:30)</span>
          </div>
          <button className="btn btn--outline" style={{ marginTop: 'var(--space-16)' }}>
            Update Preferences
          </button>
        </div>

        <div className="account-section">
          <h3 className="section-title">Security</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>
            Keep your account secure by regularly updating your password and enabling two-factor authentication.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <button className="btn btn--secondary">Change Password</button>
            <button className="btn btn--outline">Enable 2FA</button>
          </div>
        </div>

        <div className="account-section">
          <h3 className="section-title">Academic Tools</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>
            Access additional tools and resources for teaching and student management.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <button className="btn btn--outline">Grade Book</button>
            <button className="btn btn--outline">Resource Library</button>
            <button className="btn btn--outline">Attendance Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAccount;