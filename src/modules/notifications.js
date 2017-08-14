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

const getNotifications = (nots) => {
  const notsResp = nots[0];
}

module.exports = notifications;
