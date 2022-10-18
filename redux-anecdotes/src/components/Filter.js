import { connect } from 'react-redux';
import { filter } from '../features/filterSlice';

const Filter = ({ onChange }) => {
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(filter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
