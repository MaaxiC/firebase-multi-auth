import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#google-login");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    const signinModal = document.querySelector("#signinModal");
    bootstrap.Modal.getInstance(signinModal).hide();
    showMessage(`Welcome ${userCredentials.user.displayName}`);
  } catch (error) {
    showMessage(error.message, "error");
  }
});
