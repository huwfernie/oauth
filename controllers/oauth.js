const rp = require('request-promise');
const config = require('../config/oauth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function github(req, res, next) {
  return rp({
    method: 'POST',
    url: config.github.accessTokenURL,
    qs: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    return rp({
      method: 'GET',
      url: config.github.profileURL,
      qs: token,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    });
  })
  .then((profile) => {
    return User
      .findOne({ email: profile.email })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.login,
            email: profile.email
          });
        }

        user.githubId = profile.id;
        return user.save();
      });
  })
  .then((user) => {
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
    return res.json({
      token,
      message: `Welcome back ${user.username}!`
    });
  })
  .catch(next);
}

module.exports = { github };
