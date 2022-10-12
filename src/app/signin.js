import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const signinModal = document.querySelector("#signinModal");
    bootstrap.Modal.getInstance(signinModal).hide();
    showMessage(`Welcome ${userCredentials.user.email}`);
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Wrong password", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("User not found", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
