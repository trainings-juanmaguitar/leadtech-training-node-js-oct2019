require("dotenv").config();

module.exports = {
  "title": "Leadtech Javascript Training - Documentation",
  "links": {
    "sidebar": {
      "1️⃣ Apuntes Principiante": "https://apuntes-javascript-principiante.netlify.com/",
      "2️⃣ Apuntes Intermedio": "https://apuntes-javascript-intermedio.netlify.com/",
      "3️⃣ Apuntes Avanzado": "https://apuntes-javascript-avanzado.netlify.com/",
      "😎 JuanMa DEV Blog": "https://juanma.dev/",
      "👨‍🏫 CodeMentor ": "https://www.codementor.io/juanmagarrido"
    }
  },
  "plugins": [
    "github-embed",
    "anchorjs",
    "video",
    "mygitalk",
    "embed-pdf"
  ],
  "pluginsConfig": {
    "github-embed": {
      token: process.env.GITHUB_API_TOKEN
    },
    "sharing": {
      "google": false,
      "facebook": false,
      "twitter": false
    },
    "mygitalk": {
      "clientID": "1ab9a96f64f47f57ccf7",
      "clientSecret": "ac1e18d17ee85fa237412f77d4b1c07bf2d0a740",
      "repo": "trainings-juanmaguitar/leadtech-training-node-js-oct2019",
      "owner": "juanmaguitar",
      "admin": ['juanmaguitar'],
      "distractionFreeMode": false
    },
    "anchorjs": {
      "selector": "h2,h3,h4,h5",
      "icon": "#",
      "placement": "left",
      "visible": "always",
      "class": "custom-class another-one",
      "truncate": 64,
      "ariaLabel": "Anchor"
    }
  }
}