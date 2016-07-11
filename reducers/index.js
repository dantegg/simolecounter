import {combineReducers} from 'redux';
import counter from './counter.js'   //reducer下的counter

const rootReducer = combineReducers({
  counter
})


export default rootReducer
