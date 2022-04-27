import React from 'react';
import ReactDOM from 'react-dom';
import { addMessage, updateTextMessage } from './redux/state';
import App from './App';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} updateTextMessage={updateTextMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };