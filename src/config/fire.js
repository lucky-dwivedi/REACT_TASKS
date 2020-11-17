import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDOqTvmApp3nzkfuuMzk_tEG7C56twXnDM",
    authDomain: "task1-a79c2.firebaseapp.com",
    databaseURL: "https://task1-a79c2.firebaseio.com",
    projectId: "task1-a79c2",
    storageBucket: "task1-a79c2.appspot.com",
    messagingSenderId: "304695203707",
    appId: "1:304695203707:web:49a1294f9d5276fc244fde"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;