import { useSendOtp } from "@/core/services/mutations";
import { useState, useEffect } from "react";

const Timer = ({phone}) => {
  const [timer, setTimer] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { mutate: sendOtp } = useSendOtp();

  useEffect(() => {
    let interval;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleResendOtp = () => {
    sendOtp({ phone });
    setTimer(120);
    setIsTimerActive(true);
  };
  return (
    <div>
      {isTimerActive ? (
        <p className="text-gray-500 dark:text-white">time remaining : {formatTime(timer)} </p>
      ) : (
        <p> code expired</p>
      )}

      {!isTimerActive && <button className="text-red-400 " onClick={handleResendOtp}>Resend Code</button>}
    </div>
  );
};
export default Timer;
