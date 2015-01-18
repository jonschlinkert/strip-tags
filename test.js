/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var assert = require('assert');
var stripTags = require('./');

it('should remove the given tags', function () {
  assert.equal(stripTags('<div><span>foo</span></div>', 'span'), '<div></div>');
  assert.equal(stripTags('<div><span>foo</span></div>', ['span']), '<div></div>');

  assert.equal(stripTags('<div><span>foo</span></div>', 'div'), '');
  assert.equal(stripTags('<div><span>foo</span></div>', ['div']), '');

  assert.equal(stripTags('<div><span><ul><li>item</li></ul></span></div>', 'ul'), '<div><span></span></div>');
  assert.equal(stripTags('<a></a><b></b><c></c>', ['b']), '<a></a><c></c>');
  assert.equal(stripTags('<a></a><b></b><c></c>', ['b', 'c']), '<a></a>');
  assert.equal(stripTags('<a></a><b></b><c></c>', ['a', 'c']), '<b></b>');
});
