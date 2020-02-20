require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const db = require('./models');

const users = [{
  username: 'username',
  password: 'password'
},
{
  username: 'admin',
  password: 'admin'
},
];

const cars = [{
  carName: 'Audi',
  carModel: 'r8',
  plateNumber: 'KR00001',
  fuelType: 'Petrol',
  transmission: 'Manual',
  coveredDistance: 1000,
  isRented: false
},
{
  carName: 'BMW',
  carModel: 'E33',
  plateNumber: 'KR99998',
  fuelType: 'Petrol',
  transmission: 'Automatic',
  coveredDistance: 315000,
  isRented: true
}];

const testData = async () => {
  try {
    await db.User.remove();
    console.log('Removed all users');

    await db.Car.remove();
    console.log('Remove all cars');

    await Promise.all(
      users.map(async user => {
        const data = await db.User.create(user);
        await data.save();
      })
    );
    console.log('Created users', JSON.stringify(users));

    await Promise.all(
      cars.map(async car => {
        const data = await db.Car.create(car);
        await data.save();
      })
    );
    console.log('Created cars', JSON.stringify(cars))

  } catch (err){
    console.log(err)
  }
};

testData();