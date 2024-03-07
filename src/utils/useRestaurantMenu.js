import { useState , useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resid) => {
    const [resInfo , setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData () {
        const data = await fetch(MENU_API+resid);
        const jason = await data.json();
        setResInfo(jason.data) 
    }
    

    return resInfo;
}


export default useRestaurantMenu;