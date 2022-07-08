import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import PomoContextProvider from './contexts/pomo-context';
import TodoContextProvider from './contexts/todo-context';
import NoteContextProvider from './contexts/note-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <NoteContextProvider>  
          <PomoContextProvider>
            <App />
          </PomoContextProvider>
        </NoteContextProvider>
      </TodoContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
