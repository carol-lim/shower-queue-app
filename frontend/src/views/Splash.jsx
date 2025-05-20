import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="splash-container">
      <div className="splash" onClick={handleClick}>
        <h1 className="splash-title">ShowerQ</h1>
        <h5>Huh?! You haven't taken a shower yet?</h5>
      </div>
    </div>
  );
}

export default Splash;
