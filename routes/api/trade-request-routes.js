const router = require('express').Router();
const connection = require('../../connection');

// all routes in this file are already pre-pended with "/api/trade-request"

router.get("/", (req, res) => {
	connection.query(`SELECT * FROM trade_request`, (err, result) => {
		if (err) throw err;

		return res.send(JSON.stringify(result))
	});
});

router.get("/:id", (req, res) => {
	connection.query(`SELECT * FROM trade_request WHERE id = ?`, req.params.id, (err, result) => {
		if (err) throw err;

		if (!result || result.length === 0) {
			return res.send(JSON.stringify({message: "No trade request with that id can be found"}));
		}

		return res.send(JSON.stringify(result));
	});
});

router.get('/user/buyer/:id', (req, res) => {
	connection.query(`SELECT * FROM trade_request WHERE buyer_id = ?`, req.params.id, (err, result) => {
		if (err) throw err;

		if (!result || result.length === 0) {
			return res.send(JSON.stringify({message: "No trade requests with that buyer id can be found"}));
		}

		return res.send(JSON.stringify(result));
	});
});

router.get('/user/seller/:id', (req, res) => {
	connection.query(`SELECT * FROM trade_request WHERE seller_id = ?`, req.params.id, (err, result) => {
		if (err) throw err;

		if (!result || result.length === 0) {
			return res.send(JSON.stringify({message: "No trade requests with that seller id can be found"}));
		}

		return res.send(JSON.stringify(result));
	});
});

router.post("/", (req, res) => {
	const tradeRequest = {
		buyer_id: req.body.buyer_id,
		seller_id: req.body.seller_id,
		food_post_id: req.body.food_post_id,
		status: req.body.status
	};
	

	connection.query(`INSERT INTO trade_request SET ?`, tradeRequest, 
	function (err, result, fields) {
    if (err) throw err;

    return res.send(JSON.stringify({message: "Successfully added trade request to database!"}));
  });
});

router.delete("/:id", (req, res) => {
	connection.query("DELETE FROM trade_request WHERE id = ?", req.params.id, (err, result) => {
		if (err) throw err;

		if (!result.affectedRows || result.affectedRows.length === 0) {
			return res.send(JSON.stringify({message: "No trade request with that id can be found"}));
		}

		return res.send(JSON.stringify({message: "Deleted trade request successfully"}));
	})
});

router.put("/:id", (req, res) => {
	const sql = `
	UPDATE trade_request
	SET status = ?
	WHERE id = ?
	`;

	const data = [req.body.status, req.params.id];

	connection.query(sql, data, (err, result) => {
		if (err) throw err;

		return res.send(JSON.stringify({message: "Trade request updated successfully"}));
	});
});

module.exports = router;