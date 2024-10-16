import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import OTPEmail from '../../Pages/OTP Email/OTPEmail';
import SignUp from '../../Pages/Sign Up/SignUp';
import WelcomePage from '../../Pages/Welcome';
import AirportPreferencesScreen from '../../Pages/AirportPreferencesScreen';
import SignIn from '../../Pages/Sign In/SignIn'; // 'Pages' ko 'pages' se match karein
import OTPLogin from '../../Pages/OTP Login/OTPLogin';
function AppRouter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/otpEmail' element={<OTPEmail />} />
        <Route path='/welcomePage' element={<WelcomePage />} />
        <Route path='/airportPreferencesScreen' element={<AirportPreferencesScreen />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/otpLogin' element={<OTPLogin />} />
      </Routes>
    </>
  );
}

export default AppRouter;
