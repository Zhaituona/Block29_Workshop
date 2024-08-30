
import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlayerList;
