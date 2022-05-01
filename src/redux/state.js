const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let store = {
  _state: {
    profilePage: {
      dataPosts: [
        { name: 'Alex', message: "Hello! How it's goin?" },
        { name: 'Pavel', message: 'Здарова.' },
        { name: 'James', message: 'Good morning, sir!' }
      ],
      newPostText: ''
    },
    messagesPage: {
      dataDialogs: [
        { id: '0', name: 'Pavel' },
        { id: '1', name: 'James' },
        { id: '2', name: 'Влад' },
        { id: '3', name: 'Витёк' },
        { id: '4', name: 'Антон' },
        { id: '5', name: 'Kavo' },
        { id: '6', name: 'Ladno' },
        { id: '7', name: 'Себек' },
      ],
      dataMessages: [],
      newTextMessage: ''
    }
  },
  getState() { return this._state },
  rerenderEntireTree() {
    console.log('state changed');
  },
  subscribe(observer) { this.rerenderEntireTree = observer; },
  addPost() {

  },
  updatePostText(text) {
    this._state.profilePage.newPostText = text;
    this.rerenderEntireTree(this._state);
  },
  addMessage() {


  },
  updateTextMessage(text) {

  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      if (this._state.profilePage.newPostText === '') return;
      let newPost = {
        name: 'Pavel',
        message: this._state.profilePage.newPostText
      }
      this._state.profilePage.dataPosts.unshift(newPost);
      this.rerenderEntireTree(this._state);
      this._state.profilePage.newPostText = '';
    }
    else if (action.type === 'UPDATE-POST-TEXT') {
      this.updatePostText(action.text);
    }

    else if (action.type === 'ADD_MESSAGE') {
      if (this._state.messagesPage.newTextMessage === '') return;
      let newMessage = { text: this._state.messagesPage.newTextMessage };
      this._state.messagesPage.dataMessages.unshift(newMessage);
      this._state.messagesPage.newTextMessage = '';
      this.rerenderEntireTree(this._state);
    }

    else if (action.type === 'UPDATE_MESSAGE_TEXT') {
      this._state.messagesPage.newTextMessage = action.text;
      this.rerenderEntireTree(this._state);
    }
  }
};

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const updatePostTextActionCreator = (text) => ( { type: UPDATE_POST_TEXT, text: text } );
export const addMessageActionCreator = () => ( { type: ADD_MESSAGE } );
export const updateMessageTextActionCreator = (text) => ( { type: UPDATE_MESSAGE_TEXT, text: text } );

export default store;