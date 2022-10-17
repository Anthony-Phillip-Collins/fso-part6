import { useSelector } from 'react-redux';

const Notification = () => {
  const {
    notification: { text },
  } = useSelector((state) => state);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return text && <div style={style}>{text}</div>;
};

export default Notification;
