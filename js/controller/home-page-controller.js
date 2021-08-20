function createAndAppendBidsList(response) {

}

function _loadTrendingBids() {
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'GET',
        url: baseUrl + "/api/v1/",
        processData: false,
        contentType: false,
        dataType: "JSON",
        async: true,
        beforeSend: function () {
            // show loading

        },
        complete: function () {
            // hide loading

        },
        success: function (response) {
            // handle success
            createAndAppendBidsList(response);
        },
        error: function (response) {
            // handle error
            Toast.fire({
                icon: 'error',
                title: 'Something went wrong! check your network connection'
            })
        }
    });
}

$(document).ready(function () {
    _loadTrendingBids();
});