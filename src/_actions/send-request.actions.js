import { contactMeConstants } from '../_constants';
import { sendRequestService } from '../_services';
import { history } from '../_helpers';

export const sendRequestActions = {
    send
};

function send(request) {
    return dispatch => {

        sendRequestService.send(request)
            .then(
                user => {
                    dispatch(success());
                },
                error => {
                      dispatch(failure(error));
                }
            );
    };

    function success(user) { return { type: contactMeConstants.REQUEST_SENT, user } }
    function failure(error) { return { type: contactMeConstants.REQUEST_FAILED, error } }
}
