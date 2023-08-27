const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, (error) => {
	if (!error)
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.post("/api/auth/signup", (req, res) => {
    res.send("Hello World!");
  });
app.post("/api/auth/login", (req, res) => {
    res.send("Hello World!");
  });
app.get("/api/auth/user", (req, res) => {
    res.send("Hello World!");
  });
app.get("/api/auth/user/:id", (req, res) => {
    res.send("Hello World!");
  });
app.put("/api/auth/user/:id", (req, res) => {
    res.send("Hello World!");
  });

app.get("/api/food", (req, res) => {
    res.send("Hello World!");
  });
app.post("/api/food", (req, res) => {
    res.send("Hello World!");
  });
app.get("/api/food/:id", (req, res) => {
    res.send("Hello World!");
  });
app.delete("/api/food/:id", (req, res) => {
    res.send("Hello World!");
  });

app.get("/api/request", (req, res) => {
    res.send("Hello World!");
  });
app.post("/api/request", (req, res) => {
    res.send("Hello World!");
  });
app.get("/api/request/:id", (req, res) => {
    res.send("Hello World!");
  });
app.delete("/api/request/:id", (req, res) => {
    res.send("Hello World!");
  });

app.get('/', (req, res) =>
	res.status(200).json({
		status: 200,
		message: 'The Pantry server is alive and kicking!',
	}),
);