
// import mocha from 'mocha';
import chai, { expect } from 'chai';
import chaiHtpp from 'chai-http';
// import mealsRoute from '../src/routes/meals';
// import menuRoute from '../src/routes/menu';
// import orderRoute from '../src/routes/order';
import app from '../src/app';

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
  describe('create /mealsRoutes', () => {
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


    it('should not update a meal when all required properties are not provided', (done) => {
      chai.request(app)
        .put('/api/v1/meals')
        .send({
          id: 20,
          tittle: 'ryry',
          description: '',
          price: 1500,
          imageUrl: 'rereerre'
        })
        .end((error, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('should update meal option', (done) => {
      chai.request(app)
        .put('/api/v1/meals')
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
  describe('create /mealsRoutes/id', () => {
    it('should return a error for post without field', (done) => {
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

describe('Test For Post Menu Option Route', () => {
  describe('create /menuRoutes', () => {
    it('it should Add a menu option if all field are right', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send({
          id: 20,
          tittle: 'ryry',
          description: 'jolli',
          price: 1500,
          imageUrl: 'rereerre'
        })
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

describe('Test For put order Route', () => {
  describe('create /orderRoutes', () => {
    it('it should create new order meal option if all field are right', (done) => {
      chai.request(app)
        .post('/api/v1/order')
        .send({
          id: 6,
          tittle: 'fried rice',
          quantity: 3,
          time: 'evening',
        })
        .end((error, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
    it('it should not add order list option if any of the field empty', (done) => {
      chai.request(app)
        .put('/api/v1/order')
        .send({})
        .end((error, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('it should not create new order meal if one of the field is not provided', (done) => {
      chai.request(app)
        .post('/api/v1/order')
        .send({
          quantity: 3,
          time: 'evening',
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});


describe('Test For put order Route', () => {
  describe('create /orderRoutes', () => {
    it('it should  selete meal from the order and make a request for order', (done) => {
      chai.request(app)
        .post('/api/v1/order')
        .send({
          id: 8,
          tittle: 'fried rice',
          quantity: 3,
          time: 'evening',
        })
        .end((error, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});

describe('Test For get order Route', () => {
  describe('create /orderRoutes', () => {
    it('it should populate all the order', (done) => {
      chai.request(app)
        .get('/api/v1/order')
        .end((error, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
