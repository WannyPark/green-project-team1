const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/home",
        createProxyMiddleware({
            target: "http://localhost:8182",
            changeOrigin: true,
        })
    );
};