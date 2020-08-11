var Song = Backbone.Model.extend({
   defaults: {
     listeners: 0
   }
})

var song1 = new Song({title: "Beed Chant For Krishna"})

var SongView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this) 
  },

  render: function(){
    this.$el.html('the number of listeners for the song1 is:'+ this.model.get('listeners'))
    console.log("The view for the songView is being rendered")
    return this
  },
})


var songview = new SongView({model: song1, el: '#container'})
songview.render()


//since the state management has to be done in a real time like whenever the users are being updated then 
//count of the listeners should also get updated and this can be done in 2 ways
/*
  * polling: 
      This is the way in which the client would continuously ping server to find any updates for the model state
  * push Notification:
      Here a server would detectedly be sitting at the backend to notify the changes that happened to the data that is being 
      displayed in the front end . 
*/



