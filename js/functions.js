$(document).ready(function() {
    // $("#whatsComing").hide();

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