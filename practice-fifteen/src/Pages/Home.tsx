import { useForm } from "react-hook-form";
import { useEffect } from "react";

type CityType = {
  city: string;
};

type NominatimResponse = {
  address: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
  };
};

const Home = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<CityType>();
  const city = watch("city", "");

  const cities = ["Belgrade", "Munich", "Stuttgart", "Geneva", "Berlin"];

  const getCityFromCoords = async (lat: number, lon: number): Promise<string> => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data: NominatimResponse = await response.json();

    const cityName =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.state ||
        "Unknown";

    return cityName;
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          const city = await getCityFromCoords(latitude, longitude);
          console.log("User is in:", city);
        },
        (error: GeolocationPositionError) => {
          console.error("Error:", error.message);
        }
    );
  }, []);

  const onSubmit = (data: CityType) => {
    console.log(data);
    reset();
  };

  return (
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 m-5"
      >
        <input
            {...register("city", {
              required: "City name is required",
              validate: (value) => {
                const normalizedValue = value.toLowerCase();
                const isAllowed = cities.some(
                    (city) => city.toLowerCase() === normalizedValue
                );
                return isAllowed ? true : `${value} is not an allowed city`;
              },
            })}
            className="w-96 h-10 rounded border border-blue-400 outline-blue-400 pl-1.5"
            placeholder="Enter city"
            type="text"
        />
        {errors.city && (
            <p className="text-red-500">{errors.city.message}</p>
        )}

        <button
            className="w-96 h-10 rounded bg-blue-300 hover:bg-blue-500 text-white"
            type="submit">Submit
        </button>
      </form>
  );
};

export default Home;
