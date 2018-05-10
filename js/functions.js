// var notifs = db.notifications.find();

$(document).ready(function() {
    $(".textFieldInput").hide();
    $(".textFieldInput").removeAttr("hidden");
    $("#test2").hide();
    $("#test2").removeAttr("hidden");
    $("#test3").hide();
    $("#test3").removeAttr("hidden");
    $("#test3").removeAttr("hidden");

    // Get what page we are currently on
    var location = window.location.href.split("/");
    location = location[location.length - 1];

    // Only run the create function on the correct page
    if (location === "profile") {
        createGraph();
    }

    $("#test1, #test3").click(function() {
        $(".textField").toggle();
        $(".textFieldInput").toggle();
        $("#test1").toggle();
        $("#test2").toggle();
        $("#test3").toggle();
    });

    $(".showForm").click(function() {
        const thisForm = "#" + $(this).attr("id") + "Form";
        $(thisForm).fadeIn();
        $(".appForm:not(" + thisForm + ")").hide();

    });

    $(".selectType").click(function() {
        $($(this).siblings()).prop("checked", !$(this).siblings().prop("checked"));

        if($(this).siblings().prop("checked")) {
            $(this).removeClass("btn-outline-danger");
            $(this).addClass("btn-danger");
        }

        else {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-outline-danger");
        }

    });



});

function createGraph() {
    new Chart(document.getElementById("myChart"), {
        type: 'pie',
        data: {
            labels: ["Blood", "Plasma", "Bone Marrow"],
            datasets: [{
                label: '# of Votes',
                data: [7, 4, 1],
                backgroundColor: [
                    '#dc3545',
                    '#007bff',
                    '#ffc107'
                ],
                borderColor: [
                    '#dc3545',
                    '#007bff',
                    '#ffc107'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: false,
            showAllTooltips: true,
            tooltips: {
                custom: function (tooltip) {
                    if (!tooltip) return;
                    // disable displaying the color box;
                    tooltip.displayColors = false;
                }
            },
            legend: {
                display: false,
            },
            responsive: false
        }
    });
}

<<<<<<< HEAD;
function bookedAlert() {
    alert("Appointment Booked!");
}




=======;
var notif = [

    {Title: "DonorSpace",
        Heading: "Welcome",
        Photo:"../img/favicon.png",
        Time: "5",
        Para:"Welcome to the home of donations DonorPlace, where you " +
        "can keep track maintain and book all of your donations."
    },

    {Title: "RedCross",
        Heading: "New Record",
        Photo: "../img/logo.jpeg",
        Time: "8",
        Para:"The Red Cross blood foundation has reached 300,000L"
    },
    {Title: "Australian Bone Marrow Registry",
        Heading: "Goal Achieved",
        Photo:"../img/ABMR.png",
        Time: "10",
        Para:"We have reached 300,000 bone marrow donors, now on the registry"
    },
    {Title: "Jen Benfelst",
        Heading: "First Donation",
        Photo:"../img/girl.png",
        Time: "16",
        Para:"Jen has accomplished her first donation on DonorSpace, saving 1 life"
    },
    {Title: "DonorSpace",
        Heading: "Welcome",
        Photo:"../img/favicon.png",
        Time: "5",
        Para:"Welcome to the home of donations DonorPlace, where you " +
        "can keep track maintain and book all of your donations."
    },

    {Title: "RedCross",
        Heading: "New Record",
        Photo: "../img/logo.jpeg",
        Time: "8",
        Para:"The Red Cross blood foundation has reached 300,000L"
    },
    {Title: "Australian Bone Marrow Registry",
        Heading: "Goal Achieved",
        Photo:"../img/ABMR.png",
        Time: "10",
        Para:"We have reached 300,000 bone marrow donors, now on the registry"
    },
    {Title: "Jen Benfelst",
        Heading: "First Donation",
        Photo:"../img/girl.png",
        Time: "16",
        Para:"Jen has accomplished her first donation on DonorSpace, saving 1 life"
    }
];
//
//
//
// function startNotifications() {
//     $.each(data, function() {
//         var html = '<div class="media px-2 pt-1">';
//         html += '<img src=' + this.imgsource + 'alt="Add" class="mr-3 rounded" style="width:50px;">'
//         html += '<div class="media-body">'
//         html += '<h4 class="mb-1"></h4>'
//         html += '<h5><small><i>2 hours ago</i></small></h5>'
//         html += '<p>'+ this.heading +'</p></div>' +this.content +'</div>'
//         $("#append").append(html);
//     });
//
// };
//
//
//
// function numHours(time){
//
// }





//Prev Donations
function startPreviousDonations() {
    for (var i = 0; i < 10 ; i++) {
        html = '<tr>';
        html += '<td>08/05/2018</td>';
        html += '<td>Melbourne Central</td>';
        html += '<td class="text-success font-weight-bold text-center">&#10004;</td>';
        html += '<td class="text-danger font-weight-bold text-center">&times;</td>';
        html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>';
        $("#prevDon").append(html);
    }
}
