import {LOGO_URL} from "../utils/constant"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

    const [loginBtn, setloginBtn] = useState("Login");
    
    const status = useOnlineStatus();
   

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
               <li className="px-4">
                Cart
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