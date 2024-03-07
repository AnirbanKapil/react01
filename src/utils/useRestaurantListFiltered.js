import { useEffect , useState } from "react";

const useRestaurantListFiltered = () => {
    
    
    
    
    useEffect(()=>{
        fetchData()
    },[])
    
    async function fetchData  () {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
          
    const jason = await data.json()
    
                   
    };
    
    return searchFilterList ;
    
}

export default useRestaurantListFiltered;