import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OTPEmail from '../../Pages/OTP Email/OTPEmail';
import SignUp from '../../Pages/Sign Up/SignUp';
import WelcomePage from '../../Pages/Welcome';
import AirportPreferencesScreen from '../../Pages/AirportPreferencesScreen';
import SignIn from '../../Pages/Sign In/SignIn';
import OTPLogin from '../../pages/OTP Login/OTPLogin';
import NotFound from '../../Pages/NotFound';

function AppRouter() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap with Router */}
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/otpEmail' element={<OTPEmail />} />
        <Route path='/welcomePage' element={<WelcomePage />} />
        <Route path='/airportPreferencesScreen' element={<AirportPreferencesScreen />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/otpLogin' element={<OTPLogin />} />
        <Route path='*' element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
