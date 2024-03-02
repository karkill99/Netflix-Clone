import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import app from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyATD_D2RRdwDpXbXBpnO4p1d9e3jIesQEM",
  authDomain: "netflix-clone-build-59393.firebaseapp.com",
  projectId: "netflix-clone-build-59393",
  storageBucket: "netflix-clone-build-59393.appspot.com",
  messagingSenderId: "1077140839007",
  appId: "1:1077140839007:web:b23c436bee2e8d88da59ea",
};

const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export const auth = getAuth(app);
// export { auth };
// export default db;
