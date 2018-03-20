
export const sendRequestService = {
    send
};

function send(request) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    };

    return fetch('https://pacific-savannah-77461.herokuapp.com/contact_me', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.status);
    }

    return;
}
