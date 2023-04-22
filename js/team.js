$(document).ready(function () {
    log("Document ready."); // Log that the document is ready
    // Fetch the JSON data
    var url = "team_json/exec_team.json"; // URL to fetch
    console.log("Fetching data from " + url);

    $.getJSON(url, function (data) {
        log("JSON data fetched."); // Log that the JSON data is fetched
        // Loop through the data and generate HTML markup
        $.each(data, function (index, exec) {
            var html = '<section><figure>';
            html += '<img src="' + exec.image + '" alt="' + exec.alt + '">';
            html += '<figcaption>' + exec.title + " " + exec.name + '</figcaption>';
            html += '<aside>' + exec.position + '</aside>';
            html += '</figure></section>';
            $('#exec').append(html);
        });
        log("HTML markup generated."); // Log that the HTML markup is generated
    })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error fetching JSON data: " + err); // Log the error message
        });

    $.getJSON("team_json/sen_team.json", function (data) {
        // Loop through the data and generate HTML markup
        $.each(data, function (index, sen) {
            var html = '<section><figure>';
            html += '<img src="' + sen.image + '" alt="' + sen.alt + '">';
            html += '<figcaption>' + sen.title + " " + sen.name + '</figcaption>';
            html += '<aside>' + sen.position + '</aside>';
            html += '</figure></section>';
            $('#sen').append(html);
        });
    });

});

