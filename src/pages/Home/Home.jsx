/** @format */

import React, { useState, useEffect } from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
// import bgImage from '../../assets/bgcomingsoon.jpg'

function Home() {
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
  }, []);

  const formattedTime = timeLeft
    ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days : ${
        Math.floor(timeLeft / (1000 * 60 * 60)) % 24
      } hours : ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes :${
        Math.floor(timeLeft / 1000) % 60
      } seconds`
    : null;

  return (
    <div className="mt-10 h-[100%] relative">
      <div className="-mx-10 flex flex-col items-center justify-center  text-slate-900 text-center py-12 h-[60vh] bg-black/70 bg-blend-multiply bg-bgBack bg-cover bg-center ">
        <h1 className="mb-10 text-3xl font-bold text-gray-100 ">
          Countdown to Launch
        </h1>
        <p className="text-purple-100 mt-4 md:text-6xl uppercase">
          {formattedTime || "Loading countdown..."}
        </p>
        <div className="absolute top-0 left-0 bg-gray-900 opacity-75"></div>
      </div>
      <Newsletter />
    </div>
  );
}
export default Home;

// import React, { useState, useEffect } from 'react';
// import moment from 'moment';

// const Home = () => {
//   const [timeRemaining, setTimeRemaining] = useState(moment.duration(moment().add(3, 'months').diff(moment())));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeRemaining(moment.duration(moment().add(3, 'months').diff(moment())));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
//       <h1 className="text-4xl font-bold text-gray-700">Coming Soon</h1>
//       <p className="text-xl text-gray-600">Our website is under construction, please check back in:</p>
//       <div className="flex items-center mt-4">
//         <div className="px-2 text-3xl font-bold text-gray-700">{timeRemaining.months()}</div>
//         <div className="px-2 text-xl font-bold text-gray-600">months</div>
//         <div className="px-2 text-3xl font-bold text-gray-700">{timeRemaining.days()}</div>
//         <div className="px-2 text-xl font-bold text-gray-600">days</div>
//         <div className="px-2 text-3xl font-bold text-gray-700">{timeRemaining.hours()}</div>
//         <div className="px-2 text-xl font-bold text-gray-600">hours</div>
//         <div className="px-2 text-3xl font-bold text-gray-700">{timeRemaining.minutes()}</div>
//         <div className="px-2 text-xl font-bold text-gray-600">minutes</div>
//         <div className="px-2 text-3xl font-bold text-gray-700">{timeRemaining.seconds()}</div>
//         <div className="px-2 text-xl font-bold text-gray-600">seconds</div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './countdown.css';

// const Home = () => {
//   const [months, setMonths] = useState(3);
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMonths(months => months - 1);
//       setDays(days => days - 1);
//       setHours(hours => hours - 1);
//       setMinutes(minutes => minutes - 1);
//       setSeconds(seconds => seconds - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-center py-12">
//       <h1 className="text-3xl font-bold text-gray-100">Countdown to Launch</h1>
//       <div className="mt-4 text-gray-400">
//         <div>{months} months</div>
//         <div>{days} days</div>
//         <div>{hours} hours</div>
//         <div>{minutes} minutes</div>
//         <div>{seconds} seconds</div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './countdown.css';

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date();
//       const futureDate = new Date(currentTime.getFullYear(), currentTime.getMonth() + 3, currentTime.getDate());
//       const diff = futureDate.getTime() - currentTime.getTime();

//       setTimeLeft(diff);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = timeLeft ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor(timeLeft / (1000 * 60 * 60)) % 24} hours, ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes, ${Math.floor(timeLeft / 1000) % 60} seconds` : null;

//   return (
//     <div className="bg-gray-900 text-center py-12">
//       <h1 className="text-3xl font-bold text-gray-100">Countdown to Launch</h1>
//       <p className="text-gray-400 mt-4">{formattedTime || 'Loading countdown...'}</p>
//     </div>
//   );
// }

// export default Countdown;
//       const futureDate = new Date(currentTime.getFullYear(), currentTime.getMonth() + 3, currentTime.getDate());
//       const diff = futureDate.getTime() - currentTime.getTime();

//       setTimeLeft(diff);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = timeLeft ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor(timeLeft / (1000 * 60 * 60)) % 24} hours, ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes, ${Math.floor(timeLeft / 1000) % 60} seconds` : null;

//   return (
//     <div className="bg-gray-900 text-center py-12">
//       <h1 className="text-3xl font-bold text-gray-100">Countdown to Launch</h1>
//       <p className="text-gray-400 mt-4">{formattedTime || 'Loading countdown...'}</p>
//     </div>
//   );
// }

// export default Countdown;
//       const futureDate = new Date(currentTime.getFullYear(), currentTime.getMonth() + 3, currentTime.getDate());
//       const diff = futureDate.getTime() - currentTime.getTime();

//       setTimeLeft(diff);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = timeLeft ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor(timeLeft / (1000 * 60 * 60)) % 24} hours, ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes, ${Math.floor(timeLeft / 1000) % 60} seconds` : null;

//   return (
//     <div className="bg-gray-900 text-center py-12">
//       <h1 className="text-3xl font-bold text-gray-100">Countdown to Launch</h1>
//       <p className="text-gray-400 mt-4">{formattedTime || 'Loading countdown...'}</p>
//     </div>
//   );
// }

// export default Countdown;
//       const futureDate = new Date(currentTime.getFullYear(), currentTime.getMonth() + 3, currentTime.getDate());
//       const diff = futureDate.getTime() - currentTime.getTime();

//       setTimeLeft(diff);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = timeLeft ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor(timeLeft / (1000 * 60 * 60)) % 24} hours, ${Math.floor(timeLeft / (1000 * 60)) % 60} minutes, ${Math.floor(timeLeft / 1000) % 60} seconds` : null;

//   return (
//     <div className="bg-gray-900 text-center py-12">
//       <h1 className="text-3xl font-bold text-gray-100">Countdown to Launch</h1>
//       <p className="text-gray-400 mt-4">{formattedTime || 'Loading countdown...'}</p>
//     </div>
//   );
// }

// export default Countdown;
