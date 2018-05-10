class Notification {
    constructor(title, heading, photo, time, para){
        this.Title = title;
        this.Heading = heading
        this.Photo = photo;
        this.Time = time;
        this.Para = Para;
    }

}


var posts = [

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

function addNotification(title, heading, photo, time, para){
    posts.add(new Notification(title, heading, photo, time, para));
}



module.exports = {
    posts, addNotification
};