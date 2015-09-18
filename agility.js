Comments = new Mongo.Collection("comments");
if (Meteor.isClient) {

  Template.body.events({

  //Update Current Location.
  'click .locator': function (e) {
    e.preventDefault();
    console.log("burrito button has been pressed.");

    // Initial Get Current Position:

    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    // If Position can be located:

    function success(pos) {
      var crd = pos.coords;
      var userLoc = [crd.latitude, crd.longitude];
      var latitude = crd.latitude;
      var longitude = crd.longitude;
      $(".userloc").text("Lat is:" + latitude + " and Long is " + longitude)
      console.log('User Position is at: ' + userLoc);
      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('Accurate within about: ' + crd.accuracy + ' meters.');

     //Add current Position marker

      L.marker(userLoc, {
        icon: temp_icon
      }).addTo(map);
    };

    // If Position cannot be located:
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    // Find Position
    navigator.geolocation.watchPosition(success, error, options);
  },

  //about page display function
  'click .about': function (e) {
    e.preventDefault();
    console.log("about a burrito.");
    $(".about-page").css("display", "block")
  },

  'click .pins': function (e) {
    e.preventDefault();
    console.log("about a pinrrito.");
    $(".pin-page").css("display", "block")
  },

  //ex-out about page function
  'click .ex-out': function (e) {
    e.preventDefault();
    console.log("not about a burrito.");
    $(".about-page").css("display", "none")
  },

  //exit pin page
  'click .pin-out': function (e) {
    e.preventDefault();
    $(".pin-page").css("display", "none")
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
