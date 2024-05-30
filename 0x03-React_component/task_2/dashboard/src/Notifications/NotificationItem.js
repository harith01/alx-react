import React from "react";
import PropTypes from 'prop-types';

export default class NotificationItem extends React.Component {
    constructor(props) {
      super(props)
    }

    render () {
      const { type, value, html, markAsRead, id } = this.props;
      return (
        <>
        {type && value ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
        {html && type ? <li data-notification-type={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
      )
    }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  markAsRead: () => {}
}