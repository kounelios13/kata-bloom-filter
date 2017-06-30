'use strict';

const test = require('tape');
const BloomFilter = require('../lib');

test('Initialize', (assert) => {
  const bloom = new BloomFilter(10);

  assert.equal(bloom.isEmpty(), true, 'array is initialized to zeros');
  assert.end();
});

test('add', (assert) => {
  const bloom = new BloomFilter(10);
  bloom.add('tasos');

  assert.equal(bloom.isEmpty(), false, 'array contains a string');
  assert.equal(bloom.lookup('tasos'), true, 'array contains the string');
  assert.end();
});

test('add with 5 hash functions', (assert) => {
  const bloom = new BloomFilter(10, 5);
  bloom.add('tasos');

  assert.equal(bloom.isEmpty(), false, 'array contains a string');
  assert.equal(bloom.lookup('tasos'), true, 'array contains the string');
  assert.end();
});

test('add 2 words', (assert) => {
  const bloom = new BloomFilter(10, 5);
  bloom.add('tasos');
  bloom.add('nikos');

  assert.equal(bloom.isEmpty(), false, 'array contains a string');
  assert.equal(bloom.lookup('tasos'), true, 'array contains the string');
  assert.equal(bloom.lookup('nikos'), true, 'array contains the string');
  assert.equal(bloom.lookup('kwstas'), false, 'array does not contain the string');
  assert.end();
});
