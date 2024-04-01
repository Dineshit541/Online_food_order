import { CDN_LINK } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;

  return (
    <div className="m-4 p-4 w-52 bg-gray-100 rounded-md hover:bg-gray-300"> 
      <img
      src={
          CDN_LINK +cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
