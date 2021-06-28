const withPWA = require("next-pwa");
module.exports = withPWA({
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  pwa: {
    dest: "public",
  },
});
