import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../features/notificationSlice';

const Notification = () => {
  const {
    notification: { message },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => dispatch(clear()), 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message, dispatch]);

  return message && <div style={style}>{message}</div>;
};

export default Notification;
