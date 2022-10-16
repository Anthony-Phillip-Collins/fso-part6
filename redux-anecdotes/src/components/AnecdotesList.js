import { useDispatch } from 'react-redux';
import { vote } from '../features/anecdoteSlice';
import { notify } from '../features/notificationSlice';

const AnecdotesList = ({ anecdotes }) => {
  const dispatch = useDispatch();

  const upvote = (id) => {
    const item = anecdotes.find((item) => id === item.id);
    dispatch(vote(id));
    dispatch(notify(`Upvoted: "${item.content}".`));
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
