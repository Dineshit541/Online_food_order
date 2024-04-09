
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
   
  const handleshow =() =>{
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div className="flex justify-between"  onClick={handleshow}>
        <span className="font-bold text-lg cursor-pointer" >
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
     
    </div>
  );
};

export default RestaurantCategory;
