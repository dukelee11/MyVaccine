const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(DB_URI, {
    dbName: 'MyVaccine',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log('SCHEMA ERROR: ',err));

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  stAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  aptDate: { type: String, required: true },
  aptTime: { type: String, required: true },
  doseType: { type: String, required: true },
  confirmationNo: { type: Number, required: true },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = { Patient };
