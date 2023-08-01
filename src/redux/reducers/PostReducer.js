import { SET_POST_DATA, SET_NEW_POST, SET_COMMENT_DATA } from '../actions/PostActions';

const initialState = {
    posts: [],
    comments: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            return { ...state, posts: action.postData };
        case SET_NEW_POST:
            return { ...state, posts: [...state.posts, action.newPost] }
        case SET_COMMENT_DATA:
            return { ...state, comments: action.commentData };
        default:
            return state;
    }
};

export default postReducer;
