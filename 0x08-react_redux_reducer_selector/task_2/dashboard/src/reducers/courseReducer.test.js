import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";

describe('Course Reducer', () => {
    it('default state return empty array', () => {
        expect(courseReducer(undefined, {})).toEqual([])
    });

    it('FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
              {
                id: 1,
                name: "ES6",
                credit: 60
              },
              {
                id: 2,
                name: "Webpack",
                credit: 20
              },
              {
                id: 3,
                name: "React",
                credit: 40
              }
            ]
        }
        const expectedData = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ]

        expect(courseReducer(undefined, action)).toEqual(expectedData);
    })

    it('SELECT_COURSE return the correct data', () => {
        const action = {
            type: SELECT_COURSE,
            index: 2
        }

        const initialState = [
            {
              id: 1,
              name: 'ES6',
              isSelected: false,
              credit: 60,
            },
            {
              id: 2,
              name: 'Webpack',
              isSelected: false,
              credit: 20,
            },
            {
              id: 3,
              name: 'React',
              isSelected: false,
              credit: 40,
            },
        ];

        const expectedState = [
            {
              id: 1,
              name: 'ES6',
              isSelected: false,
              credit: 60,
            },
            {
              id: 2,
              name: 'Webpack',
              isSelected: true,
              credit: 20,
            },
            {
              id: 3,
              name: 'React',
              isSelected: false,
              credit: 40,
            },
        ];

        

        expect(courseReducer(initialState, action)).toEqual(expectedState)
    })


    it('UNSELECT_COURSE return the correct data', () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 2
        }

        const initialState = [
            {
              id: 1,
              name: 'ES6',
              isSelected: false,
              credit: 60,
            },
            {
              id: 2,
              name: 'Webpack',
              isSelected: true,
              credit: 20,
            },
            {
              id: 3,
              name: 'React',
              isSelected: false,
              credit: 40,
            },
        ];

        const expectedState = [
            {
              id: 1,
              name: 'ES6',
              isSelected: false,
              credit: 60,
            },
            {
              id: 2,
              name: 'Webpack',
              isSelected: false,
              credit: 20,
            },
            {
              id: 3,
              name: 'React',
              isSelected: false,
              credit: 40,
            },
        ];

        

        expect(courseReducer(initialState, action)).toEqual(expectedState)
    })
})