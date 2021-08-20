function registerUser() {
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'POST',
        url: baseUrl + "/api/v1/User/login",
        processData: false,
        contentType: false,
        dataType: "JSON",
        data: new FormData($('#user_registration_form')[0]),
        async: true,
        beforeSend: function () {
            // show loading

        },
        complete: function () {
            // hide loading

        },
        success: function (response) {
            // handle success
            if (response.status === 200) {
                Toast.fire({
                    icon: 'success',
                    title: 'User successfully registered!'
                })
            }

            if (response.status === 500) {
                Toast.fire({
                    icon: 'error',
                    title: 'Request failed! cannot preform this action!'
                })
            }
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

$('#user_registration_form').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    if (document.querySelector('#user_registration_form').checkValidity()) {
        registerUser();
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Invalid date! Please check again.'
        })
    }
});

$('#user_registration_form').on('reset', e => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('#user_registration_form').reset();
});

function ConfirmPassword(inputName) {
    let passwordInput = document.querySelector(`input#passwordInput`);
    let reEnterPasswordInput = document.querySelector(`input#passwordInput`);
    let input = document.querySelector(`input#${inputName}`);
    input.setCustomValidity("");
    if (passwordInput.value !== reEnterPasswordInput.value) {
        input.setCustomValidity("Passwords do not match.");
    }
}