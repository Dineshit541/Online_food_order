import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(null);
  const [filteredrestro, setFilteredRestro] = useState([]);

  const [restrosearch, setRestroSearch] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection....
      </h1>
    );
  }

  return listOfResturant === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center flex-col mb-1 w-full">
        <div className="mt-4 md:mt-3 md:mx-6 flex justify-center  w-full ">
          <input
            className="w-5/12 px-4 py-2 border placeholder:text-gray-600 border-r-0 border-solid border-red-500 rounded-l-lg focus:outline-none"
            placeholder="Search a restaurant"
            type="text"
            value={restrosearch}
            onChange={(e) => setRestroSearch(e.target.value)}
          />
          <button
            className="bg-red-500 text-white ease-linear duration-200 hover:bg-gray-600 px-4 py-2 rounded-r-lg"
            onClick={() => {
              const filtered = listOfResturant.filter((restro) =>
                restro.info.name
                  .toLowerCase()
                  .includes(restrosearch.toLowerCase())
              );
              setFilteredRestro(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="my-6 mx-6 flex flex-wrap lg:justify-between w-[47%] sm:flex-col sm:items-center xl:flex-row" >
        <div >
          <button
            className="px-8 py-2 bg-red-500 rounded-lg mr-2 sm:mb-4 xl:mb-0 hover:bg-gray-600 text-white ease-linear duration-200"
            onClick={() => {
              const filteredList = listOfResturant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestro(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          </div>
        </div>
      </div>
      {filteredrestro && (
        <div className="flex flex-wrap justify-evenly">
          {filteredrestro.map((res) => {
            return (
              <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                <RestaurantCard resData={res} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
