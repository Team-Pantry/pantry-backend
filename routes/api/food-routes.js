const router = require('express').Router();
const connection = require('../../connection');

// all routes in this file are already pre-pended with "/api/food"


router.get("/", (req, res) => {
	connection.query("SELECT * FROM food_post", function (err, result, fields) {
    if (err) throw err;

    return res.send(JSON.stringify(result));
  });
});

router.get("/:id", (req, res) => {
	connection.query("SELECT * FROM food_post WHERE id = ?", req.params.id, (err, result) => {
		if (err) throw err;

		if (!result || result.length === 0) {
			return res.send(JSON.stringify({message: "No food post with that id can be found"}));
		}

		return res.send(JSON.stringify(result));
	});
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

    return res.send(JSON.stringify({message: "Successfully added food post to database!"}));
  });
});

router.delete("/:id", (req, res) => {
	connection.query("DELETE FROM food_post WHERE id = ?", req.params.id, (err, result) => {
		if (err) throw err;

		if (!result.affectedRows || result.affectedRows.length === 0) {
			return res.send(JSON.stringify({message: "No food post with that id can be found"}));
		}

		return res.send(JSON.stringify({message: "Deleted food post successfully"}));
	})
});

module.exports = router;