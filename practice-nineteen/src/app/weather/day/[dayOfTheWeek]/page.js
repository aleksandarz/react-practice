

const DayOfTheWeek = async ({ params }) => {
  const resolvedParams = await params;
  console.log(resolvedParams);

  const { dayOfTheWeek } = resolvedParams;

  const allowedDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  if (!allowedDays.includes(dayOfTheWeek.toLowerCase())) {
    return <h1>Invalid day: {dayOfTheWeek}</h1>;
  }

  return (
    <>
      <h1>Weather on { dayOfTheWeek }</h1>
    </>
  );
}

export default DayOfTheWeek;