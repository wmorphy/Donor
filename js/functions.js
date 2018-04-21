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

<<<<<<< HEAD
var buttonState = "off";
function changeColor() {
    if (buttonState == "on") {
        document.getElementById("indiv").style.backgroundColor = "white";
        document.getElementById("group").style.backgroundColor = "rgb(204, 2, 2)";
        buttonState = "off";
    }
    else if (buttonState == "off") {
        document.getElementById("indiv").style.backgroundColor = "rgb(204, 2, 2)";
        document.getElementById("group").style.backgroundColor = "white";
        buttonState = "on";
    }
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
$(readyFn);

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
=======

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
//
// function addNotification{
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     cell1.innerHTML = "NEW CELL1";
// }
//

//
// function startData(){
//     var notifications = [{num:1,text:ahfjdkhfaskj,img:"../img/noicee"}];
//     for (i = 0; i < 4; i++) {
//         var temp =document.getElementsByClassName("notification")[i];
//         temp.getElementsByTagName("notifHeader").innerHTML = notifications[i];
//
//     }
// }

//
// function addNotification(text){
//     notifications.add(text);
// }
//
// addNotification("Hello welcome to Donor space");
// addNotification("Red cross hits all time new record donors on Donor Space");
// addNotification("Hello welcome to Donor space");
// addNotification("Red cross hits all time new record donors on Donor Space");
// addNotification(5,"Hello welcome to Donor space");
// addNotification(6,"Red cross hits all time new record donors on Donor Space");
// addNotification(7,"Hello welcome to Donor space");
// addNotification(8,"Red cross hits all time new record donors on Donor Space");
>>>>>>> d5f2c2ee487be26b0c867fcc2adde045f678271f
