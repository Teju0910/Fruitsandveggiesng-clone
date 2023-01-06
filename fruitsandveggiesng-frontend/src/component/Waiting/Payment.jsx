import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Center } from "@chakra-ui/react";

export const Payment = () => {
  const navigate = useNavigate();

  const isRendered = useRef();

  useEffect(() => {
    if (isRendered.current) return;
    isRendered.current = true;
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container2">
        <Center>
          <div className="done2">
            <img
              src="https://quicksavaari.com/successgif.gif"
              alt=""
              //   width="150%"
            />
            <h2 className="payment">
              Payment Successful. Thanks for purchasing...
            </h2>
          </div>
        </Center>
      </div>
    </>
  );
};
