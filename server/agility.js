if (Meteor.isServer) {
  Meteor.publish("comments", function () {
    return Tasks.find();
  });
}
