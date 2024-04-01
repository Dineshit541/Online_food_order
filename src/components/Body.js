import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(null);
  const [filteredrestro, setFilteredRestro] = useState([]);

  const [restrosearch, setRestroSearch] = useState("");
   const onlineStatus=useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
   
  if(onlineStatus === false) {
    return <h1>Looks like you're offline!! Please check your internet connection....</h1>
  }
  console.log(listOfResturant)
  return listOfResturant === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={restrosearch}
            onChange={(e) => setRestroSearch(e.target.value)}
          />
          <button
          className="px-4 bg-green-100 m-4"
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
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 bg-gray-100"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredrestro.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
