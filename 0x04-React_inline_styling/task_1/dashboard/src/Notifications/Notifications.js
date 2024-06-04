import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: 10,
    width: '30%',
    right: 0,
    marginTop: 20,
    marginRight: 10,
  },
  
  menuItem: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
  }

})

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length 
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render () {
    return (
      <>
      <div className={css(styles.menuItem)}>
        Your notifications
      </div>
      { this.props.displayDrawer &&
      <div className={css(styles.Notifications)}>
        <button
          style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
          aria-label="Close"
          onClick={console.log("Close button has been clicked")}
        >
          <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {
              this.props.listNotifications?.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              this.props.listNotifications?.map(({id, value, html, type}) => (
                <NotificationItem type={type} value={value} html={html} key={id} markAsRead={this.markAsRead}/>
              ))
            )
          }
  
        </ul>
      </div> }
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: true,
}


export default Notifications;
