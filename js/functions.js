$(document).ready(function() {
    resizeContent();
    resizeBackground();

    $(window).resize(function() {
        resizeContent();
        resizeBackground();
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
    console.log($("#pageContent").css('width'));
    console.log($("#pageContent").css('height'));
    if (removepx($("#pageContent").css('width')) > 1.8 * removepx($("#pageContent").css('height'))) {
        console.log("resize 1");
        $("#pageContent").css("background-size", "100% auto");
    }

    else {
        console.log("resize 2");
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