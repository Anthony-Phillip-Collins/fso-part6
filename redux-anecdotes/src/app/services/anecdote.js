import axios from 'axios';

const baseUri = '/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUri);
  return response.data;
};

const create = async ({ content }) => {
  if (!content) throw Error("No 'content' was set!");
  const response = await axios.post(baseUri, { content, votes: 0 });
  return response.data;
};

const anecdoteService = {
  getAll,
  create,
};

export default anecdoteService;
