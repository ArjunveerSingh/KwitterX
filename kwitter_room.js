
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCl493gxz0tqeeMt6ka4a_fzzeOXBNZy6s",
      authDomain: "kwitter-53cc2.firebaseapp.com",
      projectId: "kwitter-53cc2",
      storageBucket: "kwitter-53cc2.appspot.com",
      messagingSenderId: "390240001034",
      appId: "1:390240001034:web:194225e1d9e9e0bbec13f3",
      measurementId: "G-C113EVW11P"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
