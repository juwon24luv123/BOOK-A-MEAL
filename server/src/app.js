import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import apiRoutes from './routes';

const app = express();

const port = process.env.PORT || 3000;

// it log all request sent to the server
app.use(logger('dev'));

// middleware for Express
app.use(bodyParser.json());

// middleware
app.use('/api/v1', apiRoutes);


app.listen(port, () => {
  console.log('Started on port 3000');
});

export default app;
