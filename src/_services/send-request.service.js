
export const sendRequestService = {
    send
};

function send(request) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    };

    return fetch('http://localhost:3000/contact_me', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.status);
    }

    return response.json();
}
