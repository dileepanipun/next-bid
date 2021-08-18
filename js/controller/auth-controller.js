// let availableRoutes = [
//     "", "index.html", "about-us.html", "contact-us.html",
// ]

// check saved user logins
function checkLogins() {
    if (localStorage.hasOwnProperty("nextbid_login")) {
        let loginData = JSON.parse(localStorage.getItem("nextbid_login"));
        if (loginData.username !== undefined && loginData.password !== undefined) {
            if (window.location.href === baseUrl + 'user-login.html') {
                Toast.fire({
                    icon: 'success',
                    title: 'Please wait! Redirecting to Homepage.'
                }).then(() => {
                    window.location.href = baseUrl + 'index.html';
                });
            }
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Please login first!'
            }).then(() => {
                if (window.location.href !== baseUrl + 'user-login.html')
                    window.location.href = baseUrl + 'user-login.html';
            });
        }
    } else {
        if (window.location.href === baseUrl + "user-register.html") {
            Toast.fire({
                icon: 'info',
                title: 'Fill this form with your data to register!'
            });
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Please login first!'
            }).then(() => {
                if (window.location.href !== baseUrl + 'user-login.html')
                    window.location.href = baseUrl + 'user-login.html';
            });
        }
    }
}

checkLogins();