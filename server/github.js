const fetch = require('node-fetch');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'GITHUB TOKEN PLEASE';
const GITHUB_BASE = 'https://api.github.com'

function getQueryString(params) {
  return Object.keys(params)
    .map(k => k + '=' + params[k])
    .join('&');
}

function get(path, params) {
  const allParams = Object.assign({ access_token: GITHUB_TOKEN, per_page: 100 }, params);
  console.log(`${GITHUB_BASE}${path}?${getQueryString(allParams)}`);
  return fetch(`${GITHUB_BASE}${path}?${getQueryString(allParams)}`);
}

function getJSON(path, params) {
  return get(path, params).then((res) => res.json());
}

function getGithubQueryString(params) {
  return Object.keys(params)
    .map(k => k + ':' + params[k])
    .join('+');
}

// for more info look at this https://developer.github.com/v3/search/#search-issues
function searchIssues(q) {
  q = q || {
    label: 'bug',
    repo: 'tactivos/murally',
    state: 'open',
  };
  const params = { q: getGithubQueryString(q) };
  console.log(params);
  return getJSON('/search/issues', params);
}

module.exports = {
  user: () => getJSON('/user'),
  repos: () => getJSON('/user/repos'),
  issues: () => getJSON('/user/issues'),
  searchIssues,
};
