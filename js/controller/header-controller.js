function createMenuListItem(liData) {
    let classes = ''
    if (liData.type === "button") {
        classes = "btn btn-primary text-white fw-bold border-0 px-3";
    } else if (liData.type === "sub-menu-item") {
        classes = "dropdown-item";
    } else {
        classes = "nav-link active";
    }

    let liClass = "";
    let available = false;
    if (localStorage.hasOwnProperty("nextbid_login") && liData.hasOwnProperty("available")) {
        available = localStorage.hasOwnProperty("nextbid_login") && JSON.parse(localStorage.getItem("nextbid_login")).type === liData.available;
    }
    liClass = available ? liClass + "" : liClass + " d-none";

    let url = liData.hasOwnProperty("callback") ? 'javascript:' + liData.callback + '' : liData.url;

    return `<li class="${liClass} ${!(liData.type === "sub-menu-item") ? "nav-item m-sm-1 m-md-1 m-lg-3" : ""}">
                <a class="${classes}" aria-current="page" href="${url}">${liData.title}</a>
            </li>`;
}

function getInnerSubMenu(subMenuData) {
    let subMenuHeader = `<li class="nav-item dropdown m-sm-1 m-md-1 m-lg-3">
                        <a class="nav-link dropdown-toggle" href="${subMenuData.url}" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            ${subMenuData.title}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;
    let subMenuFooter = `</ul>
                    </li>`;
    let subMenuItems = '';

    subMenuData.sub_menu.forEach((element, index) => {
        subMenuItems += createMenuListItem(element);
    });

    return subMenuHeader + subMenuItems + subMenuFooter;
}

$(document).ready(function () {
    const headerEle = $('header #topMenuWrapper');
    headerEle.empty();

    fetch("./js/menu-config.json")
        .then(response => {
            if (!response.ok) {
                throw new Error()
            }
            console.log(response);
            return response.json();
        })
        .then(json => {
            console.log(json)
            json['menu_items'].forEach((element, index) => {
                if (element.sub_menu) {
                    headerEle.append(getInnerSubMenu(element));
                } else {
                    headerEle.append(createMenuListItem(element));
                }
            });
        })
        .catch(reason => {
            console.log(reason)
            Toast.fire({
                icon: 'error',
                title: 'Something went wrong! Please try again.'
            })
        });
});