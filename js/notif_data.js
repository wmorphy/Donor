// Userlist data array for filling in info box

// DOM Ready
$(document).ready(function() {
    // Populate page with HTML snippets
    processNotifsData();
});

// Create HTML snippets
function processNotifsData() {

    // jQuery AJAX call for JSON
    $.getJSON( '/api-notifs', function(data) {

        $.each(data, function() {
            var html = '<div class="media px-2 pt-1">';
            html += '<img src=' + this.imgsource + ' alt="Add" class="mr-3 rounded" style="width:50px;">'
            html += '<div class="media-body">'
            html += '<h4 class="mb-1">' + this.title + '</h4>'
            html += '<h5><small><i>' + this.time + ' hours ago</i></small></h5>'
            html += '<p>' + this.content + '</p></div>' + this.heading + '</div>'
            $("#append").append(html);
        });



        // Inject the content strings into HTML
        // [insert code here]


    });
};

