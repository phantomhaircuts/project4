Pins = new Mongo.Collection("pins");

if (Meteor.isClient) {

  Meteor.subscribe("pins");

  Template.body.events({

        "submit .new-pin": function(event){
            //prevent default browser submit
            event.preventDefault();

            //get valute from form element
            var title = event.target.title.value;
            var note = event.target.note.value;


            // insert Pin
            Pins.insert({
                title: title,
                note: note,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username,
                pinLoc: userLoc
            }),

            // clear form
            event.target.title.value = "";
            event.target.note.value = "";
          },
        }); //End Template.body.events

}
