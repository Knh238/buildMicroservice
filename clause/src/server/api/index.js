'use strict';
const router = require('express').Router();

router.use('/messages', require('./messages'));
// router.use('/clause', require('./clause'));
// router.use('/claws', require('./claws'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
