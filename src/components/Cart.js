import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    function handleClearCart () {
         dispatch(clearCart());
    }

    const cartItems = useSelector((store)=> store.cart.items )
    return(
        <div className="text-center m-10 p-10">
         <h1 className="font-bold text-xl">Cart</h1>
         <div>
            <ItemList items = {cartItems} />
         </div>
         <button className="font-semibold bg-slate-700 text-white rounded-md p-4"
         onClick={handleClearCart}
         >
            Clear Cart
         </button>
         {cartItems.length===0 && <h1>Cart is Empty!!</h1>}
        </div>
    )
}

export default Cart;