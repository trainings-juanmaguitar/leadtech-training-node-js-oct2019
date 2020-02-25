const dotenv = require('dotenv')
dotenv.config()

const {
  ATLAS_MONGO_USER: user, 
  ATLAS_MONGO_PASSWORD: pass, 
  ATLAS_MONGO_BD: bd, 
  ATLAS_MONGO_CLUSTER: cluster
} = process.env

const ATLAS_URL = `mongodb+srv://${user}:${pass}@${cluster}/${bd}?retryWrites=true&w=majority`

module.exports = {
  ATLAS_URL
}
