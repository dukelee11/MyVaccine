const mongoose = require('mongoose');

const mongoURI =
  'mongodb+srv://duke:codesmith@cluster0.pfd4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

try {
  await mongoose.connect(mongoURI, { dbName: 'MyVaccine' });
  console.log('Connected to Mongo DB.');
} catch (error) {
  console.log(error);
}

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  stAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  confirmationNo: { type: Number, required: true },
});
const Patient = mongoose.model('Patient', patientSchema);

module.exports = { Patient };
