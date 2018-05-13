import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = [];

//checking only development is in process
if( process.env.NODE_ENV === 'development' ){
    middleware.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleware));