// Initialize reCAPTCHA
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      sendOTP();
    }
  });
  window.recaptchaVerifier.render();
  
  // Send OTP to user's phone
  function sendOTP() {
    const phoneNumber = "+1" + document.getElementById("phone-number").value; // Include country code
    const appVerifier = window.recaptchaVerifier;
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code.
        window.confirmationResult = confirmationResult;
        alert('OTP sent to ' + phoneNumber);
      }).catch(function(error) {
        // Error; SMS not sent
        console.error(error.message);
      });
  }
  
  // Verify OTP entered by user
  function verifyOTP() {
    const code = document.getElementById("otp").value;
    confirmationResult.confirm(code).then(function(result) {
      // User signed in successfully.
      const user = result.user;
      alert('User signed in successfully.');
    }).catch(function(error) {
      // User couldn't sign in (bad verification code?)
      console.error(error.message);
    });
  }
  