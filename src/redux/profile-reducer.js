const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hey, Salaga!', likesCount: 23},
        {id: 2, message: 'Omg! Look like one more...', likesCount: 31},
        {id: 3, message: 'So sad...', likesCount: 6},
        {id: 4, message: 'TEST ', likesCount: 3},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            state.posts.push({id: 5, message: state.newPostText, likesCount: 666});
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }


    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;