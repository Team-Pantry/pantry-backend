const router = require('express').Router();
const connection = require('../../connection');

// all routes in this file are already pre-pended with "/api/food"


router.get("/", (req, res) => {
	connection.query("SELECT * FROM food_post", function (err, result, fields) {
    if (err) throw err;

    res.send(JSON.stringify(result));
  });
});

router.get("/:id", (req, res) => {
	res.send("Hello World!");
});

router.post("/", (req, res) => {
	const foodPost = {
		image: req.body.image,
		title: req.body.title,
		description: req.body.description,
		desired_item: req.body.desired_item,
		user_id: req.body.user_id
	};
	

	connection.query(`INSERT INTO food_post SET ?`, foodPost, 
	function (err, result, fields) {
    if (err) throw err;

    res.send(JSON.stringify({message: "Successfully added food post to database!"}));
  });
});

router.delete("/:id", (req, res) => {
	res.send("Hello World!");
});

module.exports = router;