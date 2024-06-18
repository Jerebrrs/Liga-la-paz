import { useEffect } from "react";
import axios from "axios";

const PingBackend = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://tu-backend-api.com/ping")
        .then(response => {
          console.log("Backend is awake", response.data);
        })
        .catch(error => {
          console.error("Error pinging backend", error);
        });
    }, 49000);//49 segundos

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default PingBackend;