Comments = new Mongo.Collection("comments");
if (Meteor.isClient) {

  Template.body.events({

  //Update Current Location.
  'click .locator': function (e) {
    e.preventDefault();
    console.log("burrito button has been pressed.");


    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      $(".userloc").text("Lat is:" + latitude + " and Long is " + longitude)
      console.log('New Current Location. Lat is ' + latitude + ' Long is ' + longitude);
    };

    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  },

  //about page display function
  'click .about': function (e) {
    e.preventDefault();
    console.log("about a burrito.");
    $(".about-page").css("display", "block").fadein(2000)
  },

  //ex-out about page function
  'click .ex-out': function (e) {
    e.preventDefault();
    console.log("not about a burrito.");
    $(".about-page").css("display", "none").fadeout(2000)
  }
});

Template.body.events({
'click .pin': function (e) {
  e.preventDefault();
  console.log("burrito 2 button has been pressed.");
}
});

  Meteor.subscribe("comments");

  Template.body.helpers({
    comments: function () {
      return Comments.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
      "submit .new-comment": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // GET a value from form
        var text = event.target.text.value;

        // ADD a Comment into the collection
        Comments.insert({
          text: text,
          createdAt: new Date(),            // current time
          owner: Meteor.userId(),           // _id of logged in user
          username: Meteor.user().username  // username of logged in user
        });

        // Clear form
        event.target.text.value = "";
      }
    });

  Template.comment.events({
    "click .delete": function () {
      Comments.remove(this._id);
    }
  });
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
