const router = require('express').Router();
const users = require('../controllers/users');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show);

router.route('/oauth/github')
  .post(oauth.github);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
