
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {
  
  const [showIndex , setShowIndex] = useState(0);
  
  const {resid} = useParams();

  const resInfo = useRestaurantMenu(resid);
  
   

  if (resInfo === null) return <Shimmer /> ;

    const {name,city,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;  
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
       c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       
       
    )
     
    console.log(categories);
    
    
    
    
    return (
    
       <div className = "text-center">
          <h1 className="font-extrabold m-6">{name}</h1>
          <h2 className="font-extrabold m-4">{city}</h2>
          <div className="m-4">
          <h3 className="font-bold">{cuisines.join(" , ")}</h3>
          <h4 className="font-bold">{costForTwoMessage}</h4>
          </div>
           {categories.map((category,index)=>
            <RestaurantCategory key = {category?.card?.card.title}
            data = {category?.card?.card} 
            showItems = {index === showIndex ? true : false} 
            setShowIndex = {()=> setShowIndex(index) }
            />)} 

          </div>
    )
}

export default RestaurantMenu;