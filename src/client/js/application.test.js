/*
  Testiing server file and application file with Jest 
*/
// ############################ For Server Testing ############################
require("regenerator-runtime/runtime");
const request = require('supertest')
const server = require('../../server/server.js')

describe('Post Endpoints', () => {
  afterEach(function () {
    server.close();
  });
  // Testing server response
    test('Testing response status code. Should be 200 ', async () => {
        const res = await request(server)
            .post('/weather')
            .send({
                url: 'https://pixabay.com/api/?key=16333422-0d109d6b922e359855596f3e8&q=city+of+Andorra+la+Vella&image_type=photo'
            })
        expect(res.statusCode).toEqual(200);
    });
});


// ############################ For Application Testing ############################
// For Application Testing
const application = require('./application.js')

//Check the application is defined
test('Testing Application', () => {
  expect(application).toBeDefined();
});
