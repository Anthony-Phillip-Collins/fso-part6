import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const { notification } = useSelector((state) => state);
  const [show, setShow] = useState();
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  useEffect(() => {
    let timeout;
    if (notification) {
      setShow(true);
      timeout = setTimeout(() => {
        setShow(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  return show && <div style={style}>{notification.message}</div>;
};

export default Notification;
