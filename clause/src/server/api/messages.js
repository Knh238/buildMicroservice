const router = require('express').Router();

const crypto = require('crypto');
module.exports = router;
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body}`
//   );
// });

router.post('/', async (req, res, next) => {
  try {
    // const msg = cryptoß
    //   .createHash('sha256')
    //   .update(req.body.message, 'binary')
    //   .digest('hex');
    console.log('messasge is in here', req.body);
    // res.status(201).json(msg);
    // res.json(msg);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body}`
    );
  } catch (err) {
    next(err);
  }
});
router.get('/:message', async (req, res, next) => {
  try {
    // const msg = req.params.id;
    const msg = await crypto
      .createHash('sha256')
      .update(req.params.message, 'binary')
      .digest('hex');
    console.log('message is in here', msg);
    res.json(msg);
  } catch (err) {
    next(err);
  }
});
