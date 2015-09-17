Pins = new Mongo.Collection("pins")
if (Meteor.isClient) {

  Meteor.subscribe ("pins");

  Template.body.helpers({
    pins: function () {
      return Pins.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
      "submit .new-pin": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // GET a value from form
        var text = event.target.text.value;

        // ADD a Pin into the collection
        Pins.insert({
          Notes: text,                      //Notes on Pin
          Latitude: text,                   // Current Latitude
          Longitude: text,                  // Current Longitude
          createdAt: new Date(),            // current time
          owner: Meteor.userId(),           // _id of logged in user
          username: Meteor.user().username  // username of logged in user
        });

        // Clear form
        event.target.text.value = "";
      }
    });

  Template.pin.events({
    "click .delete": function () {
      Pins.remove(this._id);
    }
  });
}
