/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');

module.exports = function (str, tags) {
  var $ = cheerio.load(str);

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  var len = tags.length;

  while (len--) {
    var $ = cheerio.load($.html().replace(new RegExp('(<'+tags[len]+'.*?>).*?(<\/'+tags[len]+'>)', 'g'), ''));
  }
  return $.html();
};
