# Sesion 9 - Asynchronous Javascript: Promises (03-12-2019) 

{% video %}https://vimeo.com/377087998{% endvideo %}

- [5 Topics you should handle to start being a serious JavaScript Developer](https://www.codementor.io/juanmagarrido/5-topics-you-should-handle-to-start-being-a-serious-javascript-developer-j2xw5m628)

👉 [Promise [mdn]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Code 

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/11-multiple-promises.js" %}{% endgithub_embed %}

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/11-multiple-promises-alt.js" %}{% endgithub_embed %}

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/quick-demo-request-url.js" %}{% endgithub_embed %}

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/quick-demo-request-url-alt1.js" %}{% endgithub_embed %}

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/quick-demo-request-url-alt2.js" %}{% endgithub_embed %}



## Practice

👉 [Node School: Promises](https://github.com/stevekane/promise-it-wont-hurt)

```
Having the "Julianne.OConner@kory.org" mail written in a file called mail.txt
→ get the mail from that file
→ get the user from 'http://jsonplaceholder.typicode.com/users' that have this mail
→ get the posts of that user (using its key) from 'http://jsonplaceholder.typicode.com/posts?userid=2'
→ write in a file the titles of the posts separated by `\n`
```

```js
getMailFromFile()
	.then(getUserWithThatMail)
	.then(getPostsFromUser)
	.then(writePostTitles)
```

---

{% github_embed "https://github.com/trainings-juanmaguitar/leadtech-training-node-js-oct2019/blob/master/stuff/code/promise-it-wont-hurt/exercise-promises-mail.js" %}{% endgithub_embed %}



