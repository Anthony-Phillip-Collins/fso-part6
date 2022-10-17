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

const upvote = async (id) => {
  if (!id) throw Error("No 'id' was set!");
  const anecdote = (await getAll()).find((anec) => anec.id === id);

  if (!anecdote) throw Error("No item found with that 'id'!");

  const response = await axios.put(`${baseUri}/${id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
};

const anecdoteService = {
  getAll,
  create,
  upvote,
};

export default anecdoteService;
