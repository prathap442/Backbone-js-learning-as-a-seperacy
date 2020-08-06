```
  here the exists the thing in the main.js we need to see how the Backbone.Model.extend({hash of attributes})
  when being passed gives us the output
```
- To validate the data by the attribute we need to do that in the validate attribute of the Backbone.Model.extend hash need topass an attribute called validate .
- The validate attribute is generatlly a function and then in this function the attributes like tilte can be validated and then return wiould be expected .
```
var Song = Backbone.Model.extend({
    "validate": function(attrs){
        if(!attrs.title){
          return "Title is need for the definite"  
        }
    }
})

s1 = new Song()
s1.isValid() //returns false
but when the titile is being given 
s2 = new Song({"title": "Alfa De souza"})
s2.isValid() // return true

```


//connecting to the server in the backend 

var User = Backbone.Model.extend({
  //this specifies the route from which the api needs to be made 
  'urlRoot': 'https://reqres.in/api/users'
})

var user = new User({id: 1})
user.fetch() // this is used for the GET request performing and it would form the uri as follows
// /api/songs/1

The follwoing are the keywords that can be used in order to store the data in the database .
keyword  HTTPVERB 

fetch   GET
save    POST/PUT
destroy DELETE
 
  -----------------------------Updating an Object ---------------------
  var Song = Backbone.Model.extend({
    'urlRoot': '/api/songs'
  })

  var song = new Song({id:1});
  song.fetch(); this would basically fetch that object from the backend database 
  song.set('title', "this is the speed")
  song.update()
  /the above statement basically does the proces of the eupdating of the song object to the database 
  ---------------------------------------------------------------------

var User = Backbone.Model.extend({
  'urlRoot': 'https://reqres.in/api/users'
})

var user = new User({
  'first_name': 'prathap3',
  'last_name': 'mohan3'
})
console.log(user)

DETLETIng a record in the note model ca be done 

var note = new Note({id:1})
note.fetch()
note.destroy()
this is used for the sake of the destroying of the object of the note  .

putting an identifier

var Note  = Backbone.Model.extend({
  'urlRoot': '/api/songs',
  'idAttribute': 'songId'
})


//callbacks over the backbone 
error and the success attributes of the fucntions act as the executions for the sake of he callback executions

user.save({},{
  success: function(model,response){
    console.log('this is the success function')
  },
  error: function(model,response){
    console.log('this is the error function')
  }
})



----------------------------------Next we need to deal with the collections----------------

collection: this is nothing but the group of the objects where each object represents an object belonging to one of the class .

var Users = new Backbone.Collection.extend({
  model: User
})
var users = new Users([
  new User({'email': 'a1@yopmail.com','first_name': 'prathap'}),
  new User({'email': 'a2@yopmail.com','first_name': 'prathapa2'}),
])

console.log(users)

-------------------------------------------------------------------------------------------


user.save({},{
  success: function(model,response){
    console.log('this is the success function')
  },
  error: function(model,response){
    console.log('this is the error function')
  }
})



console.log('---------------------------------')

var user = new User({
  'first_name': 'prathap4',
  'last_name': 'mohan3'
})




------------------------------------Focusing on the Views in this section--------------------

here let us write the views referring to the dom element in the main.js file 


Backbone.view.extend by doing this we are aquiring the Backnone view properties to the songView
class or the variable 
```
var songView = Backbone.view.extend({
  render: function(){
    //this is the method what would get called when renderingthe template
    this.$el.html('Ehllo This is prathap from the sai')
  }
})

var songviewInstance = new songView({el: '#container'})
//the below function when called does the process of find the div#container and then replacing the 
//content withthe single 'div' by default with the content as specified in the render function
songviewinstance.render()

```
