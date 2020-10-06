import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class SpaceData extends Component {
  state = {
    bodies: [],
  };

  componentDidMount() {
    const url = "http://api.le-systeme-solaire.net/rest.php/bodies"; //https://api.le-systeme-solaire.net/swagger/#/bodies/get_bodies

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ bodies: result.bodies });
      });
  }

  render() {
    const { bodies } = this.state;
    if (bodies.length === 0) {
      return (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
    console.log(bodies);
    return <div>{bodies[0]?.englishName}</div>;
  }
}
