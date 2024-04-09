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
      <div className=" flex flex-wrap lg:items-center ">
      <div className="w-5/12">
        <img className=" p-24 m-10" src={avatar_url}/>
        </div>
        <div className="w-6/12">
        <h1 className=" font-bold text-3xl py-2">About Us</h1>
        <h2 className="text-xl font-semibold">Name:{name}</h2>
        <div className="text-lg font-semibold">Location:{location}</div>
        <div className="text-lg font-semibold">Info:{bio}</div>
        <div className="text-lg font-semibold">Contact:{login}</div>
        </div>
      </div>
    );
  }
}

export default UserClass;
