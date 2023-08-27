const router = require('express').Router();

// all routes in this file are already pre-pended with "/api/user"

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/:id", (req, res) => {
	res.send("Hello World!");
});

router.post("/signup", (req, res) => {
	res.send("Hello World!");
});

router.post("/login", (req, res) => {
	res.send("Hello World!");
});

router.put("/:id", (req, res) => {
	res.send("Hello World!");
});

module.exports = router;