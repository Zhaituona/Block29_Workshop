import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../api/puppyBowlApi';

const PlayerDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      const { data } = await fetchPlayerById(id);
      setPlayer(data.player);
    };
    getPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Team: {player.team}</p>
      <p>Owner: {player.owner}</p>
    </div>
  );
};

export default PlayerDetails;
