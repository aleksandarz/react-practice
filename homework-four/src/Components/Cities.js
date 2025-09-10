import { useState } from "react";

function Cities() {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");

  const [cities, setCities] = useState([]);
  const addNewCity = (city, country, temperature) => {

    const newCity = {
      "city": city,
      "country": country,
      "temperature": temperature,
    }

    setCities(currentCities => ([
      ...currentCities, newCity,
    ]));

    setCity("");
    setCountry("");
    setTemperature("");
  }

  console.log(cities);

  return (
    <>
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <form action="" className="flex flex-col justify-center items-center gap-3 w-1/2 mt-10">
          <label htmlFor="city-name" className="text-xl">City name</label>
          <input className="border-gray-300 border-2 rounded h-9 w-3/5 pl-2 outline-gray-300"
                 type="text" name="city-name" id="city-name" value={city}
                 onChange={(e) => setCity(e.target.value)}/>
          <label htmlFor="country" className="text-xl">Country</label>
          <input className="border-gray-300 border-2 rounded h-9 w-3/5 pl-2 outline-gray-300"
                 type="text" name="country" id="country" value={country}
                 onChange={(e) => setCountry(e.target.value)}/>
          <label htmlFor="temperature" className="text-xl">Temperature</label>
          <input className="border-gray-300 border-2 rounded h-9 w-3/5 pl-2 outline-gray-300"
                 type="text" name="temperature" id="temperature" value={temperature}
                 onChange={(e) => setTemperature(e.target.value)}/>
          <button type="button" onClick={() => addNewCity(city, country, temperature)}
                  className="h-9 w-3/5 bg-cyan-400 hover:bg-cyan-800 transition duration-400 text-white rounded mt-6">Add new city</button>
        </form>

        <div className="flex flex-col gap-3 text-center mt-10">
          <h1 className="text-3xl font-bold">Added cities</h1>
          {cities.map((c, i) => (
            <p className="text-xl" key={i}>
              City - {c.city}, Country - {c.country}, Temperature - {c.temperature}°C
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cities;