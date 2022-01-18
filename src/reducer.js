const string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolor velit quas soluta dicta sunt nesciunt repellendus quia error minus assumenda, autem animi esse rem suscipit ut quaerat deserunt inventore.';
const action = 'Choose the action: capitalize, to upper case, to lower case'
function reducer(string, action) {
  var string = document.getElementById('string'),
  if(action="capitalize") {
    return string.toUpperCase;
  } else if(action="to upper case"){
    return string.toUpperCase;
  } else if (action="to lower case"){
    return string.toLowerCase;
  } else if(action="null") {
    return alert("You didn't choose the action")
  };

}

reducer(string);
module.exports = reducer;
