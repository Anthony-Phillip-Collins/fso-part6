import { useRef } from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../features/anecdotesSlice';
import { setNotification } from '../features/notificationSlice';

const AnecdoteForm = ({ onCreate }) => {
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(input.current.value);
    input.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Anecdote: <input type='text' name='anecdote' ref={input} />
        </label>
        <button type='submit'>create</button>
      </form>
    </>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  onCreate: async (content) => {
    if (!content) return;
    const anecdote = await dispatch(createAnecdote({ content })).unwrap();
    if (anecdote) {
      dispatch(
        setNotification({ text: `Created: "${anecdote.content}"`, delay: 5000 })
      );
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
