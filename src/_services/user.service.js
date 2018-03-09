import { authHeader } from '../_helpers';

export const userService = {
    register,
    login
};


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:3000/users/register', requestOptions).then(handleResponse);
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://localhost:3000/users/auth', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user._id) {
              localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.status);
    }

    return response.json();
}
