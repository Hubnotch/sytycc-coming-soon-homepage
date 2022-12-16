import React,{useState,useEffect} from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
function About() {
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
export default About