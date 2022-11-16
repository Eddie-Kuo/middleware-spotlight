const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({ status: 418 }); //can add message as well
  })
  .get('/payment', (req, res, next) => {
    next({ status: 402 });
  });
