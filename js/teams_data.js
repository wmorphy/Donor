//
// // DOM Ready
// $(document).ready(function() {
//
//     var pathname = window.location.pathname;
//
//     if (pathname == "/teams") {
//         processTeamData;
//     };
//
// });
//
//
//
//
//
//
// // POPULATE TEAMS PAGE keep doing
// function processTeamData() {
//     var userdoc = $.getJSON('/api-activeuserid', function(doc){
//         var userid = doc.donorID;
//         // jQuery AJAX call for JSON
//         $.getJSON( '/api-teams', function(data) {
//
//             $.each(data, function(){
//                 console.log("hello")
//                 if (this.email == userid) {
//                     var html = '<a href="/'+ this.link +'" class="cardLink text-body mx-1 mt-3">'
//                         html += '<div class="card px-3 pt-3 pb-2" style="width:175px;">'
//                         html += '<img class="card-img-top rounded" src="img/boy" alt="Card image">'
//                         html += '<hr class="mb-2"/>'
//                         html += '<div class="card-body px-2 py-1">'
//                         html += '<h5 class="card-title text-center font-rubik my-1"> '+this.name+' </h5>'
//                         html += '<p class="mb-0 text-center"><img src="img/torso.png" width="16px" class="mr-1">'+this.members+'</p></div></div></a>'
//
//                     // append the previous donations to the div prevDon
//                     $("#teamsPage").append(html);
//                 }
//
//             })
//         });
//     });
// };