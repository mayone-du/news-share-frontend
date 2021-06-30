const withPWA = require("next-pwa");
module.exports = withPWA({
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    SLACK_API_URL: process.env.SLACK_API_URL,
  },
  pwa: {
    dest: "public",
  },
});
