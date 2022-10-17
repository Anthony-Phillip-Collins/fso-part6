import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from './app/services/anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdotesList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { create, setAll } from './features/anecdoteSlice';
import { notify } from './features/notificationSlice';
import { SortTypes } from './features/sortSlice';

const App = () => {
  const anecdotes = useSelector(({ anecdotes, filter, sort }) => {
    const list = anecdotes.filter(({ content }) =>
      content.includes(filter.text)
    );

    if (sort === SortTypes.VOTES) {
      list.sort((a, b) => b.votes - a.votes);
    }
    return list;
  });

  const dispatch = useDispatch();

  const createAnecdote = (anecdote) => {
    dispatch(create(anecdote));
    if (anecdote) {
      dispatch(notify(`Created: "${anecdote}"`));
    }
  };

  useEffect(() => {
    const load = async () => {
      const all = await getAll();
      dispatch(setAll(all));
    };
    load();
  }, [dispatch]);

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
