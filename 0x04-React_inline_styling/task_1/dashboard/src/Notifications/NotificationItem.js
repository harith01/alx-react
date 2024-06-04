import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red'
  }
})


class NotificationItem extends React.PureComponent {
    constructor(props) {
      super(props)
    }

    render () {
      const { type, value, html, markAsRead, id } = this.props;
      const def = type === "default" && css(styles.default);
      const urg = type === "urgent" && css(styles.urgent);
      return (
        <>
        {type && value ? <li className={type === "default" ? def : urg}  data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
        {html && type ? <li className={type === "default" ? def : urg}  data-notification-type={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
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


export default NotificationItem;