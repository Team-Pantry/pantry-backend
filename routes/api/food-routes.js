const router = require('express').Router();

// all routes in this file are already pre-pended with "/api/food"

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/:id", (req, res) => {
	res.send("Hello World!");
});

router.post("/", (req, res) => {
	res.send("Hello World!");
});

router.delete("/:id", (req, res) => {
	res.send("Hello World!");
});

module.exports = router;