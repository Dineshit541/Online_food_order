import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../redux/cartSlice";

const Cart =() =>{

    const CardItem=useSelector((store) =>store.cart.items)
    const dispatch=useDispatch();
    const handleRemoveItem = () =>{
     dispatch(clearItems());
    }
   return(
    <div className="text-center m-5 p-5">
    <h1 className="font-bold text-3xl">Cart</h1>
    <button className=" font-bold text-xl bg-gray-900 text-white rounded-3xl p-2 " onClick={handleRemoveItem}>Clear Cart</button>
    <div className="w-6/12 m-auto border-black">
     <ItemList items={CardItem}/>
     </div>
    </div>
   )
};

export default Cart;