
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: AIzaSyAHcLS1ZX1d8r1TmYkX1beA6dBjZMZbtkM,
  authDomain: uni-do7254.firebaseapp.com,
  projectId: uni-do7254,
  appId: 1:176230442872:web:36bdb7ecf3532c75a3ca8d
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
