
  var config = {
    apiKey: "AIzaSyCl6xq1JemIcK4sxBhTXixTMOBNxya_sMk",
    authDomain: "cadre-9e136.firebaseapp.com",
    databaseURL: "https://cadre-9e136.firebaseio.com",
    projectId: "cadre-9e136",
    storageBucket: "cadre-9e136.appspot.com",
    messagingSenderId: "127199022354"
  };
  firebase.initializeApp(config);

document.getElementById('form1').addEventListener('submit', submitForm);
    // Function to get get form values
  function getInputVal(id){
      return document.getElementById(id).value;
  }
    
    
  function submitForm(e){
         e.preventDefault();  
          var name = getInputVal('name');
          var email = getInputVal('email');
          var textarea = getInputVal('comments');
          saveMessage(name,email,textarea);
          document.getElementById('form1').reset();
      }
  // Cl
    
    // Initialize Firebase
  
    // References the messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Save message to firebase
  function saveMessage(name,email,message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        email:email,
        name: name,
        textarea:message,
      });
    }
        




