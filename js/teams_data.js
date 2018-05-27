


// DOM Ready
$(document).ready(function() {

    var pathname = window.location.pathname;

    if (pathname == "/teams") {
        processTeamData();
    }

});






// POPULATE TEAMS PAGE keep doing
function processTeamData() {
    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        var userid = doc.donorID;
        // jQuery AJAX call for JSON
        $.getJSON( '/api-teams', function(data) {

            $.each(data, function(){
                console.log("hello")
                if (this.email == userid) {
                    var html = "<%- include('./partials/placeholderteam', {name: "+ this.teamID +", members: "+ this.members.count() +", link: "+ this.link +"}) %>"
                    console.log("oneMessage");
                    // append the previous donations to the div prevDon
                    $("#teamsPage").append(html);
                }

            })
        });
    });
};