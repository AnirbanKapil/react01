import { CDN_URL } from "../utils/constant";

const ItemList = (props) => {
    const {items} = props;
    
    
    

    return (
        <div>
         
         <div>
            {items.map((item)=> (
          <div key={item.card.info.id} className="m-2 p-2 border-y-2 bg-slate-150 text-left">
            <div className="font-semibold bg-stone-100 ">
            <span>{item.card.info.name}</span>
            <span>Rs {item.card.info.price/100}</span>
            </div>
            <div className="text-xs shadow-lg bg-stone-100 mt-4 flex justify-between">
                <p>{item.card.info.description}</p>
                <div className="">
                <button className="absolute bg-blue-200 rounded-sm ml-1">Add+</button>
                <img className="w-[160px] h-[120px] m-2" src={CDN_URL + item.card.info.imageId}/>
                </div>
            </div>
            
          </div>
            ))}
         </div>
        
            
             
        </div>        
     )
};           
export default ItemList;