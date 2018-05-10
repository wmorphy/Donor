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

        $.each(data, function(){
            var title_str = '<p>' + this.title + '</p>';
            var heading_str = '<p>' + this.heading + '</p>';
            var imgsource_str = '<p>' + this.imgsource + '</p>';
            var content_str = '<p>' + this.content + '</p>';
            var date_str = '<p>' + this.date + '</p>';
            var time_str = '<p>' + this.time + '</p>';

        }

        // Inject the content strings into HTML
        // [insert code here]

        $( ".profileName" ).append( );
    });
};
