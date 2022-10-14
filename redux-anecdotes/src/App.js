import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdotesList';
import { anecdoteActions } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const createAnecdote = (anecdote) => {
    const { create } = anecdoteActions;
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
