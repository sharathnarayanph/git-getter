const rp = require('request-promise')

const githubCall = (url) => {
  var options = {
    url: url,
    headers: {
      'User-Agent': process.env.GITHUB_USERNAME,
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    }
  }

  return rp(options).then(result => {
    return result;
  })
}

module.exports = githubCall;
