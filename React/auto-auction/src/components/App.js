import React, { Component } from 'react';
import '../App.css';
import Car from "./Car";
import {popularCars} from "../Garage";
import {additionalCars} from "../Garage";
import AddCar from "./AddCar";

class App extends Component {
	
  constructor() {
  super();
  
 {/* default state to render first page; 101 - first number for loaded cars (car101)*/ }
  this.state = {
    garage: popularCars,  
	isPopularCars: true,
	index: 101            
  };
  
  this.loadMoreCars = this.loadMoreCars.bind(this);
  this.addCarToAuction = this.addCarToAuction.bind( this );
}
 
  
     
  loadMoreCars() {
	{ /* method for onclick Button "Show more cars..." switches popularCars and additionalCars pages */}   
	  if (!this.state.isPopularCars) {
		  this.setState({ garage: popularCars, isPopularCars: true });
	  } else {
	  this.setState({ garage: additionalCars, isPopularCars: false});
	  }
	  
  }	  
  
  
  
  addCarToAuction(car) {
  
  let newCar = {};
  newCar[ 'car' + this.state.index ] = car; 
  let index = this.state.index + 1;	          {/* increment index for loading next car  */}
	  
  let newCars = Object.assign( additionalCars, newCar );
  this.setState({ garage: newCars, isPopularCars: false, index: index });
}
 
  render() {
 
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Europe Auto Auction</h2>
        </div>
		<div className="cars">
  
    {/* pass car data from garage objects into Car component */}  
{
	Object
    .keys(this.state.garage)
    .map(key => <Car key={key} meta={this.state.garage[key]} />)     
}
     
	 

      </div>
        
		
	  <div className="add-cars"><button onClick={this.loadMoreCars}>Show more cars...</button></div>
      
      <div className="new-cars">	  

 	  <AddCar addCar={this.addCarToAuction} />
	  
	  </div>
	  
      </div>
    );
  }
}

export default App;
