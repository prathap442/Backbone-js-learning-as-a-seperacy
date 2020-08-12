var Song = Backbone.Model.extend({
  defaults: {
    title: "Rain in the Gain"
  }
})

var SongView = Backbone.View.extend({
  tagName: "span",
  className: "song",
  id: "1234",
  attributes: {
    "data-genre": "Jazz"
  },
  render: function() {
    this.$el.html('song view rendering');
    return this;
  },
  /*
    the above function tries to frame the following thing
    <span id='1234' class='song' data-genre='jazz'>song view rendering</span>
  */
  initialize: function(){
    this.model.on('add',this.onSongAdded, this)  
  },

  onSongAdded: function(song){
    var songView = new SongView({ model: song })
    this.$el.append(songView.render().$el)
  }
})
var songView = new SongView();
var songs = [
  new Song({title: "The Heart is back"}),
  new Song({title: "Love Song in the 2.0"}),
  new Song({title: "The Mrucose is the fulfillment"})
];
$("#container").html(songView.render().$el);
