
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
  
  
  
  const {resid} = useParams();

  const resInfo = useRestaurantMenu(resid);
  
   

  if (resInfo === null) return <Shimmer /> ;

    const {name,city,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;  
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
    
    
    
    
    return (
    
       <div className = "text-center">
          <h1 className="font-extrabold">{name}</h1>
          <h2 className="font-extrabold">{city}</h2>
         
          <h3>{cuisines.join(" , ")}</h3>
          <h4>{costForTwoMessage}</h4>
          <h2>Menu</h2>
          <ul>
            {itemCards.map((list) => 
            <li key={list.card.info.id}>
              <h4>Name</h4>{list.card.info.name} ,
              <h4>Category -</h4> {list.card.info.category}</li>)}
          </ul>
          
          


        </div>
    )
}

export default RestaurantMenu;