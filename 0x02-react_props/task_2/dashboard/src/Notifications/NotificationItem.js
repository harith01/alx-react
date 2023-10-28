import React from 'react';
import 'Notifications.css';

export default function NotificationItem(props) {
    const type = props.type;
    const html = props.html;
    const value = props.value;
    return (
        <>
          {type && value ? <li data-notification-type={type}>{value}</li> : null}
          {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
      );
}