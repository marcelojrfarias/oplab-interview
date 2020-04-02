# Twitter API
An implementation of a script using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), that given a word as an input, outputs the last 10 tweets containing that word through the Twitter API.
## 🚀 Technologies
The following technologies were used for this project:
- [Node.js](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)
## ⚙️ How to run
#### Cloning the project
```sh
git clone https://github.com/marcelojrfarias/oplab-interview.git
cd '.\oplab-interview\General\4. Twitter API'
```
#### Setting up the environment
See this [link](https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens) to find out how you can generate your bearer token.
```sh
echo 'BEARER_TOKEN=<YOUR_TWITTER_BEARER_TOKEN>' > .env
```
#### Running the code
```sh
yarn
yarn start
```
#### Running the tests
```sh
yarn
yarn test
```
## 🧾 References
- [Developer Twitter - Getting started with premium Search Tweets](https://developer.twitter.com/en/docs/tweets/search/quick-start/premium-30-day)
- [Developer Twitter - Authentication: OAuth 2.0 Bearer Token](https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens)
- [Developer Twitter - Rules and filtering](https://developer.twitter.com/en/docs/tweets/rules-and-filtering/overview/standard-operators)
- [Axios - Reference](https://github.com/axios/axios)