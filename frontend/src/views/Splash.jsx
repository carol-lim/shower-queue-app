import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="splash" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h1>ShowerQ</h1>
      <h4>Huh?! You haven't taken a shower yet?</h4>
    </div>
  );
}

export default Splash;