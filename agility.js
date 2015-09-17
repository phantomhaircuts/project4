Comments = new Mongo.Collection("comments");

if (Meteor.isClient) {

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

        // Get value from form element
        var text = event.target.text.value;

        // Insert a task into the collection
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
