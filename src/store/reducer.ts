import { combineReducers } from 'redux';
import appModalReducer from '../entities/common/AppModal/service/appModalReducer';
import homeReducer from '../entities/screens/home/services/homeReducer';

const rootReducer = combineReducers({
  appModalReducer,
  homeReducer,
});

export default rootReducer;
