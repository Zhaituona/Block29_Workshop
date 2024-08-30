import  { useState } from 'react';
import PropTypes from 'prop-types';
import { createPlayer } from '../api/puppyBowlApi';

const CreatePlayerForm = ({ onPlayerCreated }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [team, setTeam] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof onPlayerCreated === 'function') {
      const newPlayer = { name, breed, team, owner };
      try {
        const { data } = await createPlayer(newPlayer);
        onPlayerCreated(data.player);
      } catch (error) {
        console.error('Error creating player:', error);
      }
    } else {
      console.error('onPlayerCreated is not a function or is not defined.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={e => setBreed(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Team"
        value={team}
        onChange={e => setTeam(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={e => setOwner(e.target.value)}
        required
      />
      <button type="submit">Create Player</button>
    </form>
  );
};

CreatePlayerForm.propTypes = {
  onPlayerCreated: PropTypes.func.isRequired,
};

export default CreatePlayerForm;
