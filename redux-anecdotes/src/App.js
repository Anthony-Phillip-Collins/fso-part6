import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdotesList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { fetchAllAnecdotes } from './features/anecdotesSlice';
import { SortTypes } from './features/sortSlice';

const App = () => {
  const anecdotes = useSelector(({ anecdotes, filter, sort }) => {
    const list = anecdotes.filter(
      ({ content }) => content && content.includes(filter.text)
    );

    if (sort === SortTypes.VOTES) {
      list.sort((a, b) => b.votes - a.votes);
    }
    return list;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      dispatch(fetchAllAnecdotes());
    };
    load();
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <div style={{ paddingBottom: '2rem' }}>
        <h3>create new</h3>
        <AnecdoteForm />
      </div>
      <Filter />
      <AnecdotesList anecdotes={anecdotes} />
    </div>
  );
};

export default App;
