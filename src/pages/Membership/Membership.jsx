import React, { useState, useEffect } from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';

function Membership() {
  const [timeLeft, setTimeLeft] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const futureDate = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth() + 3,
        currentTime.getDate()
      );
      const diff = futureDate.getTime() - currentTime.getTime();
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formattedTime = timeLeft
    ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days : ${
        Math.floor(timeLeft / (1000 * 60 * 60)) % 24
      } hours : ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes :${
        Math.floor(timeLeft / 1000) % 60
      } seconds`
    : null;

  return (
  <div className="mt-10 h-[100%] relative">
      <div className="-mx-10 flex flex-col items-center h-[60] justify-between  text-slate-900 text-center py-12 md:h-[80vh] bg-blue-900/5 bg-blend-multiply bg-bgBack bg-no-repeat bg-center bg-[length:100%_100%]">
        <h1 className="mb-10 text-6xl font-bold text-blue-800/80 ">
          Countdown to Launch
        </h1>
        <h2 className="text-orange-800 mt-4 text-6xl font-bold uppercase md:text-7xl md:font-extrabold">
          {formattedTime || "Loading countdown..."}
        </h2>
      </div>
      <Newsletter />
    </div>
  );
}

export default Membership
