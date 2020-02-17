// var path = require('path');

const {ENVIRONMENT} = process.env
console.log(ENVIRONMENT)

// process.env.PATH // '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
// process.env.PATH.split(path.delimiter) // ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

// path.basename('/foo/bar/baz/asdf/quux.html') // 'quux.html'
// path.basename('/foo/bar/baz/asdf/quux.html', '.html') // 'quux'

// path.dirname('/foo/bar/baz/asdf/quux') // '/foo/bar/baz/asdf'

// path.extname('index.html') // returns '.html'

// path.isAbsolute('/foo/bar') // true
// path.isAbsolute('qux/')     // false

// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') // returns '/foo/bar/baz/asdf'

// path.normalize('/foo/bar//baz/asdf/quux/..') // returns '/foo/bar/baz/asdf'

// 'foo/bar/baz'.split(path.sep) // returns ['foo', 'bar', 'baz']