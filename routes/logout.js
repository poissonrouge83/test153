const express = require('express');
const router = express.Router();

const requireAuth = (req, res, next) => {
    if (req.user /*req.isAuthenticated()*/) {
        next()
    } else {
        res.redirect('/login');
    }
};

router.get('/', function(req, res, next) {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        refreshTokens = refreshTokens.filter(token => token !== req.body.token);
        res.redirect('/');
      });
});

// router.delete('/', (req, res) => {
//     refreshTokens = refreshTokens.filter(token => token !== req.body.token);
//     res.sendStatus(204);
// });

module.exports = router;
