import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.filter;

export const getNotifications = (state) => state.notifications;


export const getUnreadNotifications = (state) => {
	const notifications = state.getIn([
		'notifications',
		'entities',
		'notifications',
	]);
	const unreadNotifications = notifications.filter(
		(notification) => !notification.isRead
	);
	return Map(unreadNotifications);
};