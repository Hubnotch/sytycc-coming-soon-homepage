import React,{useState,useEffect} from 'react'

function Newsletter() {
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
   const daysLeft = timeLeft ? Math.floor(timeLeft / (1000 * 60 * 60 * 24)) : null;
  const hoursLeft = timeLeft ? Math.floor(timeLeft / (1000 * 60 * 60)) % 24 : null;
  const minutesLeft = timeLeft ? Math.floor(timeLeft / (1000 * 60)) % 60 : null;
  const secondsLeft = timeLeft ? Math.floor(timeLeft / 1000) % 60 : null;

  return (
    <div className='w-full my-8 bg-bgBack bg-no-repeat bg-center bg-cover md:bg-contain md:bg-right'>
      <div className="my-6 w-full md:w-[60%]">
         <h1 className='text-3xl my-5 leading-10 font-bold sm:text-5xl md:text-6xl'>LAUNCHING SOON...</h1>
      <div className="my-5 flex items-start font-semibold ">
        <div className="leading-7 mr-5"> Design Stories</div>
        <div className="leading-7 mr-5 pl-5 border-l-2 border-l-slate-500">Programming Stories</div>
        <div className="leading-7 mr-5 pl-5 border-l-2 border-l-slate-500">Tech trends</div>
      </div>
      <p className='font-sm text-justify leading-8 mb-5 px-1'>
        We have loads of amazing features cooking and  we certainly can’t wait
        to share them with you! Be the first to know when we launch...
      </p>
      </div>
      <div className="my-8">
        <div className="flex-wrap flex text-[#FF8C32] ">
        <div className=" px-12 border-none sm:border-r-[1px] border-[#FF8C32]/50">
          <div className='font-bold text-6xl text-center'>{daysLeft || 'Loading'}</div>
          <div className='text-center uppercase font-medium py-3'>days</div>
        </div>
        <div className=" px-12 border-none sm:border-r-[1px] border-[#FF8C32]/50">
          <div className='font-bold text-6xl text-center'>{hoursLeft || 'Loading'}</div>
          <div className='text-center uppercase font-medium py-3'>hours</div>
        </div>
        <div className=" px-12 border-none sm:border-r-[1px] border-[#FF8C32]/50">
          <div className='font-bold text-6xl text-center'>{minutesLeft || 'Loading'}</div>
          <div className='text-center uppercase font-medium py-3'>minutes</div>
        </div>
        <div className=" px-12">
          <div className='font-bold text-6xl text-center'>{secondsLeft || 'Loading'}</div>
          <div className='text-center uppercase font-medium py-3'>seconds</div>
        </div>
      </div>
      </div>

      <div className="w-full md:w-9/12 md:flex justify-between p-3 border-2 border-slate-600 rounded-lg ">
        <input className='w-full sm:w-9/12 px-4 py-2 border-none focus:outline-none bg-transparent' placeholder='Enter your email address' type="email" name="email" id="email" />
        <button className='w-full md:w-1/3 px-5 py-3 rounded-lg font-semibold bg-[#06113C] text-white' type='submit'>Click to Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter