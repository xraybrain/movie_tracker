async function getData(url) {
  return await (await fetch(url)).json();
}

$(document).ready(function () {
  $('#search-form').on('submit', function (event) {
    event.preventDefault();
    $('#search-result-box').append($('#loading-template').html());
    $('#result-pane').html('');

    var formData = Object.create(null);

    $.each($(this).serializeArray(), function (_, field) {
      formData[field.name] = field.value;
    });

    if (formData.searchtext != '') {
      (async function () {
        data = await getData(
          '/api/moviesearch/?searchtext=' + formData.searchtext
        );

        $('#search-result-box .loading').remove();

        if (data.error === null) {
          var template = $('#movies-template').html();
          var html = Mustache.to_html(template, data);

          $('#result-pane').html(html);
        }
      })();
    }
  });
});
