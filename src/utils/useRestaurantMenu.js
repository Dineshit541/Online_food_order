import { useEffect, useState } from "react";
import { MENU_LOGO } from "./constants";

const useRestaurantMenu=(resId) => {
  const [resInfo,SetResInfo] =useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async() =>{
        const data = await fetch(MENU_LOGO+resId);
        const json = await data.json();
        SetResInfo(json);
    }

    return resInfo;
     
};

export default useRestaurantMenu;