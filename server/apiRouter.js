const express = require('express');
const router = express.Router();

const myVaccineController = require('./myVaccineController');

router.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// router.get('/makeapt', (req, res) => {
//   res.sendStatus(200);
// });

router.post('/makeapt', myVaccineController.addPatient, (req, res) => {
	console.log('make appointment');
	res.status(200).json(res.locals.newPatient);
});

router.get('/findapt', myVaccineController.getPatient, function (req, res) {
	res.status(200).json(res.locals.patient);
});

router.patch('/update', myVaccineController.updatePatient, function (req, res) {
	res.status(200).json(res.locals.updatePatient);
});

router.delete('/delete/:confNo', myVaccineController.deletePatient, function (req, res) {
	res.status(200).json('Successfully Deleted');
});

module.exports = router;