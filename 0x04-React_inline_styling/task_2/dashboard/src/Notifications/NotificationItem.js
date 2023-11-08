import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} 
          data-notification-type={type} 
          className={type === 'default' ? css(styles.default) : css(styles.urgent)}>
            {value}
          </li>
        ) : null}
        {html ? 
        <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }} 
        className={css(styles.urgent)}></li> : 
        null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});


NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
