import { v4 as uuidv4 } from 'uuid';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const initialState = anecdotesAtStart.map((anecdote) => ({
  content: anecdote,
  id: uuidv4(),
  votes: 0,
}));

const reducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case AnectodeActionTypes.VOTE:
      return state.map((anec) =>
        anec.id === action.data.id ? { ...anec, votes: anec.votes + 1 } : anec
      );
    default:
      return state;
  }
};

export const vote = (id) => ({ type: AnectodeActionTypes.VOTE, data: { id } });

const AnectodeActionTypes = Object.freeze({
  VOTE: 'VOTE',
});

export default reducer;
