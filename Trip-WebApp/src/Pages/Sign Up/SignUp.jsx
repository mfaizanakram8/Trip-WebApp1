import './Signup.style.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/otpEmail'); // Navigate to the OTPEmail screen
  };

  const handleLogin = () => {
    navigate('/signin'); // Navigate to the SignIn screen
  };

  return (
    <div className='px-28 py-6 font-figtree'>
      {/* Logo */}
      <div className='my-4 font-bold text-3xl'>
        Logo
      </div>

      {/* Back Button */}
      <div className='flex items-center my-2 cursor-pointer'>
        <img src="/Images/Vector 42.png" alt="back" className='h-5 w-5 mr-2' />
        <h3 className='text-purple text-xl'>Back</h3>
      </div>

      {/* Getting Started Heading */}
      <div className='text-center font-bold text-4xl text-purple my-4'>
        Getting Started
      </div>

      {/* Subtext */}
      <div className='text-xl font-normal text-[#6F6F6F] my-4 text-center'>
        xxxxxxxxxxxxxxxxxxxxxxx
      </div>

      {/* Email Input Field */}
      <div className='flex justify-center my-4'>
        <input
          type="email"
          placeholder='Enter your email'
          name="email"
          id="email"
          className='text-center rounded-full w-1/3 border p-4 text-[#6F6F6F] outline-none'
        />
      </div>

      {/* Let’s Start Button */}
      <div className='flex justify-center my-6'>
        <button
          onClick={handleClick}
          className='text-white bg-purple py-4 w-1/3 rounded-full text-xl'>
          Let’s Start!
        </button>
      </div>

      {/* Illustration (Optional) */}
      <div className='flex justify-center my-4'>
        <img src="/Images/Group 1000006916.png" alt="Illustration" className='w-[500px]' />
      </div>

      {/* Google and Apple Logos */}
      <div className='flex justify-center items-center space-x-6 my-6'>
        <img
          src="/Images/Group 1000007380.png"
          alt="Google logo"
          className='w-[66px] p-3 border border-gray-300 rounded-lg'  // Added padding and border to the Google logo
        />
        <img
          src="/Images/Group 1000007360.png"
          alt="Apple logo"
          className='w-[66px] p-3 border border-gray-300 rounded-lg'  // Added padding and border to the Apple logo
        />
      </div>

      {/* Terms and Conditions */}
      <div className='text-center text-xl my-4'>
        <span className='mx-2'>
          <input type="checkbox" />
        </span>
        <span className='text-[#6F6F6F]'>By registering you accept our </span>
        <span className='text-purple cursor-pointer'>Terms and Conditions</span>
        <span className='text-[#6F6F6F]'> and </span>
        <span className='text-purple cursor-pointer'>Privacy Policy</span>
      </div>

      {/* Already have an account */}
      <div className='text-center text-[#6F6F6F] my-4'>
        <span>Already have an Account? </span>
        <span 
          onClick={handleLogin} 
          className='font-bold text-[#6F6F6F] cursor-pointer'>
          Sign in
        </span>
      </div>
    </div>
  );
};

export default SignUp;
