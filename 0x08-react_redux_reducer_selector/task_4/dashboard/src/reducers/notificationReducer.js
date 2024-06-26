import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

export const initialState = Map({
    notifications: [],
    filter: "DEFAULT",
})

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const notificationData = action.data.map((notification) => ({
                ...notification,
                isRead: false
            }))
            return state.merge({
                filter: NotificationTypeFilters.URGENT,
                notifications: notificationsNormalizer(notificationData)
            })
        }

        case MARK_AS_READ: {
            return Map(state).setIn(
				[
					'notifications',
					'entities',
					'notifications',
					action.index.toString(),
					'isRead',
				],
				true
			);
        }

        case SET_TYPE_FILTER: {
            return Map(state).set('filter', action.filter);
        }

        default:
            return state;
    }
}