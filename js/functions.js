// var notifs = db.notifications.find();

$(document).ready(function() {
    resizeContent();
    resizeBackground();
    createGraph();
    setTimeout(resizeTeams, 1000);

    $(window).resize(function() {
        resizeContent();
        resizeBackground();
        resizeTeams();
    });

    $("#addEmail").on("click", function() {
        alert("We've added you to the waiting list.");
    });

    const comingHeight = $("#whatsComing").css('height');
    const interestHeight = $("#expressInterest").css('height');

    $("#whatsComing").animate({height: '0', opacity: '0'}, 0);
    $("#expressInterest").animate({height: '0', opacity: '0'}, 0);

    $("#showComing").on("click", function() {
        if ($("#whatsComing").css("opacity") == '1') {
            $("#whatsComing").animate({height: '0', opacity: '0'}, 300);
        }

        else {
            $("#whatsComing").animate({height: comingHeight, opacity: '1'}, 300);
            $("#expressInterest").animate({height: '0', opacity: '0'}, 300);
        }
    });

    $("#showInterest").on("click", function() {
        if ($("#expressInterest").css("opacity") == '1') {
            $("#expressInterest").animate({height: '0', opacity: '0'}, 300);
        }

        else {
            $("#expressInterest").animate({height: interestHeight, opacity: '1'}, 300);
            $("#whatsComing").animate({height: '0', opacity: '0'}, 300);
        }
    });
});

function resizeBackground() {
    if (removepx($("#pageContent").css('width')) > 1.8 * removepx($("#pageContent").css('height'))) {
        $("#pageContent").css("background-size", "100% auto");
    }

    else {
        $("#pageContent").css("background-size", "auto 100%");
    }
}

function resizeContent() {
    const headerHeight = $("#pageHeaderNav").css('height');
    const footerHeight = $("#pageFooter").css('height');
    const contentHeight = window.innerHeight - removepx(headerHeight) - removepx(footerHeight);

    $("#pageContent").css("height", contentHeight);
}

function removepx(string) {
    return string.substr(0, string.length - 2);
}


function resizeTeams() {
    const statHeight = $("#statistics").css('height');
    const pieHeight = $("#pieGraph").css('height');
    const donationHeight = $("#donations").css('height');

    const teamHeight = parseInt(removepx(statHeight)) + parseInt(removepx(pieHeight)) - parseInt(removepx(donationHeight));

    $("#myTeams").css("height", teamHeight);

}

function createGraph() {
    new Chart(document.getElementById("myChart"), {
        type: 'pie',
        data: {
            labels: ["Blood", "Plasma", "Bone Marrow"],
            datasets: [{
                label: '# of Votes',
                data: [7, 4, 1],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
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
function toggleTypes() {
    $("#donBlood").click(function() {
        $(this).css('background-color', '#C71F40');
        resetBone();
        resetPlasma();
    });
    $("#donBone").click(function() {
        $(this).css('background-color', '#C71F40');
        resetBlood();
        resetPlasma();
    });
    $("#donPlasma").click(function() {
        $(this).css('background-color', '#C71F40');
        resetBlood();
        resetBone();
    });
}
function resetBlood() {
    $("#donBlood").css('background-color', '#EEE');
}
function resetBone() {
    $("#donBone").css('background-color', '#EEE');
}
function resetPlasma() {
    $("#donPlasma").css('background-color', '#EEE');
}

function toggleGroup() {
    $("#donGroup").click(function () {
        $(this).css('background-color', '#C71F40');
        resetIndiv();
    });
    $("#donIndiv").click(function () {
        $(this).css('background-color', '#C71F40');
        resetGroup();
    });
}

function resetIndiv() {
    $("#donIndiv").css('background-color', '#EEE');
}
function resetGroup() {
    $("#donGroup").css('background-color', '#EEE');
}

function bookedAlert() {
    alert("Appointment Booked!");
}





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
        html = '<tr>'
        html += '<td>08/05/2018</td>'
        html += '<td>Melbourne Central</td>'
        html += '<td class="text-success font-weight-bold text-center">&#10004;</td>'
        html += '<td class="text-danger font-weight-bold text-center">&times;</td>'
        html += '<td class="text-danger font-weight-bold text-center">&times;</td></tr>'
        $("#prevDon").append(html);
    }
};
