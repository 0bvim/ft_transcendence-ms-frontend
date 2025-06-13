document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  const googleSignInButton = document.getElementById(
    "googleSignIn",
  ) as HTMLButtonElement;
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  // Handle traditional login form submission
  loginForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log("Attempting to sign in with:", { username, password });
    // TODO: send to ms-auth application for authentication and get jwt token
    showMessageBox(`Login attempt for ${username} with password ${password}`);
  });

  // Handle Google Sign-in
  googleSignInButton.addEventListener("click", () => {
    console.log("Attempting to sign in with Google...");
    // TODO: Integrate Google Sign-in flow with ms auth application
    showMessageBox(
      "Google Sign-in initiated. (Not fully functional in this demo)",
    );
  });

  // Custom message box function instead of alert()
  function showMessageBox(message: string): void {
    const messageBox = document.createElement("div");
    messageBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #333;
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            text-align: center;
            font-size: 1.1rem;
            max-width: 80%;
        `;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    // Automatically remove the message box after a few seconds
    setTimeout(() => {
      messageBox.remove();
    }, 3000); // 3 seconds
  }
});
