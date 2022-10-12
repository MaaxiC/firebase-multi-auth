import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";
import "./app/signupForm.js";
import "./app/signin.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/logout.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setupPosts(querySnapshot.docs);
  } else {
    setupPosts([]);
  }
  loginCheck(user);
});
