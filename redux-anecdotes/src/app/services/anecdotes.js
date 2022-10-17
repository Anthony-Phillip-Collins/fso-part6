import axios from 'axios';

const baseUri = '/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseUri);
  return response.data;
};
