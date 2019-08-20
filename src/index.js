import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App.js';
import { searchHeroes } from './Reducers';

const store = createStore(searchHeroes)

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
               , document.getElementById('root'));
serviceWorker.unregister();