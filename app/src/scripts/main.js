'use strict';

// Import Javascript modules here:
const example = require('./modules/example');

// ...and then do something with them:
example.init();

// This all gets processed by Babel, so feel free
// to use ES2015 syntax if you like - it will be
// transpiled to backwards-compatible ES5
//
// eg:
[1,2,3].map(x => x * 2);

// ...will be transpiled to:
[1,2,3].map(function(x) { return x * 2; })
