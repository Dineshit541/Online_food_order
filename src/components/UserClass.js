import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Dineshit541");
    const json = await data.json();
    this.setState({
        userInfo:json
    })
  }

  render() {
    const { name ,location,avatar_url,bio,login} = this.state.userInfo;


    return (
      <div className="user-card">
        <img className="img-git" src={avatar_url}/>
        <h2>Name:{name}</h2>
        <div>Location:{location}</div>
        <div>Info:{bio}</div>
        <div>Contact:{login}</div>
      </div>
    );
  }
}

export default UserClass;
