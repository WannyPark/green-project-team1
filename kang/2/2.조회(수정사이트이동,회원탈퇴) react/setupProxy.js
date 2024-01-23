const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:9292",
            changeOrigin: true,
        })
    );
};