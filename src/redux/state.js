import { rerenderEntireTree } from "../render";

let state = {
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
};
export let addMessage = () => {
  if ( state.messagesPage.newTextMessage == '' ) return;
  let newMessage = { text: state.messagesPage.newTextMessage };
  state.messagesPage.dataMessages.unshift(newMessage);
  state.messagesPage.newTextMessage = '';
  rerenderEntireTree(state);
}
export let updateTextMessage = (text) => {
  state.messagesPage.newTextMessage = text;
  rerenderEntireTree(state);
}
export default state;