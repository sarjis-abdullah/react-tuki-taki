import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCs4ori0cwS_pMm9LKSFZjaV35-yH8oUSY",
    authDomain: "react-tuki-taki.firebaseapp.com",
    databaseURL: "https://react-tuki-taki.firebaseio.com",
    projectId: "react-tuki-taki",
    storageBucket: "react-tuki-taki.appspot.com",
    messagingSenderId: "558418454982",
    appId: "1:558418454982:web:1729cdcff60d5010cdaac7",
    measurementId: "G-51G0050CDM"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase 