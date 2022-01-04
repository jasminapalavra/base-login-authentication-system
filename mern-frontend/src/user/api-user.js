import baseUrl from '../config';

export const create = user => {
    return fetch(`${baseUrl}api/users/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}

export const list = () => {
    return fetch(`${baseUrl}api/users`, { method: 'GET' })
        .then(response => response.json())
        .catch(err => console.log(err));
}

export const read = (params, token) => {
    return fetch(`${baseUrl}api/users/${params.userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .catch(err => console.log(err));       
}

export const update = (params, token, user) => {
    return fetch(`${baseUrl}api/users/${params.userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }, 
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err));       
}

export const remove = (params, token) => {
    return fetch(`${baseUrl}api/users/${params.userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .catch(err => console.log(err));       
}

export default { create, list, read, update, remove };