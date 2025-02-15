import React, { useEffect } from "react";

import "./styles.scss";

const Notification = (props: {
  message: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { message, visible, setVisible } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className={`notification${visible ? "" : " hidden"}`}>
      <img className="notification-logo" src={"/img/warning.svg"} alt={""} />
      <span>{message}</span>
    </div>
  );
};

export default Notification;
