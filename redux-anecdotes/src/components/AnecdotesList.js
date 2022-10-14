import { useDispatch } from 'react-redux';
import { anecdoteActions } from '../reducers/anecdoteReducer';

const AnecdotesList = ({ anecdotes }) => {
  const dispatch = useDispatch();

  const voteAnecdote = (id) => {
    const { vote } = anecdoteActions;
    dispatch(vote(id));
  };

  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .map(({ content, votes, id }) => (
      <div key={id}>
        <div>{content}</div>
        <div>
          has {votes}
          <button onClick={() => voteAnecdote(id)}>vote</button>
        </div>
      </div>
    ));
};

export default AnecdotesList;
