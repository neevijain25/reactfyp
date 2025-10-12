import React from 'react';
import { sampleData } from '../App';

const Account = () => {
  const student = sampleData.student;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Account Settings</h1>
        <p className="page-subtitle">Manage your personal information and preferences</p>
      </div>

      <div className="account-sections">
        <div className="account-section">
          <h3 className="section-title">Profile Information</h3>
          <div className="detail-item">
            <span className="label">Full Name:</span>
            <span className="value">{student.name}</span>
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{student.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Phone:</span>
            <span className="value">{student.phone}</span>
          </div>
          <div className="detail-item">
            <span className="label">Department:</span>
            <span className="value">{student.department}</span>
          </div>
          <button className="btn btn--primary" style={{ marginTop: 'var(--space-16)' }}>
            Edit Profile
          </button>
        </div>

        <div className="account-section">
          <h3 className="section-title">Academic Details</h3>
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
          <button className="btn btn--outline" style={{ marginTop: 'var(--space-16)' }}>
            Update Settings
          </button>
        </div>

        <div className="account-section">
          <h3 className="section-title">Security</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>
            Keep your account secure by regularly updating your password.
          </p>
          <button className="btn btn--secondary">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Account;