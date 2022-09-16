import { combineReducers } from 'redux';
import dogImageReducer from './dogImgReducer';

const rootReducer = combineReducers({
  dogImage: dogImageReducer
});

export default rootReducer;