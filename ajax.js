var list = document.querySelector("#postsList");

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET'
}).then(function(data) {
  // have a look at this data in the console.  How is it structured?
  console.log(data);

  // Create a function to iterate through the data received.

  // HINT: One of the Array methods we practiced yesterday would be great for this!

  // Push the data to the DOM using your bootstrap example

});
