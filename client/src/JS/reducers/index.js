import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import courReducer from './courReducer';


const rootReducer = combineReducers({
  auth: authReducer,userReducer,courReducer
});

export default rootReducer;
