import React, { useState } from 'react';
import { sampleData } from '../App';

const Notifications = () => {
  const [notifications, setNotifications] = useState(sampleData.notifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
        <p className="page-subtitle">Stay updated with important announcements and reminders</p>
      </div>

      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${!notification.read ? 'unread' : ''}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-header">
              <h3 className="notification-title">{notification.title}</h3>
              <span className="notification-date">{formatDate(notification.date)}</span>
            </div>
            <p className="notification-message">{notification.message}</p>
            {!notification.read && (
              <div style={{ marginTop: 'var(--space-8)' }}>
                <span className="status status--info">New</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="detail-card" style={{ textAlign: 'center', padding: 'var(--space-32)' }}>
          <h3>No notifications</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            You're all caught up! Check back later for updates.
          </p>
        </div>
      )}
    </div>
  );
};

export default Notifications;