import { userConstants } from '../_constants';

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loginFailure: true
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
