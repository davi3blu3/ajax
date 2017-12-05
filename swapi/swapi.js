var list = document.querySelector("#postsList");

$.ajax({
  url: 'https://swapi.co/api/people',
  method: 'GET'
}).then(function(data) {
  // have a look at this data in the console.  How is it structured?

  console.log(data); // Do we need to change anything to access the content we need?

  // Create a function to iterate through the data received.

  // Push the data to the DOM using your bootstrap example

});
