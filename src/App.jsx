

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerDetailsPage from './pages/PlayerDetailsPage';
import CreatePlayerPage from './pages/CreatePlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players/:id" element={<PlayerDetailsPage />} />
        <Route path="/create-player" element={<CreatePlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
