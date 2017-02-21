var express = require('express');

router = express.Router();

router.get('/x', function(req, res, nex) {
    res.send("Get Request in /");
});

module.exports = router;