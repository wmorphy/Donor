
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
    if (location === "profile" || location === "teamprofile") {
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


    $(".deleteEntry").click(function() {
        $(this).closest("tr").remove();
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

function bookedAlert() {
    alert("Appointment Booked!");
};



