import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import '../style.css'

class Car extends Component {
  constructor(){
    super()
    this.state = {
      cars: [],
      error: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/car')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cars: data
        })
      }
    )     
  }
  render(){
    return (
      <div className="container">
        <div className="row">
        {this.state.cars.map((car, key)=> 
        <div key={key} className="card">
          <Card body>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{car.carName}</CardTitle>
                <CardText>{car.carModel} - Best car u ever had</CardText>
                <Button color="success">Rent it now</Button>
              </CardBody>
          </Card>
         </div>
        )}
        </div>
      </div>
    );
  }

}

export default Car;