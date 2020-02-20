import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class AddCar extends Component {

  state = {
    carName: '',
    carModel: '',
    plateNumber: '',
    fuelType: 'Petrol', 
    transmission: 'Manual',
    coveredDistance: '',
    isRented: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const data = this.state;
    event.preventDefault(); 
    axios.post('http://localhost:5000/api/car/addCar', data)
      .catch(err => {
        console.log(err); 
      })
  }



  render() {
    const { carName, carModel, plateNumber, coveredDistance, fuelType, transmission } = this.state;

    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="carName" sm={2} size="lg">Car name</Label>
            <Col sm={10}>
              <Input 
              type="text" 
              value={carName} 
              name="carName" 
              placeholder="car name" 
              bsSize="lg" 
              required
              onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="carModel" sm={2}>Car model</Label>
            <Col sm={10}>
              <Input 
                type="text" 
                value={carModel} 
                name="carModel" 
                placeholder="Car model" 
                required
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="plateNumber" sm={2}>Plates number</Label>
            <Col sm={10}>
              <Input 
                type="text" 
                value={plateNumber} 
                name="plateNumber" 
                placeholder="Plates number" 
                required
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="fuelType" sm={2}>Fuel type</Label>
            <Col sm={10}>
              <Input type="select" value={fuelType} name="fuelType" bsSize="lg" required onChange={this.handleChange}>
                <option defaultValue>Petrol</option>
                <option>Diesel</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="transmission" sm={2}>Transmission</Label>
            <Col sm={10}>
              <Input type="select" value={transmission} name="transmission" placeholder="Transmission" required onChange={this.handleChange}>
                <option defaultValue>Manual</option>
                <option>Automatic</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="coveredDistance" sm={2}>Covered distance</Label>
            <Col sm={10}>
              <Input 
                type="number" 
                value={coveredDistance} 
                name="coveredDistance" 
                placeholder="Covered distance"
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddCar;
