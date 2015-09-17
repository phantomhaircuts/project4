if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("comments", function () {
    return Tasks.find();
  });
}
