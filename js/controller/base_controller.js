let menu = {
    "menu_items": [
        {
            "title": "Home",
            "url": "index.html",
            "type": "menu-item",
            "available": "all",
            "auth": false
        },
        {
            "title": "New Bid \uD83C\uDFC6",
            "url": "seller-add-new-bid.html",
            "type": "menu-item",
            "available": "seller",
            "auth": true
        },
        {
            "title": "About Us",
            "url": "#",
            "type": "menu-item",
            "available": "all",
            "auth": false
        },
        {
            "title": "Contact Us",
            "url": "#",
            "type": "menu-item",
            "available": "all",
            "auth": false
        },
        {
            "title": "User Name",
            "url": "#",
            "type": "menu-item",
            "auth": true,
            "sub_menu": [
                {
                    "title": "Profile",
                    "url": "user-profile.html",
                    "type": "sub-menu-item",
                    "available": "all",
                    "auth": true
                },
                {
                    "title": "Wallet",
                    "url": "user-wallet.html",
                    "type": "sub-menu-item",
                    "available": "customer",
                    "auth": true
                },
                {
                    "title": "My Bidding",
                    "url": "user-bidding-history.html",
                    "type": "sub-menu-item",
                    "available": "customer",
                    "auth": true
                },
                {
                    "title": "Ongoing Bids",
                    "url": "seller-ongoing-bids.html",
                    "type": "sub-menu-item",
                    "available": "seller",
                    "auth": true
                },
                {
                    "title": "Bids List",
                    "url": "seller-bids-history.html",
                    "type": "sub-menu-item",
                    "available": "seller",
                    "auth": true
                },
                {
                    "title": "Logout",
                    "url": "index.html",
                    "type": "sub-menu-item",
                    "callback": "logoutNRedirectToLogin()",
                    "available": "all",
                    "auth": true
                }
            ]
        },
        {
            "title": "Switch to",
            "url": "user-login.html",
            "type": "button",
            "callback": "switchToOtherAccount()",
            "available": "all",
            "auth": true
        },
        {
            "title": "Login / Register",
            "url": "user-register.html",
            "type": "button",
            "available": "all",
            "auth": false
        }
    ]
};

// swal tost configs
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

let baseUrl = undefined;

function getBaseUrl() {
    let urlArr = window.location.href.split('/');
    if (urlArr[urlArr.length - 1].length > 0) {
        baseUrl = window.location.href.split(urlArr[urlArr.length - 1])[0];
    } else {
        baseUrl = window.location.href;
    }
}

getBaseUrl();

function logoutNRedirectToLogin() {
    localStorage.clear();
    window.location.href = baseUrl + 'user-login.html';
}

function switchToOtherAccount() {
    if (localStorage.hasOwnProperty("nextbid_login")) {
        let loginData = JSON.parse(localStorage.getItem("nextbid_login"));
        loginData.type = loginData.type === "customer" ? "seller" : "customer";
        localStorage.setItem("nextbid_login", JSON.stringify(loginData));
        window.location.reload();
    } else {
        checkLogins();
    }
}

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
})();