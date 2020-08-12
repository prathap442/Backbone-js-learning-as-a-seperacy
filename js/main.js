var person = {
  title: "this is the person title",
  walk: function(){
    this.trigger("walking",{
      speed: 1,
      time: "80:00pm"
    })
  }
}

/*
  so here we are using underscore.js and we are extending the properties of the person object 
  to have backbone.events
*/
_.extend(person, Backbone.Events)


//inorder to subscribe for the event
person.on("walking",function(e){
  console.log("THe arguments passed are", e)
})

//subscribing to an event by name walk and when the walk event is 
//being triggered then we get the walking function to be executed
person.on("walk",function(){
  alert("trigerred")
})

//unsubscribing to an event by name walking
person.off("walking",function(){
  console.log("Unsubscribed from an event by name walk");
})

//person.once can be used in order to make the trigger function work only once for that object .
