
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a player or breed..."
      onChange={handleInputChange}
      className="search-bar"
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
