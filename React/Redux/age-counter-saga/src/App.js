import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
return {
  onAgeUp: () => dispatch({ type: "AGE_UP", value: 1}),
  onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1}),
};
};




class App extends React.Component{
   render() {
     return(
       <div className="App">
          <div className="Age-label">
            Your age: {this.props.age}
            </div>
       <button onClick={this.props.onAgeUp}>Age Up</button>
       <button onClick={this.props.onAgeDown}>Age Down</button>
         </div>
     );
   }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
