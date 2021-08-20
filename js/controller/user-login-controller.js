function redirectToNextPage() {
    let userName = $('form#loginForm input[name=username]').val();
    let password = $('form#loginForm input[name=password]').val();
    let remember_me = $('form#loginForm input[name=remember_me]').is('checked');

    localStorage.setItem("nextbid_login", JSON.stringify({
        "username": userName,
        "password": password,
        "userType": "customer",
        "remember_me": remember_me,
    }));

    if (localStorage.hasOwnProperty("nextbid_login") && userName === "admin@gmail.com" && password === "admin") {
        window.location.href = baseUrl + 'admin-dashboard.html';
    } else if (localStorage.hasOwnProperty("nextbid_login") && userName !== undefined && password !== undefined) {
        window.location.href = baseUrl + 'index.html';
    }
}

function loginUser() {
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'POST',
        url: baseUrl + "/api/v1/User/login",
        processData: false,
        contentType: false,
        dataType: "JSON",
        data: new FormData($('#loginForm')[0]),
        async: true,
        beforeSend: function () {
            // show loading

        },
        complete: function () {
            // hide loading

        },
        success: function (response) {
            // handle success
            redirectToNextPage();
        },
        error: function (response) {
            // handle error
            Toast.fire({
                icon: 'error',
                title: 'Request failed! cannot preform this action!'
            })
        }
    });
}

$('#loginForm').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    if (document.querySelector('#loginForm').checkValidity()) {
        // loginUser();
        redirectToNextPage();
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Invalid date! Please check again.'
        })
    }
});

