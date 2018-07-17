var requestData = function (parameters) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(parameters);

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });
}

$(document).on('#searchButton', 'click', function () {
    var parameters = {};
    parameters['api-key'] = "120fdf09ee934a2284fa0841ab13f7b3";
    parameters.q = $('#searchInput').val();
    if ($('#startYear').val() != "") {
        parameters.begin_date = $($('#startYear'));
    }
    if ($('#endYear').val() != "") {
        parameters.end_date = $($('#endYear'));
    }
    requestData(parameters);
});