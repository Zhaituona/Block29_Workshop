import  { useState } from 'react';
import CreatePlayerForm from '../components/CreatePlayerForm';
import PlayerList from '../components/PlayerList';

const CreatePlayerPage = () => {
  const [players, setPlayers] = useState([]);

  const handlePlayerCreated = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  return (
    <div>
      <CreatePlayerForm onPlayerCreated={handlePlayerCreated} />
      <PlayerList players={players} />
    </div>
  );
};

export default CreatePlayerPage;
