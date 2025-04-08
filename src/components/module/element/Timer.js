import { useSendOtp } from "@/core/services/mutations";
import { useState, useEffect } from "react";

const Timer = (phone ,  minutes,
    setMinutes,
    seconds,
    setSeconds) => {
 
  const { mutate } = useSendOtp();
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });


  const resendOTP = () => {
    setMinutes(1);
    setSeconds(59);
    mutate(
        { phone },
        {
          onSuccess: (data) => {
            toast.success(data?.data?.message);
            toast(data?.data?.code);
          
          },
          onError: (error) => {
            toast.error(error.message);
          },
        }
      );
  };

  return (
    <div className="countdown-text">
      {seconds > 0 || minutes > 0 ? (
        <p>
          Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      ) : (
        <p className="dark:text-white">Didn't recieve code?</p>
      )}

      <button
        disabled={seconds > 0 || minutes > 0}
        style={{
          color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
        }}
        onClick={resendOTP}
      >
        Resend code
      </button>
    </div>
  );
};
export default Timer;
