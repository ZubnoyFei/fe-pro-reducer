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

<<<<<<< HEAD
string.toUpperCase();
string.toLowerCase();
=======
reducer(toUpperCase);
>>>>>>> c6867d763a5a2bf57e5cbf6f715f8a71d77af0e6
module.exports = reducer;


