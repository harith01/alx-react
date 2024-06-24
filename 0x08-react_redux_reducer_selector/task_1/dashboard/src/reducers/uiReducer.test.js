import uiReducer, { initialState } from "./uiReducer";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('reducer test', () => {
    it('returns the initialState when no action is passed', () => {
        expect(uiReducer(initialState, {})).toEqual(initialState)
    });

    it('returns the initialState when SELECT_COURSE is passed as action', () => {
        expect(uiReducer(initialState, { type: SELECT_COURSE })).toEqual(initialState)
    });

    it('correctly changes the isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).isNotificationDrawerVisible).toEqual(true)
    })
})