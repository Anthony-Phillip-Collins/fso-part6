import { useState } from 'react';

const AnecdoteForm = ({ create }) => {
  const [anecdote, setAnecdote] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    create(anecdote);
    setAnecdote('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Anecdote:{' '}
          <input
            type='text'
            name='anecdote'
            value={anecdote}
            onChange={({ target: { value } }) => {
              setAnecdote(value);
            }}
          />
        </label>
        <button type='submit'>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
