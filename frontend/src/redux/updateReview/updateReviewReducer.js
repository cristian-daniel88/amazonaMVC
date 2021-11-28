import {ADD_REVIEW, UPDATE_REVIEW} from './updaReviewActions'


const INITIAL_STATE = {
    reviews: []
}


const updateReviewReducer = (state = INITIAL_STATE , action ) => {

    switch (action.type) {
        case UPDATE_REVIEW:
        return {
            ...state,
            reviews: action.payload
        }

        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
        default:
        return state
    }

}

export default updateReviewReducer