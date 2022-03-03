var firebaseConfig = {
    apiKey: "AIzaSyDDm3ARaSJ6nVvElbsnI8fukZDKr1b6yd4",
    authDomain: "yses-b6fab.firebaseapp.com",
    databaseURL: "https://yses-b6fab-default-rtdb.firebaseio.com",
    projectId: "yses-b6fab",
    storageBucket: "yses-b6fab.appspot.com",
    messagingSenderId: "492537543962",
    appId: "1:492537543962:web:5d9e9c9013a68e074680a3",
    measurementId: "G-3STQ31R3EC"
  };
  
  // Initialize Firebase
var app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}