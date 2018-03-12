import { combineReducers } from 'redux';
import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';
import { send_request } from './send-request.reducer';

const rootReducer = combineReducers({
  registration,
  authentication,
  send_request
});

export default rootReducer;
