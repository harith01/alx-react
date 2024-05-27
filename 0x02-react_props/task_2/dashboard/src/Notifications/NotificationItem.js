import React from "react";

export default function NotificationItem({ type, html, value }) {
    return (
      <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html && type? <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    )
}