# strip-tags [![NPM version](https://badge.fury.io/js/strip-tags.svg)](http://badge.fury.io/js/strip-tags)

> Strip specific tags from a string of HTML

## Install with [npm](npmjs.org)

```bash
npm i strip-tags --save
```

## Usage

```js
var stripTags = require('strip-tags');
var html = '<head> <link href="abc.css"> <script src="xyz"></script> </head>';

stripTags(html, 'link');
//=> '<head> <script src="xyz"></script> </head>'

stripTags(html, ['link', 'script']);
//=> '<head> </head>'
```

## Run tests

Install dev dependencies:

```bash
node i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/strip-tags/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 18, 2015._
