var firebaseConfig = {
    apiKey: "AIzaSyBqX7nvwBpqQ-td-7GTmN41aL0eNviqbcA",
    authDomain: "kwitter-50ee2.firebaseapp.com",
    databaseURL: "https://kwitter-50ee2-default-rtdb.firebaseio.com",
    projectId: "kwitter-50ee2",
    storageBucket: "kwitter-50ee2.appspot.com",
    messagingSenderId: "291541942943",
    appId: "1:291541942943:web:c65477c4fa6800a35858aa",
    measurementId: "G-VQGQ8XCE31"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function addRoom()
  {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose = "adding room name"
      });
  
      localStorage.setItem("room_name", room_name);
      window.location="chat_app_page.html";
    }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name-"+Room_names);
   row="<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   });});}
getData();
function redirectToRoomName(name);
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="chat_app_page.html";
}