const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MyVaccine');
});

app.get('/makeapt', (req, res) => {
  res.send('Schedule Appointment');
});

app.get('/findapt', (req, res) => {
  res.send('Find My Appointment');
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
