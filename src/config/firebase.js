import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXS4PAztL61Yt41APkkjOnLWweftNUrIE",
  authDomain: "stylehive-edb83.firebaseapp.com",
  projectId: "stylehive-edb83",
  storageBucket: "stylehive-edb83.appspot.com",
  messagingSenderId: "499974077240",
  appId: "1:499974077240:web:14e0e0d10556949a215fcd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();