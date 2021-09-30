const express = require('express');
const app = express();
const path = require('path');

const myVaccineController = require('./myVaccineController');

const PORT = 3000;

// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/dist', express.static(path.join(__dirname, '../src')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/makeapt', (req, res) => {
  res.sendStatus(200);
});

app.post('/makeapt', myVaccineController.addPatient, (req, res) => {
  console.log('make appointment');
  res.status(200).json('Appointment Successful');
});

app.get('/findapt', myVaccineController.getPatient, function (req, res) {
  res.status(200).json(res.locals.patient);
});

app.patch('/update', myVaccineController.updatePatient, function (req, res) {
  res.status(200).json('Successfully Updated');
});

app.delete(
  '/delete/:confNo',
  myVaccineController.deletePatient,
  function (req, res) {
    res.status(200).json('Successfully Deleted');
  }
);

// catch-all route handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));

module.exports = app;
