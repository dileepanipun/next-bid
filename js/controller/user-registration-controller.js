// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            console.log(form);
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

    function registerUser() {

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
})();

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