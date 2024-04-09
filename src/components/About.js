import React, { useContext } from "react";
import UserClass from "./UserClass";


class About extends React.Component {

    constructor(props) {
        super(props);
       
    }
    render(){
    
        return <>
       <div>
        <UserClass name={"First"} />
        </div> 
        </>
    }
};

export default About;