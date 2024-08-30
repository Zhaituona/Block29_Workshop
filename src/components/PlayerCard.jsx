
import PropTypes from 'prop-types';  // Import PropTypes
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {
  // Destructure the player object to get name and breed
  const { name, breed, id } = player;

  return (
    <div className="player-card">
      <h3>{name}</h3>
      <p>{breed}</p>
      <Link to={`/players/${id}`}>See Details</Link>
    </div>
  );
};

// Add PropTypes validation
PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerCard;
