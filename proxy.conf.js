const PROXY_CONFIG = {
  "/api/*": {
    target: "http://localhost:3000",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
};

module.exports = PROXY_CONFIG;
