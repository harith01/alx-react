import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            return action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false,
                }
            })
        }

        case SELECT_COURSE: {
            return state.map((course) => {
                return {
                    ...course,
                    isSelected: action.index === course.id && true,
                }
            })
        }

        case UNSELECT_COURSE: {
            return state.map((course) => {
                return {
                    ...course,
                    isSelected: action.index === course.id && false,
                }
            })
        }

        default: 
            return state;
    }
}