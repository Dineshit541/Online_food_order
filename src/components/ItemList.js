import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItems } from "../redux/cartSlice";

const ItemList = ({ items }) => {

  const dispatch=useDispatch();
  const handleAddItem = (item) =>{
    dispatch(addItems(item))
  }
  
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
          >
           <div className="w-9/12"> 
            
            <div>
              <span>{item.card.info.name}</span>{" "}
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute py-32 px-10">
            <button
            onClick={()=>handleAddItem(item)}
             className="inline-flex items-center rounded-md bg-white px-8 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-green-500 ">
            ADD</button>
            </div>
          <img src={CDN_LINK + item.card.info.imageId} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
