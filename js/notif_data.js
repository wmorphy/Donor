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
            //
            // var title_str = '<p>' + this.title + '</p>';
            // var heading_str = '<p>' + this.heading + '</p>';
            // var imgsource_str = '<p>' + this.imgsource + '</p>';
            // var content_str = '<p>' + this.content + '</p>';
            // var date_str = '<p>' + this.date + '</p>';
            // var time_str = '<p>' + this.time + '</p>';



        // Inject the content strings into HTML
        // [insert code here]


    });
};
//
//
// var num = 0;
// //Notifications input function
// function startNotifications() {
//     for (var i = num; i < num+6 ; i++) {
//         var html = '<div class="media px-2 pt-1">';
//         html += '<img src="../img/heart.png" alt="Add" class="mr-3 rounded" style="width:50px;">'
//         html += '<div class="media-body">'
//         html += '<h4 class="mb-1"></h4>'
//         html += '<h5><small><i>2 hours ago</i></small></h5>'
//         html += '<p>asjkhfhdjkhfaks</p></div>kjfhsjkadkfd</div>'
//         $("#append").append(html);
//     }
//     num+=5
// };