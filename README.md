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


