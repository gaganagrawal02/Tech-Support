import React, { useState } from "react";
import { auth } from "./firebase-config";  // Import the auth module
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from "firebase/auth";

const OTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
        "expired-callback": () => {
          setMessage("Recaptcha expired. Please try again.");
        },
      },
      auth
    );
  };

  const sendOTP = async () => {
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setMessage("OTP has been sent to your phone.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const verifyOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      await signInWithCredential(auth, credential);
      setMessage("Phone number verified successfully!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Login using OTP</h2>
      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>

      {verificationId && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPLogin;
