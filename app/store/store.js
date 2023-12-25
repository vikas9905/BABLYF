/*eslint-disable*/
import { combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import { themeReducers } from '../reducers/themeReducer';
const reducer = combineReducers({
    themeReducers
})

export const store = createStore(reducer, applyMiddleware(thunk))