import { useState, useEffect, useRef } from 'react';

export default function ProgressBar({ timer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  const intervalRef = useRef(null);
  const timeoutCalledRef = useRef(false);

  useEffect(() => {
    setRemainingTime(timer);
    timeoutCalledRef.current = false;

    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    const timeout = setTimeout(() => {
      if (!timeoutCalledRef.current) {
        timeoutCalledRef.current = true;
        onTimeout(); 
      }
    }, timer);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, [timer, onTimeout]);

  const progressPercentage = (remainingTime / timer) * 100;

  return (
    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mb-4">
      <div
        className="h-full bg-green-500 transition-all duration-100"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}
