const router = require('express').Router();
module.exports = router;

router.use('/messages', require('./messages'));
router.use('/clause', require('./clause'));
router.use('/claws', require('./claws'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
