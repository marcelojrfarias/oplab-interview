const api = require('./services/api')

const last10Tweets = async function (word) {
  return await api.get('/search/tweets.json',
  {
    params: {
      q: `${word} -filter:retweets -filter:media -filter:links`,
      // lang: "pt",
      tweet_mode: 'extended',
      result_type: 'recent',
      count: 10
    },
  }).then(response => response.data.statuses.map((value) => value.full_text)).catch(error => undefined)
}

module.exports = last10Tweets 