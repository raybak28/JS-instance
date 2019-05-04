import React, {Component} from 'react';

class AddCar extends Component {
	
  addNewCar(e) {
  e.preventDefault();
  {/* new car object created from Form */}
  let car =  {
    title: this.title.value,
    year: this.year.value,
	photo: this.photo.value,
    description: this.description.value
    
  };
  this.props.addCar( car );  {/* pass car object through props  */}
}
	
	
	render() {
	return (
		<form className="car-form" onSubmit={(e) => this.addNewCar(e)}>
		<p>Add your car to auction!</p>
		<input ref={ ( input ) => this.title = input } type="text" maxLength="20" placeholder="Title" />
        <input ref={ ( input ) => this.year = input } type="text" maxLength="4" placeholder="Year" />
        <input ref={ ( input ) => this.photo = input } type="text" placeholder="Photo (the path ./folder/filename)" />
		<textarea ref={ ( input ) => this.description = input} maxLength="40" placeholder="Description">
        </textarea>
		<p />
        <button type="submit">Add car</button>
				
	    </form>
	);
	}
}

export default AddCar