import React from "react";
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
    return (
      <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html && type? <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    )
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}