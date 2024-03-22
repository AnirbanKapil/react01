import React from "react";
// import { json } from "react-router-dom";

class Userclass extends React.Component{
    
    constructor(props){
      
        super(props);
     
       
        this.state = {
            // count : 0,
            // count1 : 1,
            info : {
                name : "Dummy",
                location : "none",
                avatar_url : "img"
            }
        };

        



       

    };
    async componentDidMount () {
         
        const data = await fetch("https://api.github.com/users/AnirbanKapil");
        const jason = await data.json();
        console.log(jason.login)
        
        
        this.setState  ({
            info : jason,
        })

    };
  

   
    
     
    render(){
        const {login , url , avatar_url} = this.state.info

        return <div>
            
            <h4>I am UserClass</h4>
            
            
            

             {/* <h4>{this.props.name}</h4>
            <h4>{this.props.location}</h4> */}
        
            {/* <h4>Kill Count : {this.state.count}</h4>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1 
                })
            }}>Kill Count++</button> */}
        </div>
    }
}

export default Userclass;