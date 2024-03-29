import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import usersReducer from './reducers/Users';
import booksReducer from './reducers/Books';
import carsReducer from './reducers/Cars'
import './index.css'

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
    cars: carsReducer,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
