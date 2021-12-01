const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./apiRouter');

const PORT = 3000;

// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/dist', express.static(path.join(__dirname, '../src')));

app.use('/api', apiRouter);


// catch-all because of client-side rendering
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

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
