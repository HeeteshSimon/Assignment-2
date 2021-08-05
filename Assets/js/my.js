function alphaOnly(e) {
  var letters = /^[A-Za-z]+$/;
      if(e.target.value.match(letters))
      {
     
      
      }
      else
      {
      alert('Please input alphabet characters only for name');
      return false;
      }
};
//function for age
function setAge(e) {
  var bday = new Date(Date.parse(e.target.value));
  var today = new Date()

  document.getElementsByName('age')[0].value = today.getFullYear() - bday.getFullYear();
}


// initializing a buffer object

// let data = {
//   username : '',
//   stream : ''
// }

//funtion for retrieving data

function saveFile() {

  // Get the data from each element on the form.
  let name = document.getElementById('nameId');
  let stream = document.getElementById('streamId');
  let email = document.getElementById('email');


  // data['username'] = name.value;
  // data['stream'] = stream.value;
  //export {data};
  window.sessionStorage.setItem('nameId', name.value);
  window.sessionStorage.setItem('streamId', stream.value);
  window.sessionStorage.setItem('email', email.value);
  // setting value for name and stream in datasheet page

  
  //window.location.replace("./dataSheet.html");
}

//export {data};
