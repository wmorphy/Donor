var activeID = "1234567";
var activeLongID = "000000000000000001234567";

// DOM Ready
$(document).ready(function() {
    // Populate page with HTML snippets
    processProfileData(activeLongID);
    processDonationData();
});


//Create HTML snippets
function processProfileData(inputID) {

    // jQuery AJAX call for JSON
    $.getJSON( '/api/' + inputID, function(data) {
        // store in global variable


        $("#fullName").append(data.firstname+ ' ' + data.lastname);
        $("#DOB").append(data.dateofbirth);
        $("#address").append(data.address);
        $("#city").append(data.suburb);
        $("#postcode").append(data.postcode);
        $("#state").append(data.state);
        $("#Mobile").append(data.phone);

        // var email_str = '<p>' + data.email + '</p>';
        // var bloodtype_str = '<p>' + data.bloodtype + '</p>';
        // var haemoglobin_str = '<p>' + data.haemoglobin + '</p>';
        // var weight_str = '<p>' + data.weight + '</p>';
        // var height_str = '<p>' + data.height + '</p>';

       // Inject the content strings into HTML
        //[insert code here]
       // $("#fullName").append(address_str);

    });
};



function processDonationData() {

    // jQuery AJAX call for JSON
    $.getJSON( '/api-donations', function(data) {

        $.each(data, function(){
            if (this.donorID == activeID) {
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
};