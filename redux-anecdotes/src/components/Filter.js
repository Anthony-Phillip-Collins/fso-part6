import { useDispatch } from 'react-redux';
import { filter } from '../features/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filter(value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
