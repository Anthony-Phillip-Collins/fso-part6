import { useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';

const AnecdotesList = ({ anecdotes }) => {
  const dispatch = useDispatch();
  return [...anecdotes]
    .sort((a, b) => b.votes - a.votes)
    .map(({ content, votes, id }) => (
      <div key={id}>
        <div>{content}</div>
        <div>
          has {votes}
          <button onClick={() => dispatch(vote(id))}>vote</button>
        </div>
      </div>
    ));
};

export default AnecdotesList;
