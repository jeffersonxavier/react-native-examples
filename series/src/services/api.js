import firebase from 'firebase';

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "<SET CORRECT VALUE>",
    authDomain: "<SET CORRECT VALUE>",
    databaseURL: "<SET CORRECT VALUE>",
    projectId: "<SET CORRECT VALUE>",
    storageBucket: "<SET CORRECT VALUE>",
    messagingSenderId: "<SET CORRECT VALUE>",
    appId: "<SET CORRECT VALUE>",
    measurementId: "<SET CORRECT VALUE>",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return firebase;
}

export default initFirebase();
