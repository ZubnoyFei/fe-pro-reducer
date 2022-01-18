const input = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolor velit quas soluta dicta sunt nesciunt repellendus quia error minus assumenda, autem animi esse rem suscipit ut quaerat deserunt inventore.';
const action = 'Choose the action: capitalize, to upper case, to lower case'
function reducer(input, action) {
  var input= document.getElementById('input'),
  if(action="capitalize") {
    return input.toUpperCase;
  } else if(action="to upper case"){
    return input.toUpperCase;
  } else if (action="to lower case"){
    return input.toLowerCase;
  } else if(action="null") {
    return alert("You didn't choose the action")
  };

}

reducer(toUpperCase);
module.exports = reducer;
