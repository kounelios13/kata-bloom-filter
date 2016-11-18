'use strict';

const test = require('tape');
const x = require('../lib');

test('example', (assert) => {
  assert.equal(x, true, 'this must pass');
  assert.end();
});
