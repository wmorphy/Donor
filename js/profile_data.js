
var activeID = "";
var activeLongID = "00000000000000000";
// DOM Ready
$(document).ready(function() {
    // Populate page with HTML snippets

    $('#submitlandingpage').click(enterSite);

    var pathname = window.location.pathname;

    // Populate page with HTML snippets

    if (pathname == "/profile") {
        processProfileData();
        processDonationData();
        updateProfle();

    }
    if (pathname == "/teams") {
        processTeamData();
    }

    //EDIT MEMBER







    $("#create").click(function(){

        $.get('/api-createuser/'+$("#password").val() +'/' +$("#firstName").val()+'/'+$("#surname").val()+'/'+$("#dateOfBirth").val()
            +'/'+$("#address").val()+'/'+$("#city").val()+'/'+$("#postcode").val()+'/'
            +$("#state").val()+'/'+$("#mobile").val()+'/'+$("#email").val());
        window.location.href = "/home";
    });
});




function updateProfle(){
var userdoc = $.getJSON('/api-activeuserid', function(doc) {
    var userid = doc.donorID;
    $("#test2").click(function () {
        alert("hello");

        var newEmail = $("#newEmail").val();
        var newMobile = $("#newMobile").val();
        var newDOB = $("#newDOB").val();
        Members.findOneAndUpdate({_id: "00000000000000000" + userid}, {$set: {email: newEmail}}, {$set: {phone: newMobile}},
            {$set: {dateofbirth: newDOB}}, {new: true}, function (err, doc) {
            });
        window.location.href = "/profile";
    })

});
}

//Create HTML snippets
function processProfileData() {

    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        var userid = doc.donorID;

        // jQuery AJAX call for JSON
        $.getJSON( '/api/00000000000000000' + userid, function(data) {
            // store in global variable

            $("#fullName").append(data.firstname+ ' ' + data.lastname);
            $("#dob").append(data.dateofbirth);
            $("#address").append(data.address);
            $("#city").append(data.suburb);
            $("#postcode").append(data.postcode);
            $("#state").append(data.state);
            $("#mobile").append(data.phone);
            $("#email").append(data.email);
            $("#donornum").append(userid);
            $("#bloodtype").append(data.bloodtype);
            $("#weight").append(data.weight);
            $("#height").append(data.height);
            $("#haemoglobin").append(data.haemoglobin);
        });
    });
};




function processTeamData() {

    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        var userid = doc.donorID;

        // jQuery AJAX call for JSON
        $.getJSON( '/api-teams', function(data) {

            $.each(data, function(){
                //if (this.members.contains(userid)) {
                html = '<tr>'
                html += '<td>'+this.teamID+'</td>'
                html += '<td>'+ this.teamname +'</td>'

                html = '<div class="media mb-1 px-3 pt-2">'
                html += '<img src="img/dabois.png" class="mr-4" width="50px">'
                html += '<div class="media-body align-self-center">'
                html += '<h6 class="mb-1">'+this.teamname+'</h6>'
                html += '<p class="mb-0"><img src="img/torso.png" width="16px">'+this.teamID+'</p>'
                html += '</div> </div>'
                // append the previous donations to the div prevDon
                $("#allteams").append(html);
                // }
            })
        });
    });
};


$('#submitlandingpage').on('click', enterSite);

function enterSite() {
// checks if the sign in page password is equal to one from the database
    var inputID = document.getElementById("donornumlandingpage").value;
    $.getJSON( '/api/00000000000000000' + inputID, function(data) {
        var password_str = data.password;
        alert(activeID += document.getElementById($("#passwordlandingpage").val()));
        if (password_str == $("#passwordlandingpage").val()){
            activeMemberID = "00000000000000000" + inputID;
            alert("paswords mattch borooossss");
            window.open()
        }
        else {
            alert("Password or Donor Number is incorrect. Please try again.")
        }
    });
}


function processDonationData() {

    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        var userid = doc.donorID;

        // jQuery AJAX call for JSON
        $.getJSON( '/api-donations', function(data) {

            $.each(data, function(){
                if (this.donorID == userid) {
                    html = '<tr>'
                    html += '<td>'+this.date+'</td>'
                    html += '<td>'+ this.location +'</td>'


                    if(this.type == "blood"){
                        html += '<td class="text-success font-weight-bold text-center">&#10004;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
                    }
                    else if (this.type == "bone"){
                        html += '<td class="text-success font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&#10004;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
                    }
                    else{
                        html += '<td class="text-success font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&#10004;</td></tr>'
                    }
                    // append the previous donations to the div prevDon
                    $("#prevDon").append(html);
                }
            })
        });

    });

};

function enterSite() {
// checks if the sign in page password is equal to one from the database
    var inputID = document.getElementById("donornumlandingpage").value;
    var user_exists = false;

    var  db_data = $.getJSON( '/api/00000000000000000' + inputID, function(data) {
        user_exists = true;
        var password_str = data.password;

        if (password_str == $("#passwordlandingpage").val()){
            $.get('/api-activeuserid/' + inputID, function(data){});
            window.location.href="/home";
        }
        else{
            alert("Donor Number or Password is incorrect. Please try again.");
        }
    })
    .fail(function(){
        alert("lbkbdkwhfbor Password is incorrect. Please try again.");
    });
};