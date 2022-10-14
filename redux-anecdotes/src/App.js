import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdotesList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { create } from './features/anecdoteSlice';
import { notify } from './features/notificationSlice';

const App = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(({ content }) => content.includes(filter.text));
  });

  const dispatch = useDispatch();

  const createAnecdote = (anecdote) => {
    dispatch(create(anecdote));
    if (anecdote) {
      dispatch(notify(`Created: "${anecdote}"`));
    }
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <div style={{ paddingBottom: '2rem' }}>
        <h3>create new</h3>
        <AnecdoteForm create={createAnecdote} />
      </div>
      <Filter />
      <AnecdotesList anecdotes={anecdotes} />
    </div>
  );
};

export default App;
