import React, { Component } from "react";
import TakeHomeGrid from "./Grid/TakeHomeGrid";
import DataSet from "./DataSet/DataSet";
import NavBar from "./Nav/NavBar";
import splitString from "./utils/SplitString";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    data: [],
    currentDataSet: "",
    currentNavigation: "",
    navigations: [],
  };

  handleSelect = (value) => {
    this.getData(value);
  };
  handlenavChange = (nav) => {
    this.setState({
      currentNavigation: nav.target.innerHTML,
    });
  };
  getData = (value) => {
    switch (value) {
      case "Bank": {
        fetch("https://mocki.io/v1/c99c382d-9952-4452-a860-02f0e7f01449")
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              data: responseData,
              currentDataSet: "Bank",
              navigations: this.getNavigations(responseData),
              currentNavigation: this.getNavigations(responseData)[0],
            });
          });
        break;
      }
      case "Ecommerce": {
        fetch("https://mocki.io/v1/f8e89695-6f41-4e1c-b5e4-bfd9d7ddffa4")
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              data: responseData,
              currentDataSet: "Ecommerce",
              navigations: this.getNavigations(responseData),
              currentNavigation: this.getNavigations(responseData)[0],
            });
          });
        break;
      }
      default: {
        fetch("https://mocki.io/v1/c99c382d-9952-4452-a860-02f0e7f01449")
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              data: responseData,
              currentDataSet: "Bank",
              navigations: this.getNavigations(responseData),
              currentNavigation: this.getNavigations(responseData)[0],
            });
          });
        break;
      }
    }
  };
  componentDidMount() {
    fetch("https://mocki.io/v1/c99c382d-9952-4452-a860-02f0e7f01449")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
          currentDataSet: "Bank",
          navigations: this.getNavigations(responseData),
          currentNavigation: this.getNavigations(responseData)[0],
        });
      });

    // fetch("https://mocki.io/v1/f8e89695-6f41-4e1c-b5e4-bfd9d7ddffa4")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({
    //       ecomData: responseData,
    //       currentDataSet: "Bank",
    //       currentData: this.getCurrentData(
    //         responseData,
    //         this.state.currentNavigation
    //       ),
    //       navigations: this.getNavigations(responseData),
    //       currentNavigation: this.state.navigations[0],
    //     });
    //   });
  }

  getCurrentData = (data, currnav) => {
    let currentData = [];
    currentData = data.filter((value) => {
      return value.string.indexOf(currnav) !== -1;
    });
    return currentData;
  };
  getNavigations = (data) => {
    let navigations = [];
    data.forEach((element) => {
      navigations = splitString(element["string"], navigations);
    });
    return navigations;
  };

  render() {
    const currentData = this.getCurrentData(
      this.state.data,
      this.state.currentNavigation
    );
    console.log(currentData);
    console.log(this.state.navigations);
    const GridNav = this.state.navigations.map((navigation) => {
      return (
        <Route path={`/${navigation}`} key={navigation}>
          <TakeHomeGrid data={currentData} />
        </Route>
      );
    });
    return (
      <Router>
        <div className="App">
          <div className="header-nav-container">
            <NavBar
              navigations={this.state.navigations}
              handlenavChange={this.handlenavChange}
            />
            <DataSet
              handleSelect={this.handleSelect}
              dataset={this.state.currentDataSet}
            />
          </div>
          <Switch>{GridNav}</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
