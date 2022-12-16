import React, { useState, useEffect } from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
// import { Link } from 'react-router-dom'
// import { BiMenuAltRight } from 'react-icons/bi'
// import { AiOutlineClose } from 'react-icons/ai'

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

export default Membership

// import React, { useState } from 'react';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="block md:hidden border-gray-600 hover:border-gray-700 focus:border-gray-700"
//       >
//         Menu
//       </button>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         Home
//       </a>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         About
//       </a>
//       <a href="#" className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 md:mt-0 md:ml-4">
//         Contact
//       </a>
//     </nav>
//   );
// };

// export default Menu;
