import { contactMeConstants } from '../_constants';

export function send_request(state = {}, action) {
  switch (action.type) {
    case contactMeConstants.REQUEST_SENT:
      return {
        request_sent: true
      };
    case contactMeConstants.REQUEST_FAILED:
      return {
        request_sent: false
      };
    default:
      return state
  }
}
