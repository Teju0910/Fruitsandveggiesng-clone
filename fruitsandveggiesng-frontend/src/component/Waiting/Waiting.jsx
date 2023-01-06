import "./waiting.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Center } from "@chakra-ui/react";
export const Waiting = () => {
  const navigate = useNavigate();

  const isRendered = useRef();

  useEffect(() => {
    if (isRendered.current) return;
    isRendered.current = true;
    setTimeout(() => {
      navigate("/payment");
    }, 3000);
  }, []);

  return (
    <div className="container">
      <Center>
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </Center>
    </div>
  );
};
