var requestData = function (parameters) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(parameters);

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        displayData(result);
    }).fail(function (err) {
        throw err;
    });
}

var displayData = function(data){
    var numberOfArticles = parseInt($('option:selected').val());
    $('#dataView').empty();
    for(var i = 0; i<numberOfArticles; i++){
        var card = $("<div>").addClass("card p-3 mt-3 shadow-sm")

        card.append('<h3>' + data.response.docs[i].headline.main + '</h3>');
        card.append('<p>' + data.response.docs[i].snippet + '</p>');

        $("#dataView").append(card)
    }
}

$(document).on('click', '#searchButton', function () {
    var parameters = {};
    parameters['api-key'] = "120fdf09ee934a2284fa0841ab13f7b3";
    parameters.q = $('#searchInput').val();
    if ($('#startYear').val() != "") {
        parameters.begin_date = $('#startYear').val() + '0101';
    }
    if ($('#endYear').val() != "") {
        parameters.end_date = $('#endYear').val() + '0101';
    }
    requestData(parameters);
});