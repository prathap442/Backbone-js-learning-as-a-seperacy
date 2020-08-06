var SongView = Backbone.View.extend({
  tagName: "span",
  className: "song",
  id: "product",
  attributes: {
    'data-genre':'Jazz'
  },
  //here this consists of the render method that is being defined would act as a reference when 
  //rendering the template. The template render should return the dom element at the end .
  render: function(){
    //this.$el specifies the element of the jquery on the dom
    this.$el.html("hello Sai This is prathap");
    //this returning of the this statement is a must for the sake of hte continuous concatinatin that can occur now .
    return this;
  }
});

var songView = new SongView({el: '#container'})
songView.render()
