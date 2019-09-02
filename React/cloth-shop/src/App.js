import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopStore from './ShopStore';
import ClothPosition from './ClothPosition';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      shopWarehouseData: null
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1fys3r')
      .then(response => response.json())
      .then(result => {
        this.setState({ shopWarehouseData: result });
      })
      .catch(err => console.log("Error Reading data " + err));
  }


  render() {

    return (

      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/"
              render={(props) => <ShopStore {...props} shopWarehouseData={this.state.shopWarehouseData} />}
            />
            <Route path="/about/:clothId"
              render={(props) => <ClothPosition {...props} shopWarehouseData={this.state.shopWarehouseData} />}
            />
          </React.Fragment>
        </Switch>
      </Router>

    );

  }

}

export default App;