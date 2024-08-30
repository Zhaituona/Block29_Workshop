
const COHORT_NAME = '2405-ftb-et-web-pt';  
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`;


export const fetchPlayerById = async (id) => {
  const response = await fetch(`${API_URL}/players/${id}`);
  return response.json();
};


export const fetchPlayers = async () => {
  
  try {
    const response = await fetch(API_URL);

    // Check if the content type is JSON
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error Response:', errorText);
      throw new Error(`Failed to fetch players: ${response.statusText}`);
    }

    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      const textResponse = await response.text();
      console.error('Unexpected response format:', textResponse);
      throw new Error('Received non-JSON response');
    }
  } catch (error) {
    console.error('Failed to parse JSON response:', error);
    throw error;
  }
};



export const createPlayer = async (playerData) => {
  const response = await fetch(`${API_URL}/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerData),
  });
  return response.json();
};

export const deletePlayer = async (id) => {
  const response = await fetch(`${API_URL}/players/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
