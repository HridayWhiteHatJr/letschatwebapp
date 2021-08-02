// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCxOXou6sIdT8KzLlOgriR2TORYwfxkqQI",
      authDomain: "kwitter-e5519.firebaseapp.com",
      databaseURL: "https://kwitter-e5519-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5519",
      storageBucket: "kwitter-e5519.appspot.com",
      messagingSenderId: "178365685840",
      appId: "1:178365685840:web:d5f7957a899b5570a5b155"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class ='room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}