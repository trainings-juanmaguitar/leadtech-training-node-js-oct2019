# Sesion 22 - Express Practice (30-01-2020) 

{% video %}https://vimeo.com/389244224{% endvideo %}

## Express

### First Steps

 - [Installing Express](http://expressjs.com/en/starter/installing.html)
 - [Hello world example](http://expressjs.com/en/starter/hello-world.html)
 - [Express application generator](http://expressjs.com/en/starter/generator.html)
 - [Basic routing](http://expressjs.com/en/starter/basic-routing.html)
 - [Serving static files in Express](https://diigo.com/08sjz4)

### Routing

- [Routing](https://diigo.com/08sjze)
- [Middlewares](#211)
- [Using template engines](http://expressjs.com/en/guide/using-template-engines.html)
  - [Serving files wo/ template engines](https://codeforgeek.com/2015/01/render-html-file-expressjs/)
- [Error handling](http://expressjs.com/en/guide/error-handling.html) | [Debugging](http://expressjs.com/en/guide/debugging.html)
- [Database integration](http://expressjs.com/en/guide/database-integration.html)

### Middlewares

- [Writing middleware](https://diigo.com/08sjzk)
- [**Using middleware**](https://diigo.com/08sla5)
- [List middlewares](https://expressjs.com/en/resources/middleware.html)
- [static middleware](http://evanhahn.com/express-dot-static-deep-dive/)
  - [`res.sendfile`](http://expressjs.com/es/4x/api.html#res.sendFile) [[1]](http://www.hacksparrow.com/how-to-server-static-html-files-in-express-js.html)

### [Application](http://expressjs.com/en/4x/api.html#app)

* [`app.all()`](http://expressjs.com/en/4x/api.html#app.all)
* [`app.get`](http://expressjs.com/en/4x/api.html#app.get.method), [`app.post()`](http://expressjs.com/en/4x/api.html#app.post.method), [`app.put`](http://expressjs.com/en/4x/api.html#app.put.method) & [`app.delete()`](http://expressjs.com/en/4x/api.html#app.delete.method)
* [`app.set()`](http://expressjs.com/en/4x/api.html#app.set) & [`app.get()`](http://expressjs.com/en/4x/api.html#app.get)
* [`app.param()`](http://expressjs.com/en/4x/api.html#app.param)
* [`app.use()`](http://expressjs.com/en/4x/api.html#app.use)
* [`app.listen()`](http://expressjs.com/en/4x/api.html#app.listen)
* [`app.locals`](http://expressjs.com/es/api.html#app.locals) [w/ moment.js](http://stackoverflow.com/questions/12419396/how-do-i-display-todays-date-in-node-js-jade)

### [Request](http://expressjs.com/en/4x/api.html#req)

- [`req.body`](http://expressjs.com/en/4x/api.html#req.body) (w/ [_body-parser_](https://www.npmjs.org/package/body-parser))
- [`req.cookies`](http://expressjs.com/en/4x/api.html#req.cookies) (w/ [_ cookie-parser_](https://www.npmjs.com/package/cookie-parser))
- [`req.hostname`](http://expressjs.com/en/4x/api.html#req.hostname), [`req.ip`](http://expressjs.com/en/4x/api.html#req.ip), [`req.method`](http://expressjs.com/en/4x/api.html#req.method)
- [`req.params`](http://expressjs.com/en/4x/api.html#req.params) (w/ `/user/:name`)
- [`req.query`](http://expressjs.com/en/4x/api.html#req.query) (w/ `/search?q=tobi+ferret` )

### [Response](http://expressjs.com/en/4x/api.html#res)

- [`res.send()`](http://expressjs.com/en/4x/api.html#res.send)
- [`res.json()`](http://expressjs.com/en/4x/api.html#res.json)
- [`res.jsonp()`](http://expressjs.com/en/4x/api.html#res.jsonp)
- [`res.sendFile()`](http://expressjs.com/en/4x/api.html#res.sendFile)
- [`res.cookie()`](http://expressjs.com/en/4x/api.html#res.cookie)
- [`res.redirect()`](http://expressjs.com/en/4x/api.html#res.redirect)
- [`res.render()`](http://expressjs.com/en/4x/api.html#res.render)


## Code

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/express/middlewares/static-middleware.js" %}{% endgithub_embed %}

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/express/express-pug/index.js" %}{% endgithub_embed %}

## Practice: expressworks

👉 [Node School: Express](https://github.com/azat-co/expressworks)

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/express/expressworks/3-PUG.js" %}{% endgithub_embed %}


