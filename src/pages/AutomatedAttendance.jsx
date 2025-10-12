import React, { useState } from 'react';

const AutomatedAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendanceMode, setAttendanceMode] = useState('camera');
  const [isActive, setIsActive] = useState(false);

  const classes = [
    'Data Structures - Sem III',
    'Information Security - Sem V',
    'Machine Learning - Sem V'
  ];

  const handleStartAttendance = () => {
    setIsActive(true);
    // Future: Start camera/QR code functionality
    alert(`Starting ${attendanceMode} attendance for ${selectedClass}`);
  };

  const handleStopAttendance = () => {
    setIsActive(false);
    alert('Attendance session ended');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Automated Attendance System</h1>
        <p className="page-subtitle">Take attendance using facial recognition or QR codes</p>
      </div>

      <div className="attendance-setup">
        <div className="detail-card">
          <h4>Setup Attendance Session</h4>
          
          <div className="form-group">
            <label>Select Class:</label>
            <select 
              value={selectedClass} 
              onChange={(e) => setSelectedClass(e.target.value)}
              className="form-select"
            >
              <option value="">Choose a class...</option>
              {classes.map((className, index) => (
                <option key={index} value={className}>{className}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Attendance Mode:</label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  value="camera" 
                  checked={attendanceMode === 'camera'}
                  onChange={(e) => setAttendanceMode(e.target.value)}
                />
                📷 Facial Recognition
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  value="qr" 
                  checked={attendanceMode === 'qr'}
                  onChange={(e) => setAttendanceMode(e.target.value)}
                />
                📱 QR Code Scan
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  value="manual" 
                  checked={attendanceMode === 'manual'}
                  onChange={(e) => setAttendanceMode(e.target.value)}
                />
                ✋ Manual Entry
              </label>
            </div>
          </div>

          <div className="attendance-controls">
            {!isActive ? (
              <button 
                className="btn btn--primary"
                onClick={handleStartAttendance}
                disabled={!selectedClass}
              >
                Start Attendance Session
              </button>
            ) : (
              <button 
                className="btn btn--danger"
                onClick={handleStopAttendance}
              >
                Stop Session
              </button>
            )}
          </div>
        </div>

        {isActive && (
          <div className="detail-card">
            <h4>Active Session: {selectedClass}</h4>
            <div className="session-status">
              <div className="status-indicator active">
                <div className="pulse"></div>
                Session Active - {attendanceMode === 'camera' ? 'Camera Ready' : attendanceMode === 'qr' ? 'QR Scanner Ready' : 'Manual Mode'}
              </div>
              
              <div className="attendance-preview">
                <h5>Today's Attendance (Live)</h5>
                <div className="attendance-stats">
                  <div className="stat">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Present</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">42</span>
                    <span className="stat-label">Total</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">0%</span>
                    <span className="stat-label">Attendance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="detail-card">
          <h4>Features Coming Soon</h4>
          <ul className="feature-list">
            <li>✨ Real-time facial recognition using webcam</li>
            <li>📱 QR code generation for students</li>
            <li>📊 Instant attendance reports</li>
            <li>📧 Auto-send attendance to administration</li>
            <li>🔔 SMS alerts for low attendance</li>
            <li>📈 Attendance analytics and trends</li>
          </ul>
          <p style={{ marginTop: '20px', color: '#666' }}>
            <strong>Note:</strong> This feature is under development. We can implement facial recognition, 
            QR code scanning, and database integration in the next phase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomatedAttendance;