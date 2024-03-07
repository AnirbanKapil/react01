import ResturantCard , {aggregatedDiscountInfo} from "./RestaurantCard";
import resListObj from "../utils/mockdata";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";





// let resListObj2 = [
//   {
//     "info": {
//       "id": "4263142",
//       "name": "Namma1 Chennai Dosa Express",
//       "cloudinaryImageId": "wy4tnngati4ihnvie7c8",
//       "locality": "Garchuk",
//       "areaName": "Lokhra",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "South Indian",
//         "Kerala",
//         "Fast Food",
//         "Beverages"
//       ],
//       "avgRating": 4.4,
//     }
//   },
//   {  
//   "info": {
//     "id": "4263143",
//     "name": "Namma2 Chennai Dosa Express",
//     "cloudinaryImageId": "wy4tnngati4ihnvie7c8",
//     "locality": "Garchuk",
//     "areaName": "Lokhra",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "South Indian",
//       "Kerala",
//       "Fast Food",
//       "Beverages"
//     ],
//     "avgRating": 4.4,
//    }
//   },
//   {  
//     "info": {
//       "id": "4263144",
//       "name": "Namma3 Chennai Dosa Express",
//       "cloudinaryImageId": "wy4tnngati4ihnvie7c8",
//       "locality": "Garchuk",
//       "areaName": "Lokhra",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "South Indian",
//         "Kerala",
//         "Fast Food",
//         "Beverages"
//       ],
//       "avgRating": 4.4,
//      }
//     },
//     {  
//       "info": {
//         "id": "4263145",
//         "name": "Namma4 Chennai Dosa Express",
//         "cloudinaryImageId": "wy4tnngati4ihnvie7c8",
//         "locality": "Garchuk",
//         "areaName": "Lokhra",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "South Indian",
//           "Kerala",
//           "Fast Food",
//           "Beverages"
//         ],
//         "avgRating": 4.4,
//        }
//       },



// ];

// let resListObj25 =[ 
//   {
//     "info": {
//       "id": "6343881",
//       "name": "Chittchore-Bikaner Gharana-Qsr",
//       "cloudinaryImageId": "660/f01666ac73626461d7455d9c24005cd4",
//       "areaName": "Ganeshguri",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Indian"
//       ],
//       "avgRating": 4.2,
//     }    
//   },
//   {
//     "info": {
//       "id": "6343882",
//       "name": "Chittchore-Bikaner Gharana-Qsr",
//       "cloudinaryImageId": "660/1d0161a90490bc9c56dca48a0ca14ecf",
//       "areaName": "Ganeshguri",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Indian"
//       ],
//       "avgRating": 4.2,
//     }    
//   },
//   {
//     "info": {
//       "id": "6343883",
//       "name": "Chittchore-Bikaner Gharana-Qsr",
//       "cloudinaryImageId": "660/f01666ac73626461d7455d9c24005cd4",
//       "areaName": "Ganeshguri",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Indian"
//       ],
//       "avgRating": 4.2,
//     }    
//   },
//   {
//     "info": {
//       "id": "6343884",
//       "name": "Chittchore-Bikaner Gharana-Qsr",
//       "cloudinaryImageId": "660/f01666ac73626461d7455d9c24005cd4",
//       "areaName": "Ganeshguri",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Indian"
//       ],
//       "avgRating": 4.2,
//     }    
//   },
//   ];
  


const Body = () => {
   
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchFilterList,setSearchFilterList] = useState(""); 
 
  const[searchList,setSearchList] = useState("");
  

    useEffect(()=>{
        fetchData()
    },[])
    
    async function fetchData  () {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
          
    const jason = await data.json()
    setListOfRestaurants(jason?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchFilterList(jason?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)               
    }
    const status = useOnlineStatus();
    
    if (status === false) {return <h1>You are offline!!! Plz connect to your internet</h1>}
    
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : 
        (
        <div className="body">
          <div className="flex justify-between">
            <div className="search m-1 p-1">
             <input type="text" className=" ml-[100px] border border-solid border-black " value={searchList} onChange={(e)=> setSearchList(e.target.value)} />
             <button className="m-4 p-.5 bg-stone-300 rounded-lg" onClick={()=>{
              console.log(searchList);
              let filteredList = listOfRestaurants.filter((reslist)=> reslist.info.name.toUpperCase().includes(searchList.toUpperCase()));
              setSearchFilterList(filteredList);
              }}>Search</button>
            </div>
            <button className="flex m-2 mr-[100px] pt-4 bg-gray-100 rounded-2xl" 
            onClick={()=> { 
                
                     filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
                     setSearchFilterList(filteredList);
                     
                }}
                >Top Rated Restaurants</button>
          </div>
          <div className="flex flex-wrap item-centre ml-20">
            {searchFilterList.map((list) => 
            <Link key = {list.info.id} to = {"/restaurant/"+list.info.id}>
              
              <ResturantCard  resData = {list} /> :
            </Link>)}
             
          


            
            
            </div>  
        </div>
    )}
            


export default Body;