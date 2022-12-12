import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//setup redux
import { Provider } from 'react-redux'   //là một component của redux
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './redux/Reducer/rootReducer'

const store = createStore(rootReducer)   //giúp tạo store để lưu trữ state

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //tạo thẻ provider có store={store} để tạo vùng lưu trữ dữ liệu
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
