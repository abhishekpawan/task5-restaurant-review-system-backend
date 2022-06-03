const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
//making the fake data for the api
const generatingDB = () =>{
    
    const restaurants = [];
    const reviews = [];
    for (let j = 0; j < 10000; j++) {
      const review = {
        id: uuidv4(),
        user_id:uuidv4(),
        name: faker.name.findName(),
        date: faker.date.recent().toString(),
        comment: faker.lorem.paragraph(),
        userRating: faker.datatype.number({min: 1, max: 5}),
      };
      reviews.push(review);
    }

    for (let i = 0; i < 100; i++) {
      const restaurant= {
        id: uuidv4(),
        title: faker.company.companyName() + faker.company.companySuffix(),
        address: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        rating: faker.datatype.number({min: 1, max: 5}),
        reviews: faker.helpers.arrayElements(reviews, 20),
      };

      restaurants.push(restaurant);
    }

    return ({restaurants})
}

module.exports = generatingDB;