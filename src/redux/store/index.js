import { createStore, applyMiddleware } from 'redux';
import {RootReducer} from '../reducers';

import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger';
import {AllLogics} from '../logic'


import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

const logicMiddleware = createLogicMiddleware(AllLogics);
/*History for pushing and routing to path */
const history = createBrowserHistory({ basename: '/' });
const middlewares = [logicMiddleware, routerMiddleware(history)];

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;

