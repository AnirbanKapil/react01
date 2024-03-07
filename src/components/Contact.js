import User from "./User";
import Userclass from "./Userclass";

const Contact = () => {
    return (
        <div className="user-card">
        <h1>Welcome!!! 👓👓</h1>
        <User />
        <Userclass name = {"Name : Neo"} location = {"Location : Matrix"}/>
        </div>
    )
};

export default Contact;