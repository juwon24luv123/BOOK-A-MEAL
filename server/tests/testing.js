import mocha from 'mocha';
import chai, { assert, expect } from 'chai';
import chaiHtpp from 'chai-http';
import mealsRoute from '../src/routes/meals';
import menuRoute from '../src/routes/menu';
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
          done();
        });
    });


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
    it('should update meal option', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          id: 5,
          tittle: 'iyan aladuke',
          description: 'delicious meal',
          price: 1000,
          imageUrl: 'niceIMG'
        })
        .end((error, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});


describe('Test For meal update Route', () => {
  describe('Post /mealsRoutes/id', () => {
    it('should retun a error for post without field', (done) => {
      chai.request(app)
        .post('/api/v1/meals/')
        .send({})
        .end((error, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});

describe('Test For meal update Route', () => {
  describe('Delete /mealsRoutes/id', () => {
    it('should delete meal with required field', (done) => {
      chai.request(app)
        .delete('/api/v1/meals')
        .send({
        })
        .end((error, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
});

describe('Test For Post Meal Route', () => {
  describe('Post /mealsRoutes', () => {
    it('it should Add a menu option if all field are right', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({ menuOptions: 'rice, fufu, salad' })
        .end((error, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });

    it('it should not add menu option if all fields are not supplied', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({})
        .end((error, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
