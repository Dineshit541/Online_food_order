import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restroMenu = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] =useState(null);



  if (restroMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restroMenu?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restroMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  const categories =
    restroMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="text-center font-bold">
        <h1 className="text-2xl my-4">{name}</h1>
        <div className="text-lg"> 
          {cuisines.join(", ")} -{costForTwoMessage}
        </div>    
      </div>
      {categories.map((category,index) => {
        return <RestaurantCategory data={category.card.card}
        showItem={index ===showIndex ? true :false} 
        setShowIndex={() => setShowIndex(index)}/>;
        
      })}
    </>
  ); 
};

export default RestaurantMenu;
