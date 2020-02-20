import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Car from './Components/Car';
import AddCar from './Components/AddCar';
import './style.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <br/>
        <Car />
        <br/>
        <AddCar />
      </div>
    );
  }

}

export default App;

