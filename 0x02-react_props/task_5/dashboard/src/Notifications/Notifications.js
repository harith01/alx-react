import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
    <div className="menuItem">
      Your notifications
    </div>
    { displayDrawer &&
    <div className="Notifications">
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
          listNotifications && listNotifications.length === 0 ? (
            <NotificationItem type="default" value="No new notification for now" />
          ) : (
            listNotifications.map(({id, value, html, type}) => (
              <NotificationItem type={type} value={value} html={html} key={id} />
            ))
          )
        }

        {/* <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} /> */}
      </ul>
    </div> }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(<NotificationItemShape />)
}

Notifications.defaultProps = {
  displayDrawer: true,
}


export default Notifications;
