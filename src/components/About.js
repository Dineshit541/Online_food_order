import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props) {
        super(props);
       
    }



    render(){
    
        return <>
        <h2>About Us</h2>
        <h2>This is online food delivery app devloped by Dinesh using ReactJs...!</h2>
        <br />
        <UserClass name={"First"} />
        </>
    }
};

export default About;