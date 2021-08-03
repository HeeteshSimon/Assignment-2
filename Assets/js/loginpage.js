// Values for logIn page

let users = {
    name: ['Joshua', 'Heetesh', 'Divyani', 'Promod', 'Aditya'],
    password: [12345, 12345, 12345, 12345, 12345]
}

function userValidate() {
    let username = document.getElementById('userName');
    let passWord = document.getElementById('loginPassword');  
    
    //alert(users['name'].indexOf(username.value));
    let flag = users['name'].indexOf(username.value);

    if (username.value.length >= 0 || passWord.value.length >= 0) {
        if(flag != (-1)) {
            let pswd = users['password'][flag];
            //alert(passWord.value);
            if (pswd == passWord.value){
                // we will logIn the user by calling the register model
                alert('login success');
                
                // divyanis' modal will be called here
               // $('#exampleModal').modal('show');


            }
            else {
                alert('Invalid password.');
            }
        }
        else {
            alert('Invalid username and password.');
        }
    }
    else {
        alert('Invalid username and password.');
    }

}


// //Add a JQuery click event handler onto our checkbox.

// $('#terms_and_conditions').click(function(){
//     //If the checkbox is checked.
//     if($(this).is(':checked')){
//         //Enable the submit button.
//         $('#submit_button').attr("disabled", false);
//     } else{
//         //If it is not checked, disable the button.
//         $('#submit_button').attr("disabled", true);
//     }
// });
