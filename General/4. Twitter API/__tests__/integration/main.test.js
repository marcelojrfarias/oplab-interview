const last10Tweets = require("../../src/main")

describe('Last 10 tweets', () => {
  
  it ('should return up to 10 tweets', async () => {
    let word = "twitter"
    const response = await last10Tweets(word)
    expect(response.length).toBeLessThanOrEqual(10)
  })
  
  it ('should return just tweets with a specific word', async () => {
    let word = "twitter"
    const response = await last10Tweets(word)
    response.map(value => {
      expect(value.toUpperCase()).toMatch(word.toUpperCase())
    })
  })
  
})
