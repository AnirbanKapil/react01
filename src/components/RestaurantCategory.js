import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
   const {data , showItems , setShowIndex} = props;
   
//   

   function handleClick () {
     setShowIndex();
   
   }
   
    return (
        <div>
            <div className=" ml-[300px] mr-[300px] mt-5 mb-4 bg-gray-250 shadow-lg p-5  font-semibold cursor-pointer"
            onClick={handleClick}>
               
                <div className="flex justify-between" >
                <span className="">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                <div className="mt-2">
                {showItems && <ItemList items = {data.itemCards} />}
                </div>
                
                
                
            </div>
                 
        </div>
    )
}

export default RestaurantCategory;