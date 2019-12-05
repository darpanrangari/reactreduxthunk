import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import GithubData from './containers/GithubData';
import rootReducer from './reducers';
import { fetchGithubData } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchGithubData());

ReactDOM.render(
    <Provider store={store}>
        <GithubData />
    </Provider>, document.getElementById('root'));
