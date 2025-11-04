import Link from "next/link";

const Day = () => {

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return (
    <>
      <h1>Weather by day</h1>
      {days.map((day, index) => (
        <li key={day}>
          <Link href={`/weather/day/${day}`}>{day}</Link>
        </li>
      ))}
    </>
  );
}

export default Day;