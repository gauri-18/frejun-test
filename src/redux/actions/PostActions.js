export const SET_POST_DATA = 'SET_POST_DATA';
export const SET_NEW_POST = 'SET_NEW_POST';
export const SET_COMMENT_DATA = 'SET_COMMENTS_DATA';
export const SET_NEW_COMMENT = 'SET_NEW_COMMENT';


export const setPostData = (postData) => {
    return {
        type: SET_POST_DATA,
        postData
    }
}

export const setNewPost = (newPost) => {
    return {
        type: SET_NEW_POST,
        newPost
    }
}

export const setCommentData = (commentData) => {
    return {
        type: SET_COMMENT_DATA,
        commentData
    }
}

export const setNewComment = (newComment) => {
    return {
        type: SET_NEW_COMMENT,
        newComment
    }
}