import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";

// const store = createStore(reducer);

const store = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger())
)(createStore)(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
