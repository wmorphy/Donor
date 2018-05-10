var mongoose = require('mongoose');
var Members = mongoose.model('members');
var Notifications = mongoose.model('notifications');

var createMember = function(req,res){
    var member = new Members({
        "donorID": req.body.donorID,
        "password": req.body.password,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "dateofbirth": req.body.dateofbirth,
        "address": req.body.address,
        "suburb": req.body.suburb,
        "postcode": req.body.postcode,
        "state": req.body.state,
        "phone": req.body.phone,
        "email": req.body.email,
        "bloodtype": req.body.bloodtype,
        "haemoglobin": req.body.haemoglobin,
        "height": req.body.height,
        "weight": req.body.weight
    });
    member.save(function(err,newMember){
        if(!err){
            res.send(newMember);
        }else{
            res.sendStatus(400);
        }
    });
};

var findMember = function(req,res){

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

module.exports.createMember = createMember;
module.exports.findMember = findMember;
module.exports.findAllNotifs = findAllNotifs;