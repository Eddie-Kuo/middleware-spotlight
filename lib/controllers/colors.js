const { Router } = require('express');
const blue = require('../middleware/blue');
const colors = require('../middleware/colors');
const red = require('../middleware/red');

// what middleware does this route need to pass?
module.exports = Router().get('/purple', [colors, red, blue], (req, res) => {
  res.json(req.colors);
});
