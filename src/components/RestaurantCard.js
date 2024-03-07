
import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo} = resData?.info 
    return (
        <div className="res-card m-4 p-4 w-[240px] bg-stone-200 rounded-lg hover:bg-stone-300">
        <img className="rounded-md" src={CDN_URL+cloudinaryImageId} />    
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{resData?.info?.sla?.deliveryTime} mins</h5>
        <h5>{costForTwo}</h5>

        </div>
    )
};

export const aggregatedDiscountInfo = () => {
    return (props) => {
        return (
            <div>
                <label>Discount</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;