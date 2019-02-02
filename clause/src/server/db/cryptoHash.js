const crypto = require('crypto');

// function sha256(data) {
//   const hash = crypto
//     .createHash('sha256')
//     .update(data, 'utf8')
//     .digest('hex');
//   return hash;
// }

// sha256('foo');

// option 2
const hash = crypto.createHash('sha256');

function hashFunc(inputText) {
  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString('hex'));
    }
  });
  hash.write(inputText);
  hash.end();
}
hashFunc('foo');

// option 3
// function hashFunc(inputText) {
//   hash.update(inputText);
//   console.log(hash.digest('hex'));
// }
// hashFunc('foo');
