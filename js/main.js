
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var Song = Backbone.Model.extend({
    "validate": function(attrs){
        if(!attrs.title){
          return "Title is need for the definite"  
        }
    }
})

//inheritance learninng
var Animal = Backbone.Model.extend({
    walk: function(){
      console.log('Animal is walking')
    }
})
var Cow = Animal.extend({
    dance: function(){
      console.log('The cow is not able to dance')
    },
    walk: function(){
      console.log("overwriting the existing function")
      Animal.prototype.walk.apply(this)
    }
})

var cow = new Cow()
cow.dance()