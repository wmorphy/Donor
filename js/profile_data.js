
var activeID = "";
var activeLongID = "00000000000000000";
// DOM Ready
$(document).ready(function() {

    $('#submitlandingpage').click(enterSite);


    var pathname = window.location.pathname;


    if (pathname == "/profile") {
        processProfileData();
        processDonationData();
        updateProfle();

    }
    if (pathname == "/teams") {
        processTeamData();
    }

    //EDIT MEMBER


    //CALL CREATE MEMBER
    //On create profile, an new member is added to the database.
    $("#create").click(function(){

        $.get('/api-createuser/'+$("#password").val() +'/' +$("#firstName").val()+'/'+$("#surname").val()+'/'+$("#dateOfBirth").val()
            +'/'+$("#address").val()+'/'+$("#city").val()+'/'+$("#postcode").val()+'/'
            +$("#state").val()+'/'+$("#mobile").val()+'/'+$("#email").val());
        //reallocate window to Home
        window.location.href = "/home";

    });
});







//UPDATE PROFILE
//NOT DONE
//
//Adapt to update profile on edit
function updateProfle(){
var userdoc = $.getJSON('/api-activeuserid', function(doc) {
    var userid = doc.donorID;
    $("#test2").click(function () {
        alert("hello");

        var newEmail = $("#newEmail").val();
        var newMobile = $("#newMobile").val();
        var newDOB = $("#newDOB").val();
        //
        //
        //
        //
        // CHANGE THIS FOR EMAIL LATER
        Members.findOneAndUpdate({_id: "00000000000000000" + userid}, {$set: {email: newEmail}}, {$set: {phone: newMobile}},
            {$set: {dateofbirth: newDOB}}, {new: true}, function (err, doc) {
            });
        window.location.href = "/profile";
    })

});
}


// FILL PROFILE DATA
// Gets relevent information from current user and appends it
function processProfileData() {
    var userdoc = $.getJSON('/api-activeuserid', function(doc){
        //Current user id is equal to email
        var userid = doc.donorID;

        // jQuery AJAX call for JSON
        $.getJSON( '/api/' + userid, function(data) {
            // store in global variable
            $("#fullName").text(data.firstname+ ' ' + data.lastname);
            $("#dob").text(data.dateofbirth);
            $("#address").text(data.address);
            $("#city").text(data.suburb);
            $("#postcode").text(data.postcode);
            $("#state").text(data.state);
            $("#mobile").text(data.phone);
            $("#email").text(data.email);
            $("#donornum").text(data.donorNum);
            $("#bloodtype").text(data.bloodtype);
            $("#weight").text(data.weight);
            $("#height").text(data.height);
            $("#haemoglobin").text(data.haemoglobin);
            $(".loaderDiv").hide();
            $(".contentDiv").animate({opacity: 1});
        });


    });
};




function processTeamData() {
    //Switch to make sure it handles email
    //
    //
    //
    //
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


// POPULATE PREVIOUS DONATIONS
// fills out the previous donations tab on profile page
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
                    else if (this.type == "plasma"){
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-success font-weight-bold text-center">&#10004;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
                    }
                    else{
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
                        html += '<td class="text-success font-weight-bold text-center">&#10004;</td></tr>'
                    }
                    // append the previous donations to the div prevDon
                    $("#prevDon").append(html);
                }
            })
        });

    });

};



// EMAIL AND PASSWORD CHECK
//checks if the Password and email match those of someone in the database
function enterSite() {

    var inputID = document.getElementById("emailLandingPage").value;
    alert(inputID);
    alert($("#passwordLandingPage").val());
    var user_exists = false;


    $.getJSON( '/api/' + inputID, function(data){

        user_exists = true;
        var password_str = data.password;

        if (password_str == $("#passwordLandingPage").val()){
            $.get('/api-activeuserid/' + inputID, function(doc){});
            window.location.href="/home";
        }
        else{
            alert("Donor Number or Password is incorrect. Please try again.");
        }
    })

    .fail(function(){
        alert("fail");
    });
};