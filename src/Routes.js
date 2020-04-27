import React, { Component } from "react";
import DogList from "./DogList";
import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./Dogdetails";

class Routes extends Component {
  render() {
    const getDog = (props) => {
      // Take the name of the dog in the route
      let name = props.match.params.name;
      // find the dog in the array that match the dog in the route
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      // Return the DogDetails component with props to have access to route params, and the current dog.
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
