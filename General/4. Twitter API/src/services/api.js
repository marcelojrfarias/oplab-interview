require('dotenv').config()

const axios = require('axios')

const api = axios.create({
  baseURL: "https://api.twitter.com/1.1",
  headers: {
    'Authorization': `Bearer ${process.env.TWITTER_TOKEN}`,
    'content-type': 'application/json'
  }
})

module.exports = api