import { useState } from "react";

const User = ({name}) => {

    const [counter] =useState(0);
    const [counter2] =useState(2);
    return <div className="user-card">
     <h2>count:{counter}</h2>
     <h2>count:{counter2}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:Chennai</h3>
      <h4>Contact Number:dinesh34</h4>
    </div>
}

export default User;