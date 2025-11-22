import { useEffect, useState } from "react";

const RelationshipTimer = () => {
  // CHANGE THIS to your real relationship start date
  const startDate = new Date("2025-10-23T15:00:00");

  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let diff = now - startDate; // milliseconds difference

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      const years = Math.floor(totalDays / 365);
      const months = Math.floor((totalDays % 365) / 30);
      const days = Math.floor((totalDays % 365) % 30);

      setDuration({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-pink-600 mt-5">
      <h2 className="text-2xl font-bold mb-2">
        💞 Since That Special Day 💞
      </h2>

      <p className="text-lg font-medium flex flex-wrap gap-2 mt-4 justify-center">
  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full shadow-sm">
    {duration.months} month{duration.months >= 2 ? "s" : ""}
  </span>
  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full shadow-sm">
    {duration.days} day{duration.days >= 2 ? "s" : ""}
  </span>
  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full shadow-sm">
    {duration.hours} hour{duration.hours >= 2 ? "s" : ""}
  </span>
  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full shadow-sm">
    {duration.minutes} minute{duration.minutes >= 2 ? "s" : ""}
  </span>
  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full shadow-sm">
    {duration.seconds} second{duration.seconds >= 2 ? "s" : ""}
  </span>
</p>


      <p className=" text-gray-500 mt-1">and counting…</p>
    </div>
  );
};

export default RelationshipTimer;
