$(document).ready(function() {
    // $("#whatsComing").hide();

    const comingHeight = $("#whatsComing").css('height');
    $("#whatsComing").animate({height: '0', opacity: '0'}, 0);

    $("#showComing").on("click", function() {
       if ($("#whatsComing").css("opacity") == '1') {
           $("#whatsComing").animate({height: '0', opacity: '0'}, 300);
       }

       else {
           $("#whatsComing").animate({height: comingHeight, opacity: '1'}, 300);
       }
   });
});