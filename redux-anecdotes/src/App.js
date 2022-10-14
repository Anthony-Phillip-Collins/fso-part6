import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdotesList';
import { create } from './features/anecdoteSlice';

const App = () => {
  const anecdotes = useSelector((state) => {
    console.log(state);
    return state;
  });
  const dispatch = useDispatch();

  const createAnecdote = (anecdote) => {
    dispatch(create(anecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <div style={{ paddingBottom: '2rem' }}>
        <h3>create new</h3>
        <AnecdoteForm create={createAnecdote} />
      </div>
      <AnecdotesList anecdotes={anecdotes} />
    </div>
  );
};

export default App;
