import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import OTPEmail from '../../Pages/OTP Email/OTPEmail'; // Use lowercase 'pages'
import SignUp from '../../Pages/Sign Up/SignUp'; // Use lowercase 'pages'
import WelcomePage from '../../Pages/Welcome';
import AirportPreferencesScreen from '../../Pages/AirportPreferencesScreen';
import SignIn from '../../Pages/Sign In/SignIn'; // Use lowercase 'pages'
import OTPLogin from '../../pages/OTP Login/OTPLogin';
import NotFound from '../../Pages/NotFound'; // Ensure this import is correct

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
        <Route path='*' element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </>
  );
}

export default AppRouter;
