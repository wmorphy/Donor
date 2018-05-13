var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema(
    {
        "title": String,
        "heading": String,
        "imgsource": String,
        "content": String,
        "date": String,
        "time": String
    }
);

mongoose.model('notifications', NotificationSchema);