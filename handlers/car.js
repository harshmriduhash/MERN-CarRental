const db = require('../models');

exports.showCars = async (req, res, next) => {
  try {
    const cars = await db.Car.find();
      res.status(200).json(cars)
  } catch (err) {
    err.status = 400;
    next(err);
  }
}

exports.createCar = async (req, res, next) => {
  try {
    console.log(req.body);
    const { 
      carName,
      carModel, 
      plateNumber, 
      fuelType,
      transmission,
      coveredDistance,
      isRented
    } = req.body;
    const car = await db.Car.create({
      carName,
      carModel,
      plateNumber,
      fuelType,
      transmission,
      coveredDistance,
      isRented
    });
    res.status(200).json(car)
  } catch(err) {
    err.status = 400;
    next(err);
  }
}