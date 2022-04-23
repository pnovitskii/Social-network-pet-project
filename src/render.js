import React from 'react';
import ReactDOM from 'react-dom';
import { addMessage } from './redux/state';
import App from './App';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };