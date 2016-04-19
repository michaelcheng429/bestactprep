export function authenticate(path) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/authenticate',
        contentType: 'application/json'
    });
}

export function onAdminLoginSubmit(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/login',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}

export function logout() {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/logout',
        contentType: 'application/json'
    });
}

export function getUsers() {
    return $.ajax({
        type: 'GET',
        url: '/api/admin/getusers',
        contentType: 'application/json'
    });
}

export function deleteUser(email) {
    return $.ajax({
        type: 'DELETE',
        url: '/api/admin/deleteuser',
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}

export function resetPassword(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/resetpassword',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}

export function resetData(email) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/resetdata',
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}
