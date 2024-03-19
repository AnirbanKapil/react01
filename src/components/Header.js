import {LOGO_URL} from "../utils/constant"
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {

    const [loginBtn, setloginBtn] = useState("Login");
    
    const status = useOnlineStatus();
   
    const {loggedInUser} = useContext(UserContext);

    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg m-3">
         <div className="logo-container">
         <img className="w-20 p-1" src= {LOGO_URL} />
         </div>
         <div className="flex items-center">
            <ul className="flex p-6">
               <li className="pr-7">Online Status {status ? "✅" : "❎"}</li>
               <li className="px-4">
                <Link to="/">Home</Link>
                </li>
               <li className="px-4">
                <Link to="/about">About Us</Link>
                </li> 
               <li className="px-4">
                <Link to="/contact">Contact Us</Link>
                </li> 
               <li className="px-4">
                 <Link to ="/grocerry">Grocerry</Link>
                 </li>
               <li className="px-4 font-semibold">
                <Link to= "/cart" >Cart- ({cartItem.length}) items</Link>
                </li> 
                <li className="pr-2 font-semibold">
                    {loggedInUser}
                </li>
               <button className="btn-login" onClick={()=>{
                loginBtn === "login" ?  setloginBtn("Logout") : setloginBtn("login")
                }}>{loginBtn}</button>

            </ul>

         </div>
        
        </div>
    )
};

export default Header;