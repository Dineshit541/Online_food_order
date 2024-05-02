import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus=useOnlineStatus();

  const cardItem=useSelector((store) =>store.cart.items)
  console.log(cardItem)
  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <img className="w-20 items-center" src={APP_LOGO} />
      </div>
      <div className="flex items-center font-bold">
        <ul className="flex p-4 m-4">
          <li>Online Status: { onlineStatus ? '✅' : '❌'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li  className="px-4 font-bold">
          <Link to="/cart">🛒- {cardItem.length} items </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
