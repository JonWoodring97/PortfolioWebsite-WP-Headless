import {createStore, combineReducers} from 'redux' 
import websiteReducer from './reducers/websiteReducer'

const rootReducer = combineReducers({
    website: websiteReducer 
});

export default createStore(rootReducer)