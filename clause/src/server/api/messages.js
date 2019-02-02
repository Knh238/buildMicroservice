const router = require('express').Router();
//const { hash } = require('../db/cryptoHash');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    // const defaultMsg = hash()
    // res.json(defaultMsg;
  } catch (err) {
    next(err);
  }
});

router.get('/clause', async (req, res, next) => {
  try {
    // const defaultMsg = hash()
    // res.json(defaultMsg;
  } catch (err) {
    next(err);
  }
});

router.get('/message/:id', async (req, res, next) => {
  try {
    // const msg= hash (req.params.id)
    // res.json(msg);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    // const msg= hash (req.params.id)
    // res.json(msg);
  } catch (err) {
    next(err);
  }
});

router.get('/category/:categoryId', async (req, res, next) => {
  try {
    //const msg = hash()
    // res.json(msg);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // const msg = await hash(req.body);
    // res.status(201).json(msg);
  } catch (err) {
    next(err);
  }
});
