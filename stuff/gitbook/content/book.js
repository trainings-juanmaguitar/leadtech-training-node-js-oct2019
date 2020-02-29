require("dotenv").config();

const {
  GITHUB_API_TOKEN,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET
} = process.env

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
      token: GITHUB_API_TOKEN
    },
    "sharing": {
      "google": false,
      "facebook": false,
      "twitter": false
    },
    "mygitalk": {
      "clientID": GITHUB_CLIENT_ID,
      "clientSecret": GITHUB_CLIENT_SECRET,
      "repo": "leadtech-training-node-js-oct2019",
      "owner": "trainings-juanmaguitar",
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