
import '../Welcome/welcom.css'; // Importing the style sheet
import StartButton from '../../Components/StartButton/index'; // Button component
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/airportPreferencesScreen'); // Routing to OTPEmail screen
  };

  return (
    <div className="welcome-page">
      <div className="welcome-left">
        <h1 className="logo-text">Logo</h1>
        <a href="#" className="back-link">
          &lt; Back
        </a>
        <h1 className="text-5xl text-[#7c3aed] font-bold mt-16 mb-5">WELCOME TO TRIPBOING!</h1>
        <p className="mb-5 text-[#6E6E6E] text-3xl font-bold">Find deals that match your travel 
          <span className='block'>style!</span>
        </p>
        <p className="text-2xl text-[#6F6F6F] mb-10">
          Lorem ipsum dolor sit amet, consectetuer 
        </p>
        <StartButton onClick={handleContinueClick} />
      </div>
      <div className="welcome-right">
        <img src="/Images/Welcome.png" alt="Welcome Image" className="welcome-image" />
      </div>
    </div>
  );
};

export default WelcomePage;
