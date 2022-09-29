import firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYFQsAeBKA3_nIlzj6o5HEFuSBqb3859A",
  authDomain: "education-726d2.firebaseapp.com",
  projectId: "education-726d2",
  storageBucket: "education-726d2.appspot.com",
  messagingSenderId: "884160189180",
  appId: "1:884160189180:web:0024f97ba7cd283d4afd79",
  measurementId: "G-SHQW7900LS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const analytics = getAnalytics(app);

export { timestamp };
export default app.firestore();