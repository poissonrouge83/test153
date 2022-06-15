const express = require('express');
const router = express.Router();
const generateAccessToken = require('../middleware/jwt/generateToken');
const authenticateToken = require('../middleware/jwt/authenticateToken')


const requireAuth = (req, res, next) => {
    if (req.user) {
        res.dedirect('/home');
    } else {
        next();
    }
};


router.get('/', function (req, res, next) {
    res.render('page/token');
});

router.post('/', authenticateToken, function (req, res, next) {
    res.json(posts.filter(post => post.username === req.user.name));
});

router.post('/refresh', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) 
        return res.sendStatus(401);

    if (!refreshTokens.includes(refreshToken)) 
        return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) 
            return res.sendStatus(403);

        const accessToken = generateAccessToken({ username: user.username })
        res.json({ accessToken: accessToken })
    })
});


module.exports = router;