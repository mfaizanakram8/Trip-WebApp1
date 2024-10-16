
import './StartButton.css'; // Import styles for button

const StartButton = ({ onClick }) => {
  return (
    <button className="start-button" onClick={onClick}>
      Continue
    </button>
  );
};

export default StartButton;
    