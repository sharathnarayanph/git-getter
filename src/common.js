const rp = require('request-promise')

const githubCall = (url, params) => {
  var options = {
    url: url,
    headers: {
      'User-Agent': process.env.GITHUB_USERNAME,
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    }
  }

  Object.assign(options, params);

  return rp(options).then(result => {
    return result;
  })
}

module.exports = githubCall;
