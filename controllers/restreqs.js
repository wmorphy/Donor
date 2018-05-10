var mongoose = require('mongoose');
var Members = mongoose.model('members');
var Notifications = mongoose.model('notifications');

var Donations = mongoose.model('donations');
//
// var createMember = function(req,res){
//
//     var member = new Members({
//         "donorID": '',
//         "password": req.body.password,
//         "firstname": req.body.firstname,
//         "lastname": req.body.lastname,
//         "dateofbirth": req.body.dateofbirth,
//         "address": req.body.address,
//         "suburb": req.body.suburb,
//         "postcode": req.body.postcode,
//         "state": req.body.state,
//         "phone": req.body.phone,
//         "email": req.body.email,
//         "bloodtype": '',
//         "haemoglobin": '',
//         "height": '',
//         "weight": ''
//     });
//     member.save(function(err,newMember){
//         if(!err){
//             res.send(newMember);
//         }else{
//             res.sendStatus(400);
//         }
//     });
// };

var findProfile = function(req,res){

    var memberID = req.params.id;
    Members.findById(memberID,function(err,member){
        if(!err){
            res.send(member);
        }else{
            res.sendStatus(404);
        }
    });
};

var findAllNotifs = function(req,res){
    Notifications.find(function(err,notifs){
        if(!err){
            res.send(notifs);
        }else{
            res.sendStatus(404);
        }
    });
}


var findDonations = function(req,res){
    Donations.find(function(err,donations){
        if(!err){
            res.send(donations);
        }else{
            res.sendStatus(404);
        }
    });
};

// module.exports.createMember = createMember;
// module.exports.findMember = findMember;
module.exports.findAllNotifs = findAllNotifs;
module.exports.findDonations = findDonations;
//module exports
module.exports.findProfile = findProfile;