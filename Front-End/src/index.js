import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './components/store/index';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);