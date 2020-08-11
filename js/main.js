var AnimalView = Backbone.View.extend({
  tagName: "li",
  className: "document-row",
  attributes: {
    "data-genre": "Jazz"
  },
  //here this consists of the render method that is being defined would act as a reference when 
  //rendering the template. The template render should return the dom element at the end .
  render: function(){
    this.$el.append(this.model.get('name') + '<button>Button</button> <button class="bookmark">ButtonWithBook</button>');
    //this returning of the this statement is a must for the sake of hte continuous concatinatin that can occur now .
    return this;
  },

  //to handle out the events we use the events property to handle out the events on the dom .
  events: {
    //enable click event in general for the dom element
    "click": "buttonClicked",
    //enable click event for the elements with the class bookmark
    "click .bookmark": "buttonClickBookMarkClass"
  },
  buttonClicked: function(){
    console.log("The button is being clicked") 
  },
  //this function is to enable on click of the elements with the class buttonClickBookMarkClass
  buttonClickBookMarkClass: function(e){
    e.stopPropagation()
    console.log("The click event for the class book mark is being made ")
  }
});

//passing up of the data to the view using the Model

var Animal = Backbone.Model.extend({
  defaults: {
    'animalType': 'mammal'
  }
  //here we can write the validate function if we want to validate specifically the models that we creaete
})

var animal1 = new Animal({'name': 'hog', 'size': 40, 'color': 'black'})
var animal2 = new Animal({'name': 'Archers', 'size': 20, 'color': 'yellow'})
//passsing the data onver here

var animalView = new AnimalView({el: '#container', model: animal1})
animalView.render()

var animalCollection = Backbone.Collection.extend({
  model: Animal
})
