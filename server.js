const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(routes);

app.listen(PORT, (error) => {
	if (!error)
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
});

app.get('/', (req, res) =>
	res.status(200).json({
		status: 200,
		message: 'The Pantry server is alive and kicking!',
	}),
);