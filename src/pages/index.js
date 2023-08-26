import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showSuper, setShowSuper] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [yearRemaining, setYearRemaining] = useState("");
  const [monthRemaining, setMonthRemaining] = useState("");
  const [dayRemaining, setDayRemaining] = useState("");
  const [hourRemaining, setHourRemaining] = useState("");
  const [minuteRemaining, setMinuteRemaining] = useState("");
  const [secondRemaining, setSecondRemaining] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      document.querySelectorAll(".grid-background > div").forEach((elem) => {
        var delay = getRandomInt(0, 5);
        var duration = getRandomInt(3, 6);

        elem.style.animationDelay = `${delay}s`;
        elem.style.animationDuration = `${duration}s`;
      });

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const now = new Date();
      const endOfMonth = new Date(now);
      endOfMonth.setMonth(endOfMonth.getMonth() + 99);
      endOfMonth.setDate(1);
      endOfMonth.setHours(0, 0, 0, 0);
      // endOfMonth.setHours(endOfMonth.getDay() * 12)

      const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = endOfMonth - currentTime;

        let years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        let months = Math.floor(
          (timeDifference % (365 * 24 * 60 * 60 * 1000)) /
            (30 * 24 * 60 * 60 * 1000)
        );
        let days = Math.floor(
          (timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
        );
        let hours = Math.floor(
          (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        let minutes = Math.floor(
          (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
        );
        let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        if (years === 0 && months === 0 && days <= 3) {
          setShowSuper(true);
        } else {
          setShowSuper(false);
        }

        if (years === 0) {
          years = `${years} years`;
        } else if (years > 1) {
          years = `${years} years`;
        } else if (years === 1) {
          years = `${years} year`;
        }

        if (months === 0) {
          months = `${months} months`;
        } else if (months > 1) {
          months = `${months} months`;
        } else if (months === 1) {
          months = `${months} month`;
        }

        if (days === 0) {
          days = `${days} days`;
        } else if (days > 1) {
          days = `${days} days`;
        } else if (days === 1) {
          days = `${days} day`;
        }

        if (hours === 0) {
          hours = `${hours} hours`;
        } else if (hours > 1) {
          hours = `${hours} hours`;
        } else if (hours === 1) {
          hours = `${hours} hour`;
        }

        if (minutes === 0) {
          minutes = `${minutes} minutes`;
        } else if (minutes > 1) {
          minutes = `${minutes} minutes`;
        } else if (years === 1) {
          minutes = `${minutes} minute`;
        }

        if (seconds === 0) {
          seconds = `${seconds} seconds`;
        } else if (seconds > 1) {
          seconds = `${seconds} seconds`;
        } else if (seconds === 1) {
          seconds = `${seconds} second`;
        }

        setYearRemaining(years);
        setMonthRemaining(months);
        setDayRemaining(days);
        setHourRemaining(hours);
        setMinuteRemaining(minutes);
        setSecondRemaining(seconds);

        setTimeRemaining(
          `${years}, ${months}, ${days}, ${hours}, ${minutes}, ${seconds}`
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 select-none">
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse text-center"></div>
      </div>
      <title>Coming soon</title>
      <div className="relative select-none">
        <div className="flex justify-center items-center">
          <Image src="/favicon.ico" width={125} height={32} draggable={false} />
        </div>
        <img
          src="https://i.postimg.cc/PfwZ6bDk/rocket.png"
          className="rocket"
          draggable={"false"}
        />
        <h2 className="text-white text-4xl md:text-8xl font-bold flex flex-row items-center">
          <span className="p-3">Flaxe</span>
          <span className="text-white text-4xl font-bold flex flex-row items-center">
            is Coming
            {showSuper == true && (
              <div className="relative text-sm mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-up-fill text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                <div className="absolute -top-12 transform -rotate-45 text-blue-500">
                  <p className="font-light text-base text-white bg-blue-500 rounded-md px-2 py-0">
                    super
                  </p>
                </div>
              </div>
            )}{" "}
            Soon
          </span>
        </h2>
        <p className="font-light italic text-2xl text-white px-2 py-0 text-center">
          {timeRemaining}
        </p>
      </div>
    </div>
  );
}
