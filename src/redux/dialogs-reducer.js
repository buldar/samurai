const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE  = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vitaly', ava: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg'},
        {id: 2, name: 'Andrey', ava: 'data:image/jpeg;base64,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'},
        {id: 3, name: 'Sasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ-Rkebooxm2phQGSrLoLtuAJYKLpCFKuWDIOG-MDZ5gTsQcgl'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 1, message: 'What are u doing here?'},
        {id: 2, message: 'I dont know!'},
        {id: 2, message: 'Just...just... oh, God..(('},
        {id: 1, message: 'I think, this social network so sh#t!'},
        {id: 2, message: 'Agree. Look like...'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 1, message: body});
            break;
        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;