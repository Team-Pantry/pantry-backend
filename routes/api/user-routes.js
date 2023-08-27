const router = require('express').Router();
const connection = require('../../connection');

// all routes in this file are already pre-pended with "/api/user"

router.get("/", (req, res) => {
	connection.query("SELECT id, name, email, location FROM user", function (err, result, fields) {
    if (err) throw err;

    return res.send(JSON.stringify(result));
  });
});

router.get("/:id", (req, res) => {
	connection.query("SELECT id, name, email, location FROM user WHERE id = ?", req.params.id, (err, result) => {
		if (err) throw err;

		if (!result || result.length === 0) {
			return res.send(JSON.stringify({message: "No user with that id can be found"}));
		}

		return res.send(JSON.stringify(result));
	});
});

router.post("/signup", (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		location: req.body.location,
	};
	

	connection.query(`INSERT INTO user SET ?`, user, 
	function (err, result, fields) {
    if (err) throw err;

    return res.send(JSON.stringify({message: "Successfully added user to database!"}));
  });
});

// router.post("/login", (req, res) => {
// 	res.send("Hello World!");
// });

// router.put("/:id", (req, res) => {
// 	res.send("Hello World!");
// });

module.exports = router;