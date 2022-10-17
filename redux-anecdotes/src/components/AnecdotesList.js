import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../features/anecdotesSlice';
import { setNotification } from '../features/notificationSlice';

const AnecdotesList = ({ anecdotes }) => {
  const dispatch = useDispatch();

  const upvote = async (id) => {
    const anecdote = await dispatch(voteAnecdote(id)).unwrap();
    dispatch(
      setNotification({ text: `Upvoted: "${anecdote.content}".`, delay: 5000 })
    );
  };

  return anecdotes.map(({ content, votes, id }) => (
    <div key={id}>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={() => upvote(id)}>vote</button>
      </div>
    </div>
  ));
};

export default AnecdotesList;
