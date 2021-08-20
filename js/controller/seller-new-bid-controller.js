// update preview card
function updateCardTitle(element) {
    $(`#bidTitleInputPreview`).html(element.value);
}

function updateEndsIn(element) {
    const format = "YYYY-MM-DD HH:mm:ss";
    $(`#bidEndsDatePreview`).html(moment(new Date(element.value)).format(format));
}

function updateStartFrom(element) {
    let value = element.value !== '' ? parseFloat(element.value).toFixed(2) : 0;
    $(`#bidStartFromPreview`).html(`${value} LKR`);
}

function updateImagePreview(event) {
    console.log(URL.createObjectURL(event.target.files[0]));
    $(`#bidImageInputPreview`).attr("src", URL.createObjectURL(event.target.files[0]));
}


function saveNewBid() {
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'POST',
        url: baseUrl + "/api/v1/",
        processData: false,
        contentType: false,
        dataType: "JSON",
        data: new FormData($('#newCategoryInput')[0]),
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

$('#createNewBidForm').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    if (document.querySelector('#createNewBidForm').checkValidity()) {
        // save bid
        saveNewBid();
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Invalid date! Please check again.'
        })
    }
});
