import type { Notification } from './types';
import { useState, useEffect } from 'react';

import { FcAdvertising } from 'react-icons/fc';

export default function NotificationComponent(Notification: Notification) {
  const [top, setTop] = useState("-250px");

  useEffect(() => {
    setTop("1rem");

    setTimeout(() => {
      setTop("-250px");
      setTimeout(() => {
        Notification.notification.setStatus(null);
      }, 1000);
    }, 5000);
  }, [Notification.notification.message]);

  return(
    <>
      <div>
        <div style={{
          position: "fixed",
          width: "300px",
          backgroundColor: "white",
          color: "#112645",
          boxShadow: "0 2px 4px rgb(0 0 0 / 20%), 0 8px 16px rgb(0 0 0 / 20%)",
          left: "calc(50% - 150px)",
          borderRadius: "8px",
          top: top,
          transition: "0.5s",
          padding: "1rem",
          zIndex: "100000"
        }}>
          <div>
            <FcAdvertising style={{width: "100%", fontSize: "1.5rem"}} />
            <p style={{
              width: "100%",
              textAlign: "center",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#546e7a",
              marginTop: "6px"
            }}>{Notification.notification.message}</p>
          </div>
        </div>
      </div>
    </> 
  )
}