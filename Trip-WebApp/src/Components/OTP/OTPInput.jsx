import React, { useState } from 'react';
import styles from '../OTP/OTPInput.module.css';

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  return (
    <div className={styles.otpInputContainer}>
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className={styles.otpInput}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OTPInput;
