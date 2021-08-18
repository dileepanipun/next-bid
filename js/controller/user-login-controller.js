function loginUser() {
    let userName = $('form#loginForm input[name=username]').val();
    let password = $('form#loginForm input[name=password]').val();
    let remember_me = $('form#loginForm input[name=remember_me]').is('checked');

    localStorage.setItem("nextbid_login", JSON.stringify({
        "username": userName,
        "password": password,
        "type": "customer",
        "remember_me": remember_me,
    }));

    checkLogins();
}

$('#loginForm').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    if (document.querySelector('#loginForm').checkValidity()) {
        loginUser();
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Invalid date! Please check again.'
        })
    }
});

