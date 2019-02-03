const router = require('express').Router();
//const { sha256 } = require('../db/cryptoHash');
const { hashFunc } = require('../db/cryptoHash');
const crypto = require('crypto');
// const hash = crypto.createHash('sha256');

// router.get('/', async (req, res, next) => {
//   try {
//     // const defaultMsg = hash()
//     // res.json(defaultMsg;
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/clause', async (req, res, next) => {
//   try {
//     // const defaultMsg = hash()
//     // res.json(defaultMsg;
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/message/:id', async (req, res, next) => {
  try {
    // const msg = req.params.id;
    const msg = crypto
      .createHash('sha256')
      .update(req.params.id, 'binary')
      .digest('hex');
    console.log('messasge is in here', msg);
    res.json(msg);
  } catch (err) {
    next(err);
  }
});

// router.get('/:id', async (req, res, next) => {
//   try {
//     // const msg= hash (req.params.id)
//     // res.json(msg);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/category/:categoryId', async (req, res, next) => {
//   try {
//     //const msg = hash()
//     // res.json(msg);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/messages', async (req, res, next) => {
  try {
    const msg = crypto
      .createHash('sha256')
      .update(req.body, 'binary')
      .digest('hex');
    console.log('messasge is in here', msg);
    res.status(201).json(msg);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
