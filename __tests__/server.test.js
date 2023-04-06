'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
//npm testing bad route
describe('Testing the express server', () => {

  test('404 on a bad route', async () => {
    const response = await request.get('/fdgdfg');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });
//npm testing bad method
  test('404 on a bad method', async () => {
    const response = await request.patch('/movies');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });
//POST test to create record
  test('Create a record using POST', async () => {
    const response = await request.post('/movies').send({
      title: "s",
      year: 546,
      runtime: 654,
    });
    expect(response.status).toEqual(200);
  });

  test('Read a list of records using GET', async () => {
    const response = await request.get('/movies');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual({});
  });

  test('Read a record using GET', async () => {
    const response = await request.get('/movies/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Update a record using PUT', async () => {
    const response = await request.put('/movies/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ "id": "1" });
  });

  test('Destroy a record using DELETE', async () => {
    const response = await request.delete('/movies/3');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });

});