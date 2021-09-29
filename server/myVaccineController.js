const { Patient } = require('./myVaccineModels');
const { all } = require('./server');

const myVaccineController = {};

myVaccineController.addPatient = async (req, res, next) => {
  try {
    req.body.confirmationNo = Math.floor(100000 + Math.random() * 900000);
    const newPatient = await Patient.create(req.body);
    console.log('newPatient', newPatient);
    return next();
  } catch (err) {
    return next({ log: 'error in addpatient middleware', message: { err } });
  }
};

myVaccineController.getPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ confirmationNo: req.query.q });
    res.locals.patient = patient;
    return next();
  } catch (err) {
    return next({ log: 'error in getpatient middleware', message: { err } });
  }
};

myVaccineController.updatePatient = async (req, res, next) => {};

myVaccineController.deletePatient = async (req, res, next) => {};

module.exports = myVaccineController;
