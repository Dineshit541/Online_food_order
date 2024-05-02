import { CDN_LINK } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;
   
  return (
    <div className=" p-4 m-4  w-[260px] h-[350px] bg-gray-100 shadow-xl rounded-md hover:bg-gray-200 flex flex-col justify-between"> 
      <img
      className="rounded-lg w-full h-36"
      src={
          CDN_LINK +cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-xs font-bold flex justify-between items-center my-2">
        <span className="bg-green-500 rounded-md text-white w-fit py-1 px-2">
          ⭐ {avgRating}
        </span>
        </h4>
        <h4 className="text-xs font-bold flex justify-between items-center my-2">
        <span>{costForTwo}</span>
          <span>{sla.slaString}</span>
          </h4>
     
    </div>
  );
};

export default RestaurantCard;
