import mocha from 'mocha';
import chai, { assert, expect } from 'chai';
import chaiHtpp from 'chai-http';
import mealsRoute from '../src/routes/meals';
import app from '../src/app';
// import apiRoutes from '../src/routes/index';

chai.use(chaiHtpp);
describe('Test For Meal Route', () => {
  describe('GET /mealsRoute', () => {
    it('it should get all meals', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((error, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});

describe('Test For Post Meal Route', () => {
  describe('Post /mealsRoutes', () => {
    it('it should Add a meal option if all field are right', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          id: 20,
          tittle: 'rice',
          description: 'plantain',
          price: 1500,
          imageUrl: 'image path'
        })
        .end((error, res) => {
          expect(res).to.have.status(201);
          // expect(res.body.meals.tittle).to.equals('rice');
          // expect(res.body.meals.imageUrl).to.equals('image path');
          // expect(res.body.meals.description).to.equals('plantain');
          // expect(res.body.meals.id).to.equals(20);
          done();
        });
    });
  });
});

describe('Test For Post Meal Route', () => {
  describe('Post /mealsRoutes', () => {
    it('should not create a meal when all required properties are not provided', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          id: 20,
          tittle: 'ryry',
          description: '',
          price: 1500,
          imageUrl: 'rereerre'
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
