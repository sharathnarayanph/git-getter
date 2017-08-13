/*Get information about Trending repos */
const rp = require('request-promise')

const trending = (repoKey) => {
  return Promise.all([
    githubCall(repoKey)
  ]).then(repo => {
    return { type: 'text', content: getStatus(repo) }
  })
}

const githubCall = (repo) => {
  var options = {
    url: `https://api.github.com/search/repositories?q=${repo}`,
    headers: {
      'User-Agent': process.env.GITHUB_USERNAME,
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    }
  }

  return rp(options).then(result => {
    const body = JSON.parse(result)
    return {
      name: body.items[0].full_name,
      stars: body.items[0].stargazers_count,
      url: body.items[0].html_url,
    }
  })
}

const getStatus = (repo) => {
  const stars = repo1.stars
  const reply = `${repo.name} has (${repo.start})`
  return reply
}


module.exports = trending
