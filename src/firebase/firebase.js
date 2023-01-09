import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYFQsAeBKA3_nIlzj6o5HEFuSBqb3859A",
  authDomain: "education-726d2.firebaseapp.com",
  projectId: "education-726d2",
  storageBucket: "education-726d2.appspot.com",
  messagingSenderId: "884160189180",
  appId: "1:884160189180:web:0024f97ba7cd283d4afd79",
  measurementId: "G-SHQW7900LS",
//   databaseURL: "https://education-726d2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const database = getDatabase(app);

// export { app, auth, database };
export { app, auth, };