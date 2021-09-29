const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/makeapt', (req, res) => {
  res.send('Schedule Appointment');
});

app.get('/findapt', (req, res) => {
  res.send('Find My Appointment');
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
