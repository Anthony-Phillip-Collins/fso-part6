import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import { anecdoteActions } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const onVoteClick = (id) => {
    const { vote } = anecdoteActions;
    dispatch(vote(id));
  };

  const onAnecdoteCreate = (anecdote) => {
    const { create } = anecdoteActions;
    dispatch(create(anecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => onVoteClick(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <AnecdoteForm create={onAnecdoteCreate} />
    </div>
  );
};

export default App;
