import notifications from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
     return notifications.filter((notf) => notf.author.id == userId)
                 .map((notf) => notf.context)
}

export default getAllNotificationsByUser;