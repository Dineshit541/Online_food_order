import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-20 items-center" src={APP_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status: { onlineStatus ? '✅' : '❌'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className="px-4">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li  className="px-4">Card</li>
          <button
            className="btn-login"
            onClick={() => {
              setBtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
