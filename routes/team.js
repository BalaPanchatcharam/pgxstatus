var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://cog:pgx@ds157549.mlab.com:57549/pgxcog', ['users']);
router = express.Router();

// Get all users
router.get('/users', function(req, res, next) {
    db.users.find(function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

// Get all users
router.get('/user/:uId', function(req, res, next) {
    db.users.findOne({userId: req.params.uId}, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = router;