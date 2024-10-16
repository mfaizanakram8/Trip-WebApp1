import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import styles from "../../Components/OTP/OTPScreen.module.css";
import OTPInput from "../../Components/OTP/OTPInput";
import './OTPEmail.style.css';

const OTPScreen = () => {
  const [countdown, setCountdown] = useState(60); // 60 seconds countdown
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleContinueClick = () => {
    navigate("/welcomePage");
  };

  return (
    <div className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.backButton}>
          <img
            src="/Images/Vector 42.png"
            alt="Back"
            className={styles.vector}
            height={10}
            width={10}
          />
          <span>Back</span>
        </div>
      </header>

      {/* Main OTP Section */}
      <div className={styles.container}>
        <h1 className={styles.title}>Continue with your account</h1>
        <p className={styles.subtitle}>
          Enter the verification code we have sent you to{" "}
          <span className={styles.email}>ahmednimra95@gmail.com</span> to login.
        </p>

        {/* OTP Input Field */}
        <div className={styles.otpContainer}>
          <OTPInput length={4} />
        </div>

        {/* Login Button */}
        <button
          className={`${styles.button} w-full max-w-sm bg-purple-600 text-white py-4 rounded-full font-bold hover:bg-purple-700 transition-colors duration-300`}
          onClick={handleContinueClick}
        >
          Log In
        </button>

        {/* Resend OTP Text */}
        <p className={styles.resendText}>
          Didn’t receive OTP? <span className={styles.resendLink}>Resend</span>
        </p>

        {/* Countdown Timer Text */}
      <p className="text-lg text-[#a1a1aa]">
          {countdown > 0
            ? `Request for a new OTP available in 00:${
                countdown < 10 ? `0${countdown}` : countdown
              } Sec`
            : (
              <span className="text-purple font-bold underline">
                Resend OTP via SMS
              </span>
            )}
        </p>
      </div>
    </div>
  );
};

export default OTPScreen;
