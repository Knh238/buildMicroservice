const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const compression = require('compression')
// const session = require('express-session')
// const passport = require('passport')
const db = require('./db');
const PORT = process.env.PORT || 8080;
const app = express();

module.exports = app;

// const createApp = () => {
// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(require('body-parser').text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/messages', require('./api'));

// static file-serving middleware
// app.use(express.static(path.join(__dirname, '..', 'public')));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
// };

//   const server = app.listen(PORT, () =>
//     console.log(`Mixing it up on port ${PORT}`)
//   )
app.listen(process.env.PORT || 8080, () => console.log('App launched.'));
