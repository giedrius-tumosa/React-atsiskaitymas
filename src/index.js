import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostProvider } from './store/PostContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <App />
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>
);
