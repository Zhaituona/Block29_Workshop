import  { useState, useEffect } from 'react';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import CreatePlayerForm from '../components/CreatePlayerForm';
import { fetchPlayers } from '../api/puppyBowlApi';

const HomePage = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const { data } = await fetchPlayers();
        setPlayers(data.players);
      } catch (error) {
        console.error('Error fetching players:', error.message);
      }
    };
    getPlayers();
  }, []);

  const handlePlayerCreated = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <CreatePlayerForm onPlayerCreated={handlePlayerCreated} />
      <PlayerList players={filteredPlayers} />
    </div>
  );
};

export default HomePage;
