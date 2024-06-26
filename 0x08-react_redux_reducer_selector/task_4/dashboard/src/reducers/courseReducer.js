import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";
import { Map } from "immutable";
import { coursesNormalizer } from "../schema/courses";

export default function courseReducer(state = Map([]), action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            const courses = action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false,
                }
            })
            const normalizedData = coursesNormalizer(courses)
            return state.merge(normalizedData)
        }

        case SELECT_COURSE: {
            return state.setIn(['entities', 'courses', action.index.toString(), 'isSelected'], true)
        }

        case UNSELECT_COURSE: {
            return state.setIn(['entities', 'courses', action.index.toString(), 'isSelected'], false)
        }

        default: 
            return state;
    }
}