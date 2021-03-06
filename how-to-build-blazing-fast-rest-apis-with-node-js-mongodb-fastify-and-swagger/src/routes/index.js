// Import our Controllers
const carController = require('../controllers/carController');

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: {
      body: {
        type: 'object',
        required: ['title', 'brand', 'price', 'age'],
        additionalProperties: false,
        properties: {
          title: {
            type: 'string',
          },
          brand: {
            type: 'string',
          },
          price: {
            type: 'string',
          },
          age: {
            type: 'string',
          }
        }
      }
    }
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  }
];

module.exports = routes;