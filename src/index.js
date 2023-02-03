import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostProvider } from './store/PostContext';
import { UserProvider } from './store/UserContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>
);
