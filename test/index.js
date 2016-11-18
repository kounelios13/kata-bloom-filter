'use strict';

require('require-all')({
  dirname: __dirname,
  filter: /(.+_spec)\.js$/,
  excludeDirs: /^(support)$/,
});

