export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const ADD_REVIEW = "ADD_REVIEW";


export const updateReviewAction = (value) => ({
    type : UPDATE_REVIEW,
    payload : value
})


export const addReviewAction = (value) => ({
    type: ADD_REVIEW,
    payload: value
})