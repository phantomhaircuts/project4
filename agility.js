Comments = new Mongo.Collection("comments");
if (Meteor.isClient) {

  Template.body.events({
  'click .locator': function (e) {
    e.preventDefault();
    console.log("burrito button has been pressed.");
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
