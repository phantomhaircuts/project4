Comments = new Mongo.Collection("comments");

if (Meteor.isClient) {
  Template.body.helpers({
    comments: function () {
      return Comments.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
      "submit .new-comment": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var text = event.target.text.value;

        // Insert a task into the collection
        Comments.insert({
          text: text,
          createdAt: new Date() // current time
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
  Template.map.rendered = function() {
    L.Icon.Default.imagePath = 'http://crcv.ucf.edu/people/phd_students/mahdi/images/map_icon.svg';
    map = L.map("map").setView([38.897604, -76.9912402], 16);
    L.tileLayer('https://api.tiles.mapbox.com/v4/phantomhaircuts.1a4dda09/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhhbnRvbWhhaXJjdXRzIiwiYSI6Ijc4NzQzY2IyOTg4NzVhNWFlNzJkZjI5Y2FjNmE3NzNmIn0.1jakhTTyrFLd70ccY0wkRw', {
    maxZoom: 20
    }).addTo(map);
    L.marker([38.897604, -76.9912402]).addTo(map);
  };
}
