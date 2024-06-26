import notificationReducer, { initialState } from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ,SET_TYPE_FILTER } from "../actions/courseActionTypes";

describe('notification reducer', () => {
    it('returns the state unchanged if there is no action', () => {
        expect(notificationReducer(initialState, {})).toEqual(initialState)
    })

    it('Fetch Notification Success returns correct data', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]
        }

        const expectedData = {
            filter: "DEFAULT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: false,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
        }

        expect(notificationReducer(initialState, action)).toEqual(expectedData)
    });

    it('Mark As Read returns correct data', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        }

        const state = {
            filter: "DEFAULT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: false,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
          }

        const expectedData = {
            filter: "DEFAULT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: true,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
        }

        expect(notificationReducer(state, action)).toEqual(expectedData)
    })

    it('Set type filter returns correct data', () => {
      const action = {
        type: SET_TYPE_FILTER,
        filter: "URGENT"
      }

      const state = {
        filter: "DEFAULT",
        notifications: [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]
      }

      const expectedData = {
        filter: "URGENT",
        notifications: [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]
      }

      expect(notificationReducer(state, action).filter).toEqual("URGENT")
    })
})