/*Get information about Trending repos */
// const rp = require('request-promise')
const githubCall = require('../common.js')

const notifications = () => {

  const params = { all: true };
  const url = 'https://api.github.com/notifications'

  return Promise.all([
    githubCall(url, params)
  ]).then(nots => {
    return { type: 'text', content: getNotifications(nots) }
  })
}

// const githubCall = (repo) => {
//   var options = {
//     url: `https://api.github.com/notifications`,
//     headers: {
//       'User-Agent': process.env.GITHUB_USERNAME,
//       'Authorization': `token ${process.env.GITHUB_TOKEN}`,
//     }
//   }
//
//   return rp(options).then(result => {
//     const body = JSON.parse(result)
//     return {
//       name: body.items[0].full_name,
//       stars: body.items[0].stargazers_count,
//       url: body.items[0].html_url,
//     }
//   })
// }

const getNotifications = (nots) => {
  const notsResp = nots[0];
}

module.exports = notifications;
