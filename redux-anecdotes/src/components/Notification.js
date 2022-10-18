import { connect } from 'react-redux';

let Notification = ({ notification }) => {
  const { text } = notification;

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return text && <div style={style}>{text}</div>;
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
