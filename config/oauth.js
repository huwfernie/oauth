module.exports = {
  github: {
    loginURL: 'https://github.com/login/oauth/authorize',
    accessTokenURL: 'https://github.com/login/oauth/access_token',
    profileURL: 'https://api.github.com/user',
    clientId: process.env.eventApp_GITHUB_CLIENT_ID,
    clientSecret: process.env.eventApp_GITHUB_CLIENT_SECRET,
    scope: 'user:email'
  }
};
