'use strict';

const crypto = require('crypto');

function hash1(offset, word) {
  const hash = crypto
    .createHash('md5')
    .update(word)
    .digest();

  return Math.abs(
    hash.slice(0 + offset, 4 + offset).readInt32BE()
  );
}

class BloomFilter {
  constructor(n, k = 1) {
    this.array = new Array(n).fill(0);
    this.n = n;
    this.k = k;
  }

  isEmpty() {
    return this.array.every(n => n === 0);
  }

  add(word) {
    for (let i = 1; i <= this.k; i++) {
      this.array[hash1(i, word) % this.n] = 1;
    }
  }

  lookup(word) {
    let exists = true;
    for (let i = 1; i <= this.k; i++) {
      exists = exists && this.array[hash1(i, word) % this.n] === 1;
    }
    return exists;
  }
}

module.exports = BloomFilter;
