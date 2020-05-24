import sha256 from 'crypto-js/sha256';
 
const hashDigest = sha256('hello world');

console.log(hashDigest);