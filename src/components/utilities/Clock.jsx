import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(time);

  const dayOfMonth = time.getDate();
  let daySuffix = "th";

  if (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
    daySuffix = "st";
  } else if (dayOfMonth == 2 || dayOfMonth == 22) {
    daySuffix = "nd";
  } else if (dayOfMonth == 3 || dayOfMonth == 23) {
    daySuffix = "rd";
  }

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    time
  );
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    time
  );

  // const formattedDate = `${dayOfMonth}${daySuffix} ${month} ${year}, ${dayOfWeek}`;
  // const formattedDate = {dayOfMonth}<span className='sufix'>{daySuffix}</span> {month} {year}, {dayOfWeek};

  const clockOption = { hour: "numeric", minute: "numeric", hour12: false };
  const clock = time.toLocaleTimeString(undefined, clockOption);

  return (
    <p className="time">
      It's {clock}, {dayOfMonth}
      <sup className="suffix">{daySuffix}</sup> {month} {year}, {dayOfWeek}
    </p>
  );
}

export default Clock;
