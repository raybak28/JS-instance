import React, {Component} from 'react';

class Car extends Component{
	
	render() {
	  return (
	     <div className="car">
		   <h2>{ this.props.meta.title }</h2>
        <div><img width="230" src={ this.props.meta.photo } /></div>
        <p>({ this.props.meta.year })</p>
		<p>{ this.props.meta.description }</p> 
		</div>   
	
	
	);
	}
}

export default Car;