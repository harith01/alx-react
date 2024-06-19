import notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { id_attribute: "guid"});
const notification = new schema.Entity("notifications", {
     author: user,
     context: message
})

const getAllNotificationsByUser = (userId) => {
     const filteredNotf = []
     const notifications = normalize.entities.notification;
     const message = normalize.entities.message;

     for (const id in notifications) {
          if (notifications[id].author === userId) {
            filteredNotf.push(message[notifications[id].context]);
          }
     }

     return filteredNotf;
}

export default getAllNotificationsByUser;