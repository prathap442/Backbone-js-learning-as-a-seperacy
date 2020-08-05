//connecting to the server in the backend 

var User = Backbone.Model.extend({
  //this specifies the route from which the api needs to be made 
  'urlRoot': 'https://reqres.in/api/users'
})

var user = new User({id: 1})
user.fetch() // this is used for the GET request performing and it would form the uri as follows
// /api/songs/1
/*
 The follwoing are the keywords that can be used in order to store the data in the database .

keyword  HTTPVERB 

fetch   GET
save    POST/PUT
destroy DELETE
 
*/

/*
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
*/

var User = Backbone.Model.extend({
  'urlRoot': 'https://reqres.in/api/users'
})

var user = new User({id: 1})
user.fetch()
console.log(user)
/*
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

note.save({},{
  success: function(){
    console.log('this is the success function')
  },
  error: function(){
    console.log('this is the error function')
  }
})
*/