import React from 'react';
import './Notifications.css';

export default function NotificationItem({ type, html, value }) {
    return (
        <>
          {type && value ? <li data-notification-type={type}>{value}</li> : null}
          {type && html ? <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
      );
}