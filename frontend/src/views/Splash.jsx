import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="splash" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h1 style={{ margin: 0, letterSpacing: 3 }}>ShowerQ</h1>
      <h5 style={{ margin: 10 }}>Huh?! You haven't taken a shower yet?</h5>
    </div>
  );
}

export default Splash;
