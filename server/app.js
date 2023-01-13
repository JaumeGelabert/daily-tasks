const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const multer = require('multer');
const taskRouter = require('./routes/tasks.router');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(
  cors({
    origin: 'https://daily-tasks-jaume.vercel.app',
  })
);

// Rutas
app.use('/tasks', taskRouter);

module.exports = app;
