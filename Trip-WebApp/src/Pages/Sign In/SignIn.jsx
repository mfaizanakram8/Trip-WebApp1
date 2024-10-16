import React from 'react'
import './SignIn.style.css'
import Button from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const handleNext = () => {
      navigate('/otpLogin');
    };
    return (
        <div className="signin-page">
            <div className="signin-left">
                <h2 className='Logo'>Logo</h2>

                <a href="#" className="back-link">&lt;&nbsp;&nbsp;Back</a>

                <h1 className='LoginText'>Log In</h1>
                <p className='SubTitle'>Lorem ipsum dolor sit amet, consectetuer<br />adipiscing elit Lorem ipsum </p>
                <div>
                    <input type='email' placeholder='Enter your Email' name="email" id="email" className='inputield' />
                </div>
                <Button onClick={handleNext} text='Lets Start' className='StartButton' />

                <p className='DontAcount'>Don’t  have an account? <span className='SignUpText'>Sign Up</span></p>
            </div>
            <div className="signin-right">
                <img src="/Images/SignIn.png" alt="Welcome Image" className="signin-image" />
            </div>
        </div>
    )
}

export default SignIn