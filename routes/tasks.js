var express = require('express');

router = express.Router();

router.get('/status', function(req, res, nex) {
    res.send("Get Request in /status");
});

module.exports = router;