Pins = new Mongo.Collection("pins");
if (Meteor.isServer) {
  Meteor.publish("comments", function () {
    return Tasks.find();
  }),
  Meteor.publish("pins", function () {
    return Tasks.find();
  });
}
