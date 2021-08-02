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
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}