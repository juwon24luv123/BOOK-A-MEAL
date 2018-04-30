import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import apiRoutes from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));

// middleware for Express
app.use(bodyParser.json());


app.use('/api/v1', apiRoutes);


app.listen(port, () => {
  ('Started on port 3000');
});

export default app;
