let store = {
  _state: {
    profilePage: {
      dataPosts: [
        { name: 'Alex', message: "Hello! How it's goin?" },
        { name: 'Pavel', message: 'Здарова.' },
        { name: 'James', message: 'Good morning, sir!' }
      ]
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
      dataMessages: [ ],
      newTextMessage: '' 
    }
  },
  getState() { return this._state},
  rerenderEntireTree() {
    console.log('state changed');
  },
  addPost(text) {
    if (text == '') return;
    let newPost = {
      name: 'Pavel',
      message: text
    }
    this._state.profilePage.dataPosts.unshift(newPost);
    this.rerenderEntireTree(this._state);
    debugger;
  },
  addMessage() {
    if ( this._state.messagesPage.newTextMessage == '' ) return;
    let newMessage = { text: this._state.messagesPage.newTextMessage };
    this._state.messagesPage.dataMessages.unshift(newMessage);
    this._state.messagesPage.newTextMessage = '';
    this.rerenderEntireTree(this._state);
  },
  updateTextMessage(text) {
    
    this._state.messagesPage.newTextMessage = text;
    this.rerenderEntireTree(this._state);
  },
  subscribe( observer ) {
    this.rerenderEntireTree = observer;
  }
};

export default store;