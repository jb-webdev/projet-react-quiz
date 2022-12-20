import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { HashRouter } from "react-router-dom";
import App from './App'

// store 
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
