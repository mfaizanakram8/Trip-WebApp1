
import './OTPLogin.style.css'
import Button from '../../Components/Button/Button';
import OTPInput from '../../Components/OTP/OTPInput';

const OTPLogin = () => {

    return (
        <div className='main'>
            <header className='header'>
            <div className='logo-dd'>
                <div className='logo'>Logo</div>
                <div className='backButton'>
                    <img src="/Images/Vector 42.png" alt="" className='vector' height={10} width={10} />
                    Back</div>
                    </div>
            </header>
            <div className='container'>
                <div className='first'>
                    <div className='title'>Continue with your Account</div>
                    <div className='subtitle'>Enter the verification code we have sent you to <span className='email'>ahmednimra95@gmail.com</span> to login</div>

                    <OTPInput length={4} />
                    <div className='buttonContainer'>
                        <Button text="Log In" className='log-button'  />
                    </div>
                    <p className='resendText'>
                        Didn’t receive OTP? <span className='resendLink'>Resend</span>
                    </p>
                </div>
                <div className='second'>
                    <img src="/Images/Character_2_Studying.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OTPLogin