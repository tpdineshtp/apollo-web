import { userConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_CONFLICT:
      debugger;
      return { register_status: 409 };
    case userConstants.REGISTER_SUCCESS:
      return { register_status: 200 };
    case userConstants.REGISTER_FAILURE:
      return { register_status: 500 };
    default:
      return state
  }
}
